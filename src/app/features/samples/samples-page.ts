import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  SampleOrder,
  SampleOrderAlert,
  SampleOrderItem,
  SampleOrderStatus,
  SampleTransitionPayload,
} from '../../core/sample-orders.models';
import { SampleOrdersService } from '../../core/sample-orders.service';
import { SessionService } from '../../core/session.service';
import { VisitContextService } from '../../core/visit-context.service';
import { SampleTransitionDialog } from '../../shared/dialogs/sample-transition-dialog';
import { UploadApprovalDialog } from '../../shared/dialogs/upload-approval-dialog';
import { MOCK_CLIENTS, MOCK_SUPPLIES, MOCK_USERS } from './samples.mock';
import { MockClient, MockSupply, MockUser, ResolutionFilter, SampleTab } from './samples.types';

type ViewMode = 'cards' | 'lines';
type OrderItemRow = {
  order: SampleOrder;
  item: SampleOrderItem;
};

@Component({
  selector: 'app-samples-page',
  imports: [FormsModule, MatIconModule, SampleTransitionDialog, UploadApprovalDialog],
  templateUrl: './samples-page.html',
})
export class SamplesPage {
  private readonly visitContext = inject(VisitContextService);
  private readonly ordersService = inject(SampleOrdersService);
  private readonly session = inject(SessionService);

  readonly selectedTab = signal<SampleTab>('active');
  readonly resolutionFilter = signal<ResolutionFilter>('approved');
  readonly viewMode = signal<ViewMode>('cards');
  readonly searchQuery = signal('');
  readonly statusFilter = signal<'Todos' | SampleOrderStatus>('Todos');
  readonly transitionTarget = signal<{ orderId: string; itemId: string } | null>(null);
  readonly deleteTarget = signal<{ orderId: string; itemId: string } | null>(null);
  readonly isApprovalUploadOpen = signal(false);

  readonly clients = MOCK_CLIENTS;
  readonly supplies = MOCK_SUPPLIES;
  readonly users = MOCK_USERS;
  readonly currentUser = this.session.currentUser;
  readonly activeClient = this.visitContext.activeClient;
  readonly orderStatusSteps: SampleOrderStatus[] = ['Pedido', 'Enviado', 'Recibido', 'Entregado'];
  readonly statusOptions: Array<'Todos' | SampleOrderStatus> = [
    'Todos',
    'Pedido',
    'Enviado',
    'Recibido',
    'Entregado',
  ];
  readonly tabs: { id: SampleTab; label: string; icon: string }[] = [
    { id: 'active', label: 'Muestras Activas', icon: 'science' },
    { id: 'resolved', label: 'Muestras Resueltas', icon: 'handshake' },
    { id: 'approvals', label: 'Planillas de Aprobación', icon: 'verified' },
  ];

  readonly roleOrders = computed(() => {
    const user = this.currentUser();
    const activeClientId = this.visitContext.activeClientId();
    return this.ordersService.orders().filter((order) => {
      const matchesRole =
        user.role === 'Coordinador' ? order.coordinatorId === user.id : order.sellerId === user.id;
      return matchesRole && (!activeClientId || order.clientId === activeClientId);
    });
  });

  readonly activeRows = computed(() =>
    this.filterRows(
      this.roleOrders().flatMap((order) =>
        order.items
          .filter((item) => item.status !== 'Aprobada' && item.status !== 'Rechazada')
          .map((item) => ({ order, item })),
      ),
    ),
  );

  readonly visibleOrders = computed(() => {
    const rows = this.activeRows();
    return this.roleOrders()
      .map((order) => ({
        ...order,
        items: rows.filter((row) => row.order.id === order.id).map((row) => row.item),
      }))
      .filter((order) => order.items.length > 0);
  });

  readonly orderGroups = computed(() => {
    const groups = new Map<string, SampleOrder[]>();
    for (const order of this.visibleOrders()) {
      groups.set(order.sellerId, [...(groups.get(order.sellerId) ?? []), order]);
    }
    return Array.from(groups.entries()).map(([sellerId, orders]) => ({
      seller: this.userById(sellerId),
      orders,
    }));
  });

