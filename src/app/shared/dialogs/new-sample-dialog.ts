import { Component, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new-sample-dialog',
  imports: [FormsModule, MatIconModule],
  templateUrl: './new-sample-dialog.html'
})
export class NewSampleDialog {
  readonly closed = output<void>();
  readonly search = signal('');
  readonly selectedSupplies = signal<string[]>(['Guias con regulador']);
  readonly otherSupplies = signal('');
  readonly observations = signal('');

  readonly supplies = [
    'Guias V 14 Continental',
    'Guias con regulador',
    'Guias con medidor volumetrico',
    'Llave de 3 vias',
    'Llave de 3 vias con prolong',
    'Nylons',
    'Polyglicolic',
    'Tiras reactivas',
    'Transductores de presion',
    'Cannister bolsas',
    'Set de drenaje',
    'Llave doble paso'
  ];

  readonly selectedCount = computed(() => this.selectedSupplies().length);
  readonly filteredSupplies = computed(() => {
    const term = this.search().trim().toLowerCase();
    if (!term) {
      return this.supplies;
    }

    return this.supplies.filter((supply) => supply.toLowerCase().includes(term));
  });

  toggleSupply(item: string): void {
    this.selectedSupplies.update((current) =>
      current.includes(item) ? current.filter((supply) => supply !== item) : [...current, item]
    );
  }

  close(): void {
    this.closed.emit();
  }
}
