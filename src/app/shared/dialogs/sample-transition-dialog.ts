import { Component, computed, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SampleOrderItem, SampleTransitionPayload } from '../../core/sample-orders.models';
import { MockSupply } from '../../features/samples/samples.types';

@Component({
  selector: 'app-sample-transition-dialog',
  imports: [FormsModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }, provideNativeDateAdapter()],
  templateUrl: './sample-transition-dialog.html',
})
export class SampleTransitionDialog implements OnInit {
  readonly item = input.required<SampleOrderItem>();
  readonly supply = input.required<MockSupply>();
  readonly closed = output<void>();
  readonly confirmed = output<SampleTransitionPayload>();

  readonly estimatedDate = signal<Date | null>(null);
  readonly observation = signal('');
  readonly resolution = signal<'Aprobada' | 'Rechazada' | 'Mas plazo'>('Aprobada');

  readonly isEvaluation = computed(() => this.item().status === 'Entregado');
  readonly requiresDate = computed(() => !this.isEvaluation() || this.resolution() === 'Mas plazo');
  readonly title = computed(() => {
    const titles: Record<SampleOrderItem['status'], string> = {
      Pedido: 'Marcar muestra como enviada',
      Enviado: 'Confirmar recepción',
      Recibido: 'Confirmar entrega',
      Entregado: 'Evaluar muestra',
      Aprobada: 'Muestra aprobada',
      Rechazada: 'Muestra rechazada',
    };
    return titles[this.item().status];
  });
  readonly dateLabel = computed(() => {
    if (this.item().status === 'Pedido') {
      return 'Fecha estimada de recepción';
    }
    if (this.item().status === 'Enviado') {
      return 'Fecha estimada de entrega';
    }
    return 'Próximo seguimiento';
  });
  readonly automaticDateMessage = computed(() => {
    const messages: Record<SampleOrderItem['status'], string> = {
      Pedido: 'La fecha de envío se registrará automáticamente al confirmar.',
      Enviado: 'La fecha de recepción se registrará automáticamente al confirmar.',
      Recibido: 'La fecha de entrega se registrará automáticamente al confirmar.',
      Entregado: 'La resolución y el feedback quedarán registrados en el historial.',
      Aprobada: '',
      Rechazada: '',
    };
    return messages[this.item().status];
  });

  ngOnInit(): void {
    if (this.item().status === 'Recibido') {
      this.estimatedDate.set(this.addDays(new Date(), 5));
    }
  }

  selectResolution(value: 'Aprobada' | 'Rechazada' | 'Mas plazo'): void {
    this.resolution.set(value);
    if (value !== 'Mas plazo') {
      return;
    }

    const currentFollowUp = this.parseDisplayDate(this.item().followUpAt);
    const baseDate =
      currentFollowUp && currentFollowUp.getTime() > Date.now() ? currentFollowUp : new Date();
    this.estimatedDate.set(this.addDays(baseDate, 5));
  }

  submit(): void {
    if (this.requiresDate() && !this.estimatedDate()) {
      return;
    }

    this.confirmed.emit({
      estimatedDate: this.toInputDate(this.estimatedDate()),
      observation: this.observation().trim(),
      resolution: this.isEvaluation() ? this.resolution() : undefined,
    });
  }

  private parseDisplayDate(value: string | null): Date | null {
    if (!value) {
      return null;
    }
    const [day, month, year] = value.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    result.setDate(result.getDate() + days);
    return result;
  }

  private toInputDate(date: Date | null): string {
    if (!date) {
      return '';
    }

    const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const year = result.getFullYear();
    const month = String(result.getMonth() + 1).padStart(2, '0');
    const day = String(result.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
