import { computed, Service, signal } from '@angular/core';
import {
  AppRole,
  SampleCartItem,
  SampleOrder,
  SampleOrderAlert,
  SampleOrderItem,
  SampleOrderStatus,
  SampleTransitionPayload,
} from './sample-orders.models';

const INITIAL_ORDERS: SampleOrder[] = [
  {
    id: 'order-1001',
    clientId: 'client-1',
    sellerId: 'user-cristian',
    coordinatorId: 'user-coord-cristian',
    createdAt: '06/06/2026',
    updatedAt: '08/06/2026',
    items: [
      {
        id: 'sample-1001-a',
        supplyId: 'supply-11',
        quantity: 2,
        observation: 'Entregar en sector de compras.',
        status: 'Pedido',
        requestedAt: '06/06/2026',
        receptionAt: null,
        receivedAt: null,
        visitAt: null,
        deliveredAt: null,
        followUpMaxAt: null,
        feedback: '',
        history: [
          {
            id: 'event-1001-a',
            status: 'Pedido',
            date: '06/06/2026, 09:20',
            author: 'Cristian Bohn',
            note: 'Pedido creado.',
          },
        ],
      },
      {
        id: 'sample-1001-b',
        supplyId: 'supply-12',
        quantity: 1,
        observation: 'Prioridad alta.',
        status: 'Enviado',
        requestedAt: '06/06/2026',
        receptionAt: '08/06/2026',
        receivedAt: null,
        visitAt: null,
        deliveredAt: null,
        followUpMaxAt: null,
        feedback: '',
        history: [
          {
            id: 'event-1001-b-1',
            status: 'Pedido',
            date: '06/06/2026, 09:20',
            author: 'Cristian Bohn',
            note: 'Pedido creado.',
          },
          {
            id: 'event-1001-b-2',
            status: 'Enviado',
            date: '07/06/2026, 11:10',
            author: 'Cristian Molina',
            note: 'Envío procesado. Recepción estimada para el 08/06/2026.',
          },
        ],
      },
    ],
  },
  {
    id: 'order-1002',
    clientId: 'client-1',
    sellerId: 'user-luis',
    coordinatorId: 'user-coord-cristian',
    createdAt: '03/06/2026',
    updatedAt: '08/06/2026',
    items: [
      {
        id: 'sample-1002-a',
        supplyId: 'supply-13',
        quantity: 1,
        observation: 'Coordinar entrega con farmacia.',
        status: 'Recibido',
        requestedAt: '03/06/2026',
        receptionAt: '07/06/2026',
        receivedAt: '07/06/2026',
        visitAt: '14/06/2026',
        deliveredAt: null,
        followUpMaxAt: null,
        feedback: '',
        history: [
          {
            id: 'event-1002-a',
            status: 'Recibido',
            date: '07/06/2026, 09:40',
            author: 'Luis Benedicti',
            note: 'Artículo recibido. Visita programada para el 14/06/2026.',
          },
        ],
      },
    ],
  },
  {
    id: 'order-1003',
    clientId: 'client-1',
    sellerId: 'user-cristian',
    coordinatorId: 'user-coord-cristian',
    createdAt: '30/05/2026',
    updatedAt: '05/06/2026',
    items: [
      {
        id: 'sample-1003-a',
        supplyId: 'supply-7',
        quantity: 2,
        observation: 'Muestra para evaluación.',
        status: 'Entregado',
        requestedAt: '30/05/2026',
        receptionAt: '04/06/2026',
        receivedAt: '04/06/2026',
        visitAt: '05/06/2026',
        deliveredAt: '05/06/2026',
        followUpMaxAt: '20/06/2026',
        feedback: '',
        history: [
          {
            id: 'event-1003-a',
            status: 'Entregado',
            date: '05/06/2026, 16:00',
            author: 'Cristian Bohn',
            note: 'Muestra entregada. Seguimiento máximo definido para el 20/06/2026.',
          },
        ],
      },
    ],
  },
];

