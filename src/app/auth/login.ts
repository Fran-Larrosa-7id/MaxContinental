import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatIconModule],
  templateUrl: './login.html',
})
export class Login {
  readonly user = signal('APARRA');
  readonly password = signal('');
  readonly canSubmit = computed(() => this.user().trim().length > 0);

  constructor(private readonly router: Router) {}

  login(): void {
    this.router.navigateByUrl('/app/clientes');
  }
}
