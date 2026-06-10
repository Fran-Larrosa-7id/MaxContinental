import { computed, Injectable, signal } from '@angular/core';
import {
  SampleCartItem,
  SampleOrder,
  SampleOrderAlert,
  SampleOrderStatus,
} from './sample-orders.models';

const INITIAL_ORDERS: SampleOrder[] = [
  {
    id: 'order-1001',
    clientId: 'client-1',
    sellerId: 'user-nicolas',
    coordinatorId: 'user-arnaldo',
    status: 'Pedido',
    estimatedDelivery: null,
    createdAt: '06/06/2026',
    updatedAt: '06/06/2026',
    items: [
      { supplyId: 'supply-11', quantity: 2, observation: 'Entregar en sector de compras.' },
      { supplyId: 'supply-12', quantity: 1, observation: '' },
    ],
    history: [
      {
        id: 'event-1001',
        status: 'Pedido',
        date: '06/06/2026, 09:20',
        author: 'Nicolas Boschetto (V)',
        note: 'Pedido creado y enviado a coordinación.',
      },
    ],
  },
  {
    id: 'order-1002',
    clientId: 'client-1',
    sellerId: 'user-pablo',
    coordinatorId: 'user-ignacio',
    status: 'Enviado',
    estimatedDelivery: '05/06/2026',
    createdAt: '01/06/2026',
    updatedAt: '02/06/2026',
    items: [{ supplyId: 'supply-9', quantity: 3, observation: 'Prioridad alta.' }],
    history: [
      {
        id: 'event-1002-a',
        status: 'Pedido',
        date: '01/06/2026, 11:30',
        author: 'Pablo Lagoria (V)',
        note: 'Pedido creado.',
      },
      {
        id: 'event-1002-b',
        status: 'Enviado',
        date: '02/06/2026, 15:10',
        author: 'Ignacio Prevostini',
        note: 'Pedido cargado en distribuidora.',
      },
    ],
  },
  {
    id: 'order-1003',
    clientId: 'client-1',
    sellerId: 'user-cristian',
    coordinatorId: 'user-arnaldo',
    status: 'Recibido',
    estimatedDelivery: '07/06/2026',
    createdAt: '03/06/2026',
    updatedAt: '07/06/2026',
    items: [{ supplyId: 'supply-13', quantity: 1, observation: 'Coordinar visita con farmacia.' }],
    history: [
      {
        id: 'event-1003-a',
        status: 'Pedido',
        date: '03/06/2026, 10:00',
        author: 'Cristian Bohn (V)',
        note: 'Pedido creado.',
      },
      {
        id: 'event-1003-b',
        status: 'Enviado',
        date: '04/06/2026, 12:15',
        author: 'Arnaldo Parra',
        note: 'Pedido enviado.',
      },
      {
        id: 'event-1003-c',
        status: 'Recibido',
        date: '07/06/2026, 09:40',
        author: 'Cristian Bohn (V)',
        note: 'Artículos recibidos por el vendedor.',
      },
    ],
  },
  {
    id: 'order-1004',
    clientId: 'client-1',
    sellerId: 'user-nicolas',
    coordinatorId: 'user-arnaldo',
    status: 'Entregado',
    estimatedDelivery: '04/06/2026',
    createdAt: '30/05/2026',
    updatedAt: '05/06/2026',
    items: [{ supplyId: 'supply-7', quantity: 2, observation: 'Muestra para evaluación.' }],
    history: [
      {
        id: 'event-1004-a',
        status: 'Pedido',
        date: '30/05/2026, 14:20',
        author: 'Nicolas Boschetto (V)',
        note: 'Pedido creado.',
      },
      {
        id: 'event-1004-b',
        status: 'Enviado',
        date: '31/05/2026, 10:10',
        author: 'Arnaldo Parra',
        note: 'Pedido enviado.',
      },
      {
        id: 'event-1004-c',
        status: 'Recibido',
        date: '04/06/2026, 08:35',
        author: 'Nicolas Boschetto (V)',
        note: 'Artículos recibidos.',
      },
      {
        id: 'event-1004-d',
        status: 'Entregado',
        date: '05/06/2026, 16:00',
        author: 'Nicolas Boschetto (V)',
        note: 'Muestras entregadas al cliente.',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class SampleOrdersService {
  private readonly cartState = signal<SampleCartItem[]>([]);
  private readonly ordersState = signal<SampleOrder[]>(INITIAL_ORDERS);

  readonly cart = this.cartState.asReadonly();
  readonly orders = this.ordersState.asReadonly();
  readonly cartCount = computed(() =>
    this.cartState().reduce((total, item) => total + item.quantity, 0),
  );

  addToCart(supplyId: string): void {
    this.cartState.update((current) => {
      const existing = current.find((item) => item.supplyId === supplyId);
      if (existing) {
        return current.map((item) =>
          item.supplyId === supplyId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...current, { supplyId, quantity: 1, observation: '' }];
    });
  }

  updateQuantity(supplyId: string, quantity: number): void {
    this.cartState.update((current) =>
      current.map((item) =>
        item.supplyId === supplyId ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  }

  updateObservation(supplyId: string, observation: string): void {
    this.cartState.update((current) =>
      current.map((item) => (item.supplyId === supplyId ? { ...item, observation } : item)),
    );
  }

  removeFromCart(supplyId: string): void {
    this.cartState.update((current) => current.filter((item) => item.supplyId !== supplyId));
  }

  clearCart(): void {
    this.cartState.set([]);
  }

  confirmOrder(clientId: string): SampleOrder | null {
    const items = this.cartState();
    if (!clientId || items.length === 0) {
      return null;
    }

    const now = new Date();
    const order: SampleOrder = {
      id: `order-${Date.now()}`,
      clientId,
      sellerId: 'user-nicolas',
      coordinatorId: 'user-arnaldo',
      status: 'Pedido',
      estimatedDelivery: null,
      createdAt: this.formatDate(now),
      updatedAt: this.formatDate(now),
      items: items.map((item) => ({ ...item })),
      history: [
        {
          id: `event-${Date.now()}`,
          status: 'Pedido',
          date: this.formatDateTime(now),
          author: 'Nicolas Boschetto (V)',
          note: 'Pedido creado y enviado a coordinación.',
        },
      ],
    };

    this.ordersState.update((current) => [order, ...current]);
    this.clearCart();
    return order;
  }

  advanceOrder(orderId: string, nextStatus: SampleOrderStatus, estimatedDelivery?: string): void {
    const now = new Date();
    this.ordersState.update((current) =>
      current.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: nextStatus,
              estimatedDelivery:
                nextStatus === 'Enviado'
                  ? estimatedDelivery || order.estimatedDelivery
                  : order.estimatedDelivery,
              updatedAt: this.formatDate(now),
              history: [
                ...order.history,
                {
                  id: `event-${Date.now()}`,
                  status: nextStatus,
                  date: this.formatDateTime(now),
                  author: nextStatus === 'Enviado' ? 'Arnaldo Parra' : 'Nicolas Boschetto (V)',
                  note: this.statusNote(nextStatus),
                },
              ],
            }
          : order,
      ),
    );
  }

  alertFor(order: SampleOrder): SampleOrderAlert {
    if (order.status === 'Pedido') {
      return {
        tone: 'green',
        label: 'Coordinación notificada',
        message: 'Nuevo pedido pendiente de carga y envío.',
      };
    }

    if (order.status === 'Enviado' && this.isOverdue(order.estimatedDelivery)) {
      return {
        tone: 'yellow',
        label: 'Recepción demorada',
        message: 'La fecha estimada venció y el vendedor aún no confirmó la recepción.',
      };
    }

    if (order.status === 'Enviado') {
      return {
        tone: 'blue',
        label: 'En tránsito',
        message: `Recepción estimada: ${order.estimatedDelivery || 'sin fecha definida'}.`,
      };
    }

    if (order.status === 'Recibido') {
      return {
        tone: 'orange',
        label: 'Entrega pendiente',
        message: 'Los artículos fueron recibidos y deben entregarse al cliente.',
      };
    }

    return {
      tone: 'red',
      label: 'Seguimiento activo',
      message: 'La muestra fue entregada. Comienza la fase de seguimiento comercial.',
    };
  }

  private isOverdue(value: string | null): boolean {
    if (!value) {
      return false;
    }

    const [day, month, year] = value.split('/').map(Number);
    const deadline = new Date(year, month - 1, day);
    deadline.setHours(23, 59, 59, 999);
    return deadline.getTime() < Date.now();
  }

  private statusNote(status: SampleOrderStatus): string {
    const notes: Record<SampleOrderStatus, string> = {
      Pedido: 'Pedido creado.',
      Enviado: 'Pedido procesado y enviado al vendedor.',
      Recibido: 'Artículos recibidos por el vendedor.',
      Entregado: 'Muestras entregadas al cliente.',
    };
    return notes[status];
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
}