@Service()
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

  confirmOrder(
    clientId: string,
    sellerId = 'user-cristian',
    coordinatorId = 'user-coord-cristian',
  ): SampleOrder | null {
    const cartItems = this.cartState();
    if (!clientId || cartItems.length === 0) {
      return null;
    }

    const now = new Date();
    const createdAt = this.formatDate(now);
    const orderId = `order-${Date.now()}`;
    const items: SampleOrderItem[] = cartItems.map((item, index) => ({
      ...item,
      id: `sample-${Date.now()}-${index}`,
      status: 'Pedido',
      requestedAt: createdAt,
      receptionAt: null,
      receivedAt: null,
      visitAt: null,
      deliveredAt: null,
      followUpMaxAt: null,
      feedback: '',
      history: [
        {
          id: `event-${Date.now()}-${index}`,
          status: 'Pedido',
          date: this.formatDateTime(now),
          author: 'Cristian Bohn',
          note: 'Pedido creado y enviado a coordinación.',
        },
      ],
    }));
    const order: SampleOrder = {
      id: orderId,
      clientId,
      sellerId,
      coordinatorId,
      createdAt,
      updatedAt: createdAt,
      items,
    };

    this.ordersState.update((current) => [order, ...current]);
    this.clearCart();
    return order;
  }

  transitionItem(
    orderId: string,
    itemId: string,
    payload: SampleTransitionPayload,
    author: string,
  ): void {
    const now = new Date();
    const automaticDate = this.formatDate(now);
    this.ordersState.update((orders) =>
      orders.map((order) => {
        if (order.id !== orderId) {
          return order;
        }

        return {
          ...order,
          updatedAt: automaticDate,
          items: order.items.map((item) => {
            if (item.id !== itemId) {
              return item;
            }

            const next = this.nextItemState(item, payload, automaticDate);
            return {
              ...next,
              history: [
                ...item.history,
                {
                  id: `event-${Date.now()}`,
                  status: next.status,
                  date: this.formatDateTime(now),
                  author,
                  note: this.transitionNote(next.status, payload),
                },
              ],
            };
          }),
        };
      }),
    );
  }

  deleteItem(orderId: string, itemId: string): void {
    this.ordersState.update((orders) =>
      orders
        .map((order) =>
          order.id === orderId
            ? { ...order, items: order.items.filter((item) => item.id !== itemId) }
            : order,
        )
        .filter((order) => order.items.length > 0),
    );
  }

  alertFor(item: SampleOrderItem, role: AppRole): SampleOrderAlert | null {
    if (item.status === 'Pedido') {
      return role === 'Coordinador'
        ? {
            tone: 'white',
            label: 'Nuevo pedido',
            message: 'Hay una muestra pendiente de carga y envío.',
          }
        : null;
    }

    if (item.status === 'Enviado' && this.isOverdue(item.receptionAt)) {
      return {
        tone: 'cyan',
        label: 'Recepción demorada',
        message: `La recepción estaba prevista para el ${item.receptionAt}.`,
      };
    }

    if (item.status === 'Recibido') {
      return {
        tone: 'yellow',
        label: 'Entrega pendiente',
        message: `Visita al cliente programada para el ${item.visitAt}.`,
      };
    }

    if (item.status === 'Entregado') {
      return {
        tone: 'orange',
        label: 'Seguimiento activo',
        message: `Resolver antes del ${item.followUpMaxAt}.`,
      };
    }

    return null;
  }

  private nextItemState(
    item: SampleOrderItem,
    payload: SampleTransitionPayload,
    automaticDate: string,
  ): SampleOrderItem {
    const estimatedDate = this.fromInputDate(payload.estimatedDate);
    if (item.status === 'Pedido') {
      return {
        ...item,
        status: 'Enviado',
        receptionAt: estimatedDate,
      };
    }
    if (item.status === 'Enviado') {
      return {
        ...item,
        status: 'Recibido',
        receivedAt: automaticDate,
        visitAt: estimatedDate,
      };
    }
    if (item.status === 'Recibido') {
      return {
        ...item,
        status: 'Entregado',
        deliveredAt: automaticDate,
        followUpMaxAt: estimatedDate,
      };
    }
    if (item.status === 'Entregado' && payload.resolution === 'Mas plazo') {
      return {
        ...item,
        followUpMaxAt: estimatedDate,
        feedback: payload.observation || item.feedback,
      };
    }
    if (
      item.status === 'Entregado' &&
      (payload.resolution === 'Aprobada' || payload.resolution === 'Rechazada')
    ) {
      return {
        ...item,
        status: payload.resolution,
        feedback: payload.observation || item.feedback,
      };
    }
    return item;
  }

  private transitionNote(status: SampleOrderStatus, payload: SampleTransitionPayload): string {
    const notes: Record<SampleOrderStatus, string> = {
      Pedido: 'Pedido creado.',
      Enviado: 'Muestra enviada al vendedor.',
      Recibido: 'Muestra recibida por el vendedor.',
      Entregado: 'Muestra entregada al cliente.',
      Aprobada: 'Muestra aprobada por el cliente.',
      Rechazada: 'Muestra rechazada por el cliente.',
    };
    const prefix =
      payload.resolution === 'Mas plazo' ? 'Se extendió el plazo de evaluación.' : notes[status];
    return payload.observation ? `${prefix} ${payload.observation}` : prefix;
  }

  private isOverdue(value: string | null): boolean {
    if (!value) {
      return false;
    }
    const [day, month, year] = value.split('/').map(Number);
    const deadline = new Date(year, month - 1, day, 23, 59, 59, 999);
    return deadline.getTime() < Date.now();
  }

  private fromInputDate(value?: string): string | null {
    if (!value) {
      return null;
    }
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
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
