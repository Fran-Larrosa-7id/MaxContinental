import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

type LoginModel = {
  user: string;
  password: string;
};

@Component({
  selector: 'app-login',
  imports: [FormField, MatIconModule],
  templateUrl: './login.html',
})
export class Login {
  readonly loginModel = signal<LoginModel>({
    user: 'CBOHN',
    password: '',
  });
  readonly loginForm = form(this.loginModel, (fields) => {
    required(fields.user, { message: 'Ingrese su usuario.' });
    required(fields.password, { message: 'Ingrese su contraseña.' });
  });

  constructor(private readonly router: Router) {}

  login(event: SubmitEvent): void {
    event.preventDefault();
    if (this.loginForm().invalid()) {
      return;
    }

    this.router.navigateByUrl('/app/clientes');
  }
}