  readonly resolvedRows = computed(() => {
    const expectedStatus = this.resolutionFilter() === 'approved' ? 'Aprobada' : 'Rechazada';
    return this.roleOrders()
      .flatMap((order) => order.items.map((item) => ({ order, item })))
      .filter((row) => row.item.status === expectedStatus);
  });

  readonly selectedTransition = computed(() => {
    const target = this.transitionTarget();
    return target ? this.findRow(target.orderId, target.itemId) : null;
  });

  readonly selectedDelete = computed(() => {
    const target = this.deleteTarget();
    return target ? this.findRow(target.orderId, target.itemId) : null;
  });

  openTransition(orderId: string, itemId: string): void {
    this.transitionTarget.set({ orderId, itemId });
  }

  confirmTransition(payload: SampleTransitionPayload): void {
    const target = this.transitionTarget();
    if (!target) {
      return;
    }
    this.ordersService.transitionItem(
      target.orderId,
      target.itemId,
      payload,
      this.currentUser().name,
    );
    this.transitionTarget.set(null);
  }

  confirmDelete(): void {
    const target = this.deleteTarget();
    if (!target) {
      return;
    }
    this.ordersService.deleteItem(target.orderId, target.itemId);
    this.deleteTarget.set(null);
  }

  actionLabel(row: OrderItemRow): string | null {
    const user = this.currentUser();
    if (user.role === 'Coordinador') {
      return row.item.status === 'Pedido' ? 'Marcar enviado' : null;
    }
    if (row.order.sellerId !== user.id) {
      return null;
    }
    const labels: Partial<Record<SampleOrderStatus, string>> = {
      Enviado: 'Marcar recibido',
      Recibido: 'Marcar entregado',
      Entregado: 'Evaluar',
    };
    return labels[row.item.status] ?? null;
  }

  orderAlert(item: SampleOrderItem): SampleOrderAlert | null {
    return this.ordersService.alertFor(item, this.currentUser().role);
  }

  statusReached(item: SampleOrderItem, status: SampleOrderStatus): boolean {
    return this.orderStatusSteps.indexOf(status) <= this.orderStatusSteps.indexOf(item.status);
  }

  dateSummary(item: SampleOrderItem): string {
    if (item.status === 'Pedido') {
      return `Pedido: ${item.requestedAt}`;
    }
    if (item.status === 'Enviado') {
      return `Recepción estimada: ${item.estimatedReception}`;
    }
    if (item.status === 'Recibido') {
      return `Entrega estimada: ${item.estimatedDelivery}`;
    }
    if (item.status === 'Entregado') {
      return `Seguimiento: ${item.followUpAt}`;
    }
    return `Resuelta: ${item.deliveredAt}`;
  }

  clientById(clientId: string): MockClient {
    return this.clients.find((client) => client.id === clientId) ?? this.clients[0];
  }

  supplyById(supplyId: string): MockSupply {
    return this.supplies.find((supply) => supply.id === supplyId) ?? this.supplies[0];
  }

  userById(userId: string): MockUser {
    return this.users.find((user) => user.id === userId) ?? this.users[0];
  }

  private filterRows(rows: OrderItemRow[]): OrderItemRow[] {
    const query = this.searchQuery().trim().toLowerCase();
    const status = this.statusFilter();
    return rows.filter((row) => {
      const client = this.clientById(row.order.clientId);
      const supply = this.supplyById(row.item.supplyId);
      const seller = this.userById(row.order.sellerId);
      const matchesStatus = status === 'Todos' || row.item.status === status;
      const matchesQuery =
        !query ||
        client.name.toLowerCase().includes(query) ||
        supply.name.toLowerCase().includes(query) ||
        supply.brand.toLowerCase().includes(query) ||
        seller.name.toLowerCase().includes(query) ||
        row.item.status.toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }

  private findRow(orderId: string, itemId: string): OrderItemRow | null {
    const order = this.ordersService.orders().find((item) => item.id === orderId);
    const item = order?.items.find((sample) => sample.id === itemId);
    return order && item ? { order, item } : null;
  }
}
