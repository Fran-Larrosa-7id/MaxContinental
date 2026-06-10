import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SampleOrder, SampleOrderStatus } from '../../core/sample-orders.models';
import { SampleOrdersService } from '../../core/sample-orders.service';
import { VisitContextService } from '../../core/visit-context.service';
import { ConfirmDeleteDialog } from '../../shared/dialogs/confirm-delete-dialog';
import { EditSampleDialog } from '../../shared/dialogs/edit-sample-dialog';
import { NewSampleDialog } from '../../shared/dialogs/new-sample-dialog';
import { UploadApprovalDialog } from '../../shared/dialogs/upload-approval-dialog';
import {
  MOCK_CLIENTS,
  MOCK_SAMPLES,
  MOCK_SUPPLIES,
  MOCK_USERS,
  STATUS_FILTERS,
} from './samples.mock';
import {
  CreateSamplePayload,
  MockClient,
  MockSupply,
  MockUser,
  ResolutionFilter,
  Sample,
  SampleStatus,
  SampleTab,
  StatusFilter,
  UpdateSamplePayload,
} from './samples.types';

@Component({
  selector: 'app-samples-page',
  imports: [
    FormsModule,
    MatIconModule,
    NewSampleDialog,
    EditSampleDialog,
    ConfirmDeleteDialog,
    UploadApprovalDialog,
  ],
  templateUrl: './samples-page.html',
})
export class SamplesPage {
  private readonly visitContext = inject(VisitContextService);
  private readonly ordersService = inject(SampleOrdersService);

  readonly selectedTab = signal<SampleTab>('active');
  readonly resolutionFilter = signal<ResolutionFilter>('approved');
  readonly statusFilter = signal<StatusFilter>('Todos los estados');
  readonly searchQuery = signal('');
  readonly samples = signal<Sample[]>(MOCK_SAMPLES);
  readonly selectedSampleIds = signal<string[]>([]);
  readonly isNewSampleOpen = signal(false);
  readonly isApprovalUploadOpen = signal(false);
  readonly editingSampleId = signal<string | null>(null);
  readonly deleteTargetIds = signal<string[]>([]);
  readonly orderSearchQuery = signal('');
  readonly estimatedDeliveryDrafts = signal<Record<string, string>>({});

  readonly clients = MOCK_CLIENTS;
  readonly supplies = MOCK_SUPPLIES;
  readonly users = MOCK_USERS;
  readonly statuses = STATUS_FILTERS;
  readonly activeClient = this.visitContext.activeClient;
  readonly orders = this.ordersService.orders;
  readonly orderStatusSteps: SampleOrderStatus[] = ['Pedido', 'Enviado', 'Recibido', 'Entregado'];

  readonly sellers = computed(() => this.users.filter((user) => user.isSeller));
  readonly editingSample = computed(
    () => this.samples().find((sample) => sample.id === this.editingSampleId()) ?? null,
  );
  readonly selectedCount = computed(() => this.selectedSampleIds().length);
  readonly deleteTargetSamples = computed(() =>
    this.samples().filter((sample) => this.deleteTargetIds().includes(sample.id)),
  );
  readonly filteredOrders = computed(() => {
    const activeClientId = this.visitContext.activeClientId();
    const query = this.orderSearchQuery().trim().toLowerCase();

    return this.orders().filter((order) => {
      const client = this.clientById(order.clientId);
      const seller = this.userById(order.sellerId);
      const supplyNames = order.items.map((item) => this.supplyById(item.supplyId).name).join(' ');
      const matchesClient = !activeClientId || order.clientId === activeClientId;
      const matchesQuery =
        !query ||
        client.name.toLowerCase().includes(query) ||
        seller.name.toLowerCase().includes(query) ||
        supplyNames.toLowerCase().includes(query) ||
        order.status.toLowerCase().includes(query);

      return matchesClient && matchesQuery;
    });
  });
  readonly orderGroups = computed(() => {
    const groups = new Map<string, SampleOrder[]>();
    for (const order of this.filteredOrders()) {
      groups.set(order.sellerId, [...(groups.get(order.sellerId) ?? []), order]);
    }

    return Array.from(groups.entries()).map(([sellerId, orders]) => ({
      seller: this.userById(sellerId),
      orders,
    }));
  });

