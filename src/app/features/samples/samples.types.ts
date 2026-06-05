export type SampleTab = 'active' | 'resolved' | 'approvals';
export type ResolutionFilter = 'approved' | 'rejected';

export type SampleStatus =
  | 'Creada'
  | 'Enviada a Vendedor'
  | 'Recibida por Vendedor'
  | 'Entregada a Cliente'
  | 'En Seguimiento'
  | 'Rechazada';

export type StatusFilter = 'Todos los estados' | SampleStatus;

export type UserRole =
  | 'Admin'
  | 'Jefe de Ventas'
  | 'Team Leader'
  | 'Vendedor'
  | 'Coordinador'
  | 'Subcoordinacion';

export type MockClient = {
  id: string;
  name: string;
  locality: string;
  address: string;
  phone: string;
};

export type MockSupply = {
  id: string;
  name: string;
  brand: string;
  description: string;
};

export type MockUser = {
  id: string;
  name: string;
  role: UserRole;
  isSeller?: boolean;
};

export type SampleMovement = {
  id: string;
  author: string;
  authorRole: UserRole;
  from?: SampleStatus;
  to: SampleStatus;
  note: string;
  date: string;
};

export type Sample = {
  id: string;
  clientId: string;
  supplyId: string;
  sellerId: string;
  coordinatorId: string;
  status: SampleStatus;
  nextFollowUp: string | null;
  updatedAt: string;
  history: SampleMovement[];
};

export type CreateSamplePayload = {
  clientId: string;
  sellerId: string;
  supplyIds: string[];
  otherSupply?: string;
  observations?: string;
};

export type UpdateSamplePayload = {
  id: string;
  status: SampleStatus;
  comment: string;
  mentionUserId: string;
};
