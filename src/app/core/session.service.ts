import { Service, signal } from '@angular/core';
import { AppRole } from './sample-orders.models';

export type MockSessionUser = {
  id: string;
  name: string;
  role: AppRole;
  coordinatorId?: string;
};

const MOCK_SESSIONS: MockSessionUser[] = [
  {
    id: 'user-cristian',
    name: 'Cristian Bohn',
    role: 'Vendedor',
    coordinatorId: 'user-coord-cristian',
  },
  {
    id: 'user-coord-cristian',
    name: 'Cristian Molina',
    role: 'Coordinador',
  },
];

@Service()
export class SessionService {
  readonly availableUsers = MOCK_SESSIONS;
  readonly currentUser = signal<MockSessionUser>(MOCK_SESSIONS[0]);

  selectUser(userId: string): void {
    const user = MOCK_SESSIONS.find((item) => item.id === userId);
    if (user) {
      this.currentUser.set(user);
    }
  }
}