  readonly filteredActiveSamples = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const status = this.statusFilter();
    const activeClientId = this.visitContext.activeClientId();

    return this.samples().filter((sample) => {
      const client = this.clientById(sample.clientId);
      const supply = this.supplyById(sample.supplyId);
      const seller = this.userById(sample.sellerId);
      const matchesClient = !activeClientId || sample.clientId === activeClientId;
      const matchesStatus = status === 'Todos los estados' || sample.status === status;
      const matchesQuery =
        !query ||
        client.name.toLowerCase().includes(query) ||
        client.locality.toLowerCase().includes(query) ||
        supply.name.toLowerCase().includes(query) ||
        supply.brand.toLowerCase().includes(query) ||
        seller.name.toLowerCase().includes(query);

      return matchesClient && matchesStatus && matchesQuery;
    });
  });

  readonly allFilteredSelected = computed(() => {
    const filtered = this.filteredActiveSamples();
    const selected = this.selectedSampleIds();
    return filtered.length > 0 && filtered.every((sample) => selected.includes(sample.id));
  });

  readonly tabs: { id: SampleTab; label: string; icon: string }[] = [
    { id: 'active', label: 'Muestras Activas', icon: 'science' },
    { id: 'resolved', label: 'Muestras Resueltas', icon: 'handshake' },
    { id: 'approvals', label: 'Planillas de Aprobacion', icon: 'verified' },
  ];

  readonly resolutionFilters: { id: ResolutionFilter; label: string }[] = [
    { id: 'approved', label: 'Aprobadas' },
    { id: 'rejected', label: 'Rechazadas' },
  ];

  readonly emptyMessage = computed(() =>
    this.resolutionFilter() === 'approved'
      ? 'No hay muestras resueltas.'
      : 'No hay muestras rechazadas.',
  );

  openNewSample(): void {
    this.isNewSampleOpen.set(true);
  }

  openApprovalUpload(): void {
    this.isApprovalUploadOpen.set(true);
  }

  openEditSample(sampleId: string): void {
    this.editingSampleId.set(sampleId);
  }

  openDeleteSample(sampleId: string): void {
    this.editingSampleId.set(null);
    this.isNewSampleOpen.set(false);
    this.deleteTargetIds.set([sampleId]);
  }

  openDeleteSelected(): void {
    this.editingSampleId.set(null);
    this.isNewSampleOpen.set(false);
    this.deleteTargetIds.set(this.selectedSampleIds());
  }

  closeDialogs(): void {
    this.isNewSampleOpen.set(false);
    this.isApprovalUploadOpen.set(false);
    this.editingSampleId.set(null);
    this.deleteTargetIds.set([]);
  }

  createSamples(payload: CreateSamplePayload): void {
    const today = this.formatDate(new Date());
    const now = this.formatDateTime(new Date());
    const supplyIds = payload.supplyIds.length
      ? payload.supplyIds
      : [this.addOtherSupply(payload.otherSupply)];

    const createdSamples = supplyIds
      .filter((supplyId): supplyId is string => Boolean(supplyId))
      .map((supplyId, index) => ({
        id: `sample-${Date.now()}-${index}`,
        clientId: payload.clientId,
        supplyId,
        sellerId: payload.sellerId,
        coordinatorId: 'user-arnaldo',
        status: 'Creada' as SampleStatus,
        nextFollowUp: null,
        updatedAt: today,
        history: [
          {
            id: `movement-${Date.now()}-${index}`,
            author: 'Arnaldo Parra',
            authorRole: 'Jefe de Ventas' as const,
            to: 'Creada' as SampleStatus,
            note: payload.observations?.trim() || 'Muestra creada.',
            date: now,
          },
        ],
      }));

    this.samples.update((current) => [...createdSamples, ...current]);
    this.closeDialogs();
  }

  updateSample(payload: UpdateSamplePayload): void {
    const sample = this.samples().find((item) => item.id === payload.id);
    if (!sample) {
      return;
    }

    const previousStatus = sample.status;
    const mention = this.users.find((user) => user.id === payload.mentionUserId);
    const noteParts = [payload.comment.trim()];
    if (mention) {
      noteParts.push(`Mencionado: @${mention.name}`);
    }

    this.samples.update((current) =>
      current.map((item) =>
        item.id === payload.id
          ? {
              ...item,
              status: payload.status,
              updatedAt: this.formatDate(new Date()),
              history: [
                ...item.history,
                {
                  id: `movement-${Date.now()}`,
                  author: 'Arnaldo Parra',
                  authorRole: 'Jefe de Ventas',
                  from: previousStatus,
                  to: payload.status,
                  note: noteParts.filter(Boolean).join(' - ') || 'Actualizacion de muestra.',
                  date: this.formatDateTime(new Date()),
                },
              ],
            }
          : item,
      ),
    );
    this.closeDialogs();
  }

  confirmDelete(): void {
    const ids = this.deleteTargetIds();
    this.samples.update((current) => current.filter((sample) => !ids.includes(sample.id)));
    this.selectedSampleIds.update((current) => current.filter((id) => !ids.includes(id)));
    this.closeDialogs();
  }

  toggleSampleSelection(sampleId: string, checked: boolean): void {
    this.selectedSampleIds.update((current) =>
      checked ? [...new Set([...current, sampleId])] : current.filter((id) => id !== sampleId),
    );
  }

  toggleAllActive(checked: boolean): void {
    const filteredIds = this.filteredActiveSamples().map((sample) => sample.id);
    this.selectedSampleIds.update((current) =>
      checked
        ? [...new Set([...current, ...filteredIds])]
        : current.filter((id) => !filteredIds.includes(id)),
    );
  }

  isSelected(sampleId: string): boolean {
    return this.selectedSampleIds().includes(sampleId);
  }

  orderAlert(order: SampleOrder) {
    return this.ordersService.alertFor(order);
  }

  statusReached(order: SampleOrder, status: SampleOrderStatus): boolean {
    return this.orderStatusSteps.indexOf(status) <= this.orderStatusSteps.indexOf(order.status);
  }

  updateEstimatedDelivery(orderId: string, value: string): void {
    this.estimatedDeliveryDrafts.update((current) => ({ ...current, [orderId]: value }));
  }

  estimatedDeliveryValue(order: SampleOrder): string {
    return this.estimatedDeliveryDrafts()[order.id] ?? this.toInputDate(order.estimatedDelivery);
  }

  markSent(order: SampleOrder): void {
    const inputDate = this.estimatedDeliveryValue(order);
    if (!inputDate) {
      return;
    }

    this.ordersService.advanceOrder(order.id, 'Enviado', this.fromInputDate(inputDate));
  }

  markReceived(order: SampleOrder): void {
    this.ordersService.advanceOrder(order.id, 'Recibido');
  }

  markDelivered(order: SampleOrder): void {
    this.ordersService.advanceOrder(order.id, 'Entregado');
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

  private addOtherSupply(otherSupply?: string): string {
    const name = otherSupply?.trim();
    if (!name) {
      return '';
    }

    const id = `supply-custom-${Date.now()}`;
    this.supplies.push({
      id,
      name,
      brand: 'OTROS',
      description: 'Artículo agregado manualmente durante la carga de una muestra.',
    });
    return id;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-AR').format(date);
  }

  private formatDateTime(date: Date): string {
    return `${this.formatDate(date)}, ${date.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  }

  private toInputDate(value: string | null): string {
    if (!value) {
      return '';
    }

    const [day, month, year] = value.split('/');
    return `${year}-${month}-${day}`;
  }

  private fromInputDate(value: string): string {
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }
}
