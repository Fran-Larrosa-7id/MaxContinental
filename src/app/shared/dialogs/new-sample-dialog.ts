import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CreateSamplePayload, MockClient, MockSupply, MockUser } from '../../features/samples/samples.types';

@Component({
  selector: 'app-new-sample-dialog',
  imports: [FormsModule, MatIconModule],
  templateUrl: './new-sample-dialog.html'
})
export class NewSampleDialog {
  readonly clients = input.required<MockClient[]>();
  readonly supplies = input.required<MockSupply[]>();
  readonly sellers = input.required<MockUser[]>();
  readonly closed = output<void>();
  readonly created = output<CreateSamplePayload>();

  readonly search = signal('');
  readonly selectedClientId = signal('');
  readonly selectedSellerId = signal('');
  readonly selectedSupplyIds = signal<string[]>([]);
  readonly otherSupply = signal('');
  readonly observations = signal('');

  readonly selectedCount = computed(() => this.selectedSupplyIds().length);
  readonly filteredSupplies = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) {
      return this.supplies();
    }

    return this.supplies().filter(
      (supply) => supply.name.toLowerCase().includes(term) || supply.brand.toLowerCase().includes(term)
    );
  });

  readonly canCreate = computed(
    () =>
      Boolean(this.selectedClientId()) &&
      Boolean(this.selectedSellerId()) &&
      (this.selectedCount() > 0 || Boolean(this.otherSupply().trim()))
  );

  toggleSupply(supplyId: string): void {
    this.selectedSupplyIds.update((current) =>
      current.includes(supplyId) ? current.filter((id) => id !== supplyId) : [...current, supplyId]
    );
  }

  create(): void {
    if (!this.canCreate()) {
      return;
    }

    this.created.emit({
      clientId: this.selectedClientId(),
      sellerId: this.selectedSellerId(),
      supplyIds: this.selectedSupplyIds(),
      otherSupply: this.otherSupply(),
      observations: this.observations()
    });
  }

  close(): void {
    this.closed.emit();
  }
}
