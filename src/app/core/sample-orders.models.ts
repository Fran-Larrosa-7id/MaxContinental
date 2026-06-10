export type SampleOrderStatus = 'Pedido' | 'Enviado' | 'Recibido' | 'Entregado';

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

export type SampleOrder = {
  id: string;
  clientId: string;
  sellerId: string;
  coordinatorId: string;
  status: SampleOrderStatus;
  estimatedDelivery: string | null;
  createdAt: string;
  updatedAt: string;
  items: SampleCartItem[];
  history: SampleOrderEvent[];
};

export type SampleOrderAlert = {
  tone: 'green' | 'yellow' | 'orange' | 'red' | 'blue';
  label: string;
  message: string;
};
