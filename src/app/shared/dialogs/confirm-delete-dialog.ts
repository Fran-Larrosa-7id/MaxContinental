import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MockClient, MockSupply, Sample } from '../../features/samples/samples.types';

@Component({
  selector: 'app-confirm-delete-dialog',
  imports: [MatIconModule],
  templateUrl: './confirm-delete-dialog.html'
})
export class ConfirmDeleteDialog {
  readonly samples = input.required<Sample[]>();
  readonly clients = input.required<MockClient[]>();
  readonly supplies = input.required<MockSupply[]>();
  readonly closed = output<void>();
  readonly confirmed = output<void>();

  clientName(clientId: string): string {
    return this.clients().find((client) => client.id === clientId)?.name ?? 'Cliente';
  }

  supplyName(supplyId: string): string {
    return this.supplies().find((supply) => supply.id === supplyId)?.name ?? 'Insumo';
  }

  close(): void {
    this.closed.emit();
  }

  confirm(): void {
    this.confirmed.emit();
  }
}
