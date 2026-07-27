import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  private router = inject(Router);

  cartService = inject(CartService);

  cartItems = this.cartService.getCart();

  customer = {
    name: '',
    phone: '',
    address: ''
  };

  // Validation Errors
  nameError = '';
  phoneError = '';
  addressError = '';

  get total() {
    return this.cartService.getTotal();
  }

  placeOrder() {

    // Clear previous errors
    this.nameError = '';
    this.phoneError = '';
    this.addressError = '';

    const nameRegex = /^[A-Za-z\s]+$/;

    // ===========================
    // NAME VALIDATION
    // ===========================

    if (!this.customer.name.trim()) {

      this.nameError = 'Full name is required.';
      return;

    }

    if (!nameRegex.test(this.customer.name)) {

      this.nameError =
        'Full name can only contain letters and spaces.';
      return;

    }

   // ===========================
// PHONE VALIDATION
// Format:
// +27821234567
// ===========================

const phoneRegex = /^\+27[6-8][0-9]{8}$/;

if (!this.customer.phone.trim()) {

  this.phoneError = 'Phone number is required.';
  return;

}

if (!phoneRegex.test(this.customer.phone.trim())) {

  this.phoneError =
    'Use a valid South African number. Example: +27821234567';
  return;

}

// ===========================
// ADDRESS VALIDATION
// Expected format:
// House Number Street Name, Suburb, City
// Example:
// 12 Main Street, Tembisa, Johannesburg
// ===========================

const addressRegex =
/^\d+\s+[A-Za-z\s]+,\s*[A-Za-z\s]+,\s*[A-Za-z\s]+$/;

if (!this.customer.address.trim()) {

  this.addressError = 'Delivery address is required.';
  return;

}

if (!addressRegex.test(this.customer.address.trim())) {

  this.addressError =
    'Use this format: 12 Main Street, Tembisa, Johannesburg';
  return;

}

    // ===========================
    // CART VALIDATION
    // ===========================

    if (this.cartItems.length === 0) {

      Swal.fire({
        icon: 'info',
        title: 'Your cart is empty',
        text: 'Please add some coffee before checking out.',
        confirmButtonText: 'Go to Menu'
      }).then(() => {

        this.router.navigate(['/menu']);

      });

      return;

    }

    // ===========================
    // CREATE ORDER
    // ===========================

    const order = this.cartService.createOrder(

      this.customer,
      this.cartItems,
      this.total

    );

    // ===========================
    // CLEAR CART
    // ===========================

    this.cartService.clearCart();

    // ===========================
    // SUCCESS
    // ===========================

    Swal.fire({

      icon: 'success',
      title: 'Order Placed!',
      text: 'Your coffee is being prepared ☕',
      timer: 1800,
      showConfirmButton: false

    });

    setTimeout(() => {

      this.router.navigate(['/success'], {

        state: { order }

      });

    }, 1800);

  }

}