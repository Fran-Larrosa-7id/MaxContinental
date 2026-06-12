export type SampleOrderStatus =
  | 'Pedido'
  | 'Enviado'
  | 'Recibido'
  | 'Entregado'
  | 'Aprobada'
  | 'Rechazada';

export type AppRole = 'Vendedor' | 'Coordinador';

export type SampleCartItem = {
  supplyId: string;
  quantity: number;
  observation: string;
};

export type SampleOrderEvent = {
  id: string;
  status: SampleOrderStatus;
  date: string;
  author: string;
  note: string;
};

export type SampleOrderItem = SampleCartItem & {
  id: string;
  status: SampleOrderStatus;
  requestedAt: string;
  receptionAt: string | null;
  receivedAt: string | null;
  visitAt: string | null;
  deliveredAt: string | null;
  followUpMaxAt: string | null;
  feedback: string;
  history: SampleOrderEvent[];
};

export type SampleOrder = {
  id: string;
  clientId: string;
  sellerId: string;
  coordinatorId: string;
  createdAt: string;
  updatedAt: string;
  items: SampleOrderItem[];
};

export type SampleOrderAlert = {
  tone: 'white' | 'cyan' | 'yellow' | 'orange';
  label: string;
  message: string;
};

export type SampleTransitionPayload = {
  estimatedDate?: string;
  observation?: string;
  resolution?: 'Aprobada' | 'Rechazada' | 'Mas plazo';
};
