// import { Injectable } from '@angular/core';
// import { Product } from '../products/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   private cart: Product[] = [];

//   getCart(): Product[] {
//     return this.cart;
//   }

//   addToCart(product: Product): void {
//     this.cart.push(product);
//   }

//   removeFromCart(productId: number): void {
//     this.cart = this.cart.filter(p => p.id !== productId);
//   }

//   clearCart(): void {
//     this.cart = [];
//   }

//   getTotal(): number {
//     return this.cart.reduce((sum, item) => sum + item.price, 0);
//   }

//   getCount(): number {
//     return this.cart.length;
//   }

import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product): void {

    const existing = this.cart.find(item => item.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }

  increaseQty(productId: number): void {
    const item = this.cart.find(i => i.product.id === productId);
    if (item) item.quantity++;
  }

  decreaseQty(productId: number): void {
    const item = this.cart.find(i => i.product.id === productId);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    }
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  getCount(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}