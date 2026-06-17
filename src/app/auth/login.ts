import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SampleOrdersService } from '../core/sample-orders.service';
import { MockSessionUser, SessionService } from '../core/session.service';
import { VisitContextService } from '../core/visit-context.service';

type LoginModel = {
  user: string;
  password: string;
};

type LoginProfile = {
  userId: string;
  title: string;
  subtitle: string;
  icon: string;
};

@Component({
  selector: 'app-login',
  imports: [FormField, MatIconModule],
  templateUrl: './login.html',
})
export class Login {
  private readonly router = inject(Router);
  private readonly session = inject(SessionService);
  private readonly visitContext = inject(VisitContextService);
  private readonly ordersService = inject(SampleOrdersService);

  readonly profiles: LoginProfile[] = [
    {
      userId: 'user-cristian',
      title: 'Vendedor',
      subtitle: 'Prepara muestras y registra seguimiento',
      icon: 'badge',
    },
    {
      userId: 'user-coord-cristian',
      title: 'Coordinador',
      subtitle: 'Gestiona pedidos y envios',
      icon: 'supervisor_account',
    },
    {
      userId: 'user-arnaldo',
      title: 'Jefe',
      subtitle: 'Consulta el avance general',
      icon: 'leaderboard',
    },
  ];
  readonly selectedProfileId = signal('user-cristian');
  readonly selectedUser = computed(
    () =>
      this.session.availableUsers.find((user) => user.id === this.selectedProfileId()) ??
      this.session.availableUsers[0],
  );
  readonly loginModel = signal<LoginModel>({
    user: 'CBOHN',
    password: 'demo',
  });
  readonly loginForm = form(this.loginModel, (fields) => {
    required(fields.user, { message: 'Ingrese su usuario.' });
    required(fields.password, { message: 'Ingrese su contrasena.' });
  });

  login(event: SubmitEvent): void {
    event.preventDefault();
    if (this.loginForm().invalid()) {
      return;
    }

    const wasMatched = this.session.selectByUsername(this.loginModel().user);
    if (!wasMatched) {
      this.session.selectUser(this.selectedProfileId());
    }
    this.enterApp(this.session.currentUser());
  }

  selectProfile(userId: string): void {
    this.selectedProfileId.set(userId);
    const user = this.session.availableUsers.find((item) => item.id === userId);
    if (user) {
      this.loginModel.update((current) => ({ ...current, user: user.username }));
    }
  }

  quickLogin(userId: string): void {
    this.session.selectUser(userId);
    this.enterApp(this.session.currentUser());
  }

  private enterApp(user: MockSessionUser): void {
    this.visitContext.finish();
    this.ordersService.clearCart();
    this.router.navigateByUrl(user.role === 'Vendedor' ? '/app/clientes' : '/app/muestras');
  }
}
