import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';


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

  // 1. Validate form
  if (!this.customer.name || !this.customer.phone || !this.customer.address) {

    Swal.fire({
      icon: 'warning',
      title: 'Almost there!',
      text: 'Please fill in all your delivery details before placing your order.',
      confirmButtonText: 'Okay'
    });

    return;
  }

  // 2. Validate cart
  if (this.cartItems.length === 0) {

    Swal.fire({
      icon: 'info',
      title: 'Your cart is empty',
      text: 'Please add a coffee before placing an order.',
      confirmButtonText: 'Go to Menu'
    }).then(() => {
      this.router.navigate(['/menu']);
    });

    return;
  }

  // 3. Create + SAVE order (localStorage happens inside service)
  const order = this.cartService.createOrder(
    this.customer,
    this.cartItems,
    this.total
  );

  // 4. Clear cart
  this.cartService.clearCart();

  // 5. Success alert
  Swal.fire({
    icon: 'success',
    title: 'Order placed!',
    text: 'Your coffee is being prepared ☕',
    timer: 1500,
    showConfirmButton: false
  });

  // 6. Navigate
  setTimeout(() => {
    this.router.navigate(['/success'], {
      state: { order }
    });
  }, 1500);
}
   
}