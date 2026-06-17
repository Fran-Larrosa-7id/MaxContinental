import { Service, signal } from '@angular/core';
import { AppRole } from './sample-orders.models';

export type MockSessionUser = {
  id: string;
  name: string;
  role: AppRole;
  roleCode: 'V' | 'C' | 'J';
  username: string;
  coordinatorId?: string;
  superiorId?: string | null;
};

const MOCK_SESSIONS: MockSessionUser[] = [
  {
    id: 'user-cristian',
    name: 'Cristian Bohn',
    role: 'Vendedor',
    roleCode: 'V',
    username: 'CBOHN',
    coordinatorId: 'user-coord-cristian',
    superiorId: 'user-coord-cristian',
  },
  {
    id: 'user-coord-cristian',
    name: 'Cristian Molina',
    role: 'Coordinador',
    roleCode: 'C',
    username: 'CMOLINA',
    superiorId: 'user-arnaldo',
  },
  {
    id: 'user-arnaldo',
    name: 'Arnaldo Parra',
    role: 'Jefe',
    roleCode: 'J',
    username: 'APARRA',
    superiorId: null,
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

  selectByUsername(username: string): boolean {
    const normalized = username.trim().toUpperCase();
    const user = MOCK_SESSIONS.find((item) => item.username === normalized);
    if (!user) {
      return false;
    }
    this.currentUser.set(user);
    return true;
  }
}
