import { Component, computed, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SampleOrdersService } from '../../core/sample-orders.service';
import { MOCK_SUPPLIES } from '../../features/samples/samples.mock';
import { MockSupply } from '../../features/samples/samples.types';

@Component({
  selector: 'app-sample-cart-dialog',
  imports: [FormsModule, MatIconModule],
  templateUrl: './sample-cart-dialog.html',
})
export class SampleCartDialog {
  private readonly ordersService = inject(SampleOrdersService);

  readonly closed = output<void>();
  readonly continueShopping = output<void>();
  readonly confirmed = output<void>();
  readonly cart = this.ordersService.cart;
  readonly cartCount = this.ordersService.cartCount;
  readonly totalLines = computed(() => this.cart().length);

  supplyById(supplyId: string): MockSupply {
    return MOCK_SUPPLIES.find((supply) => supply.id === supplyId) ?? MOCK_SUPPLIES[0];
  }

  updateQuantity(supplyId: string, value: number): void {
    this.ordersService.updateQuantity(supplyId, Number(value));
  }

  increase(supplyId: string, current: number): void {
    this.ordersService.updateQuantity(supplyId, current + 1);
  }

  decrease(supplyId: string, current: number): void {
    this.ordersService.updateQuantity(supplyId, current - 1);
  }

  updateObservation(supplyId: string, observation: string): void {
    this.ordersService.updateObservation(supplyId, observation);
  }

  remove(supplyId: string): void {
    this.ordersService.removeFromCart(supplyId);
  }

  cancel(): void {
    this.ordersService.clearCart();
    this.closed.emit();
  }

  confirm(): void {
    this.confirmed.emit();
  }
}
