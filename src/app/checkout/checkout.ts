import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.html'
})
export class Checkout {

  cartService = inject(CartService);

  cartItems = this.cartService.getCart();

  get total() {
    return this.cartService.getTotal();
  }

  placeOrder() {
    alert('Order placed successfully ☕');
    this.cartService.clearCart();
  }
}