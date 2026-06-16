import { Component, computed, input, OnInit, output, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SampleOrderItem, SampleTransitionPayload } from '../../core/sample-orders.models';
import { MockSupply } from '../../features/samples/samples.types';

type TransitionFormModel = {
  estimatedDate: Date | null;
  observation: string;
  resolution: 'Aprobada' | 'Rechazada' | 'Mas plazo';
};

@Component({
  selector: 'app-sample-transition-dialog',
  imports: [FormField, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }, provideNativeDateAdapter()],
  templateUrl: './sample-transition-dialog.html',
})
export class SampleTransitionDialog implements OnInit {
  readonly item = input.required<SampleOrderItem>();
  readonly supply = input.required<MockSupply>();
  readonly closed = output<void>();
  readonly confirmed = output<SampleTransitionPayload>();

  readonly transitionModel = signal<TransitionFormModel>({
    estimatedDate: null,
    observation: '',
    resolution: 'Aprobada',
  });

  readonly isEvaluation = computed(() => this.item().status === 'Entregado');
  readonly requiresDate = computed(
    () => !this.isEvaluation() || this.transitionModel().resolution === 'Mas plazo',
  );
  readonly requiresObservation = computed(
    () => this.isEvaluation() && this.transitionModel().resolution !== 'Mas plazo',
  );
  readonly followUpHardLimitDate = computed(() => {
    const deliveredAt = this.parseDisplayDate(this.item().deliveredAt);
    return deliveredAt ? this.addDays(deliveredAt, 15) : null;
  });
  readonly isFollowUpExpired = computed(() => {
    const deadline = this.minimumDateOrNull(
      this.parseDisplayDate(this.item().followUpMaxAt),
      this.followUpHardLimitDate(),
    );
    return Boolean(deadline && this.isOverdue(deadline));
  });
  readonly transitionForm = form(this.transitionModel, (fields) => {
    required(fields.estimatedDate, {
      message: 'Seleccione una fecha.',
      when: () => this.requiresDate(),
    });
    required(fields.observation, {
      message: 'Agregue una observación para cerrar el seguimiento.',
      when: () => this.requiresObservation(),
    });
  });
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
      return 'Fecha de visita al cliente';
    }
    return 'Fecha máxima de seguimiento';
  });
  readonly maximumDate = computed(() =>
    this.maximumAllowedDate(),
  );
  readonly automaticDateMessage = computed(() => {
    if (this.item().status === 'Entregado' && this.isFollowUpExpired()) {
      return 'El plazo máximo ya fue superado. Para finalizar el seguimiento, registre si la muestra fue aprobada o rechazada.';
    }

    const messages: Record<SampleOrderItem['status'], string> = {
      Pedido: 'La fecha del pedido se registró automáticamente al crearlo.',
      Enviado: 'La fecha de recepción se registrará automáticamente al confirmar.',
      Recibido:
        'La fecha de entrega se registrará automáticamente. Puede definir un seguimiento de hasta 15 días.',
      Entregado:
        'El plazo puede extenderse hasta un máximo de 15 días. El feedback quedará guardado en el historial.',
      Aprobada: '',
      Rechazada: '',
    };
    return messages[this.item().status];
  });

  ngOnInit(): void {
    if (this.item().status === 'Recibido') {
      this.transitionForm.estimatedDate().value.set(this.addDays(new Date(), 15));
    }
  }

  selectResolution(value: 'Aprobada' | 'Rechazada' | 'Mas plazo'): void {
    if (value === 'Mas plazo' && this.isFollowUpExpired()) {
      return;
    }

    this.transitionForm.resolution().value.set(value);
    if (value !== 'Mas plazo') {
      return;
    }

    const currentFollowUp = this.parseDisplayDate(this.item().followUpMaxAt);
    const baseDate =
      currentFollowUp && currentFollowUp.getTime() > Date.now() ? currentFollowUp : new Date();
    this.transitionForm.estimatedDate().value.set(this.clampFollowUpDate(this.addDays(baseDate, 5)));
  }

  submit(): void {
    if (this.transitionForm().invalid()) {
      return;
    }

    const value = this.transitionModel();
    this.confirmed.emit({
      estimatedDate: this.toInputDate(value.estimatedDate),
      observation: value.observation.trim(),
      resolution: this.isEvaluation() ? value.resolution : undefined,
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

  private maximumAllowedDate(): Date | null {
    if (this.item().status === 'Recibido') {
      return this.addDays(new Date(), 15);
    }
    if (this.item().status === 'Entregado' && this.transitionModel().resolution === 'Mas plazo') {
      return this.followUpHardLimitDate();
    }
    return null;
  }

  private clampFollowUpDate(date: Date): Date {
    const hardLimit = this.followUpHardLimitDate();
    return hardLimit ? this.minimumDate(date, hardLimit) : date;
  }

  private minimumDate(first: Date, second: Date): Date {
    return first.getTime() <= second.getTime() ? first : second;
  }

  private minimumDateOrNull(first: Date | null, second: Date | null): Date | null {
    if (!first) {
      return second;
    }
    if (!second) {
      return first;
    }
    return this.minimumDate(first, second);
  }

  private isOverdue(date: Date): boolean {
    const deadline = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
    return deadline.getTime() < Date.now();
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
