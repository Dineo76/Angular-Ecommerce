import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  })
  
export class Checkout {

  customer = {
    name: '',
    phone: '',
    address: ''
  };
  
  private router = inject(Router);
  
  cartService = inject(CartService);

  cartItems = this.cartService.getCart();

  get total() {
    return this.cartService.getTotal();
  }

  placeOrder() {

    if (!this.customer.name || !this.customer.phone || !this.customer.address) {
      alert('Please fill in all details');
      return;
    }
  
    const order = this.cartService.createOrder(
      this.customer,
      this.cartItems,
      this.total
    );
  
    this.cartService.clearCart();
  
    this.router.navigate(['/success'], {
      state: { order }
    });
  }
}