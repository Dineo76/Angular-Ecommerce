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

  private cart: CartItem[] =
    JSON.parse(localStorage.getItem('cart') || '[]');

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product): void {

    const existing =
      this.cart.find(item => item.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        product,
        quantity: 1
      });
    }

    this.saveCart();
  }

  removeFromCart(productId: number): void {

    this.cart = this.cart.filter(
      item => item.product.id !== productId
    );

    this.saveCart();
  }

  increaseQty(productId: number): void {

    const item = this.cart.find(
      i => i.product.id === productId
    );

    if (item) {
      item.quantity++;
      this.saveCart();
    }
  }

  decreaseQty(productId: number): void {

    const item = this.cart.find(
      i => i.product.id === productId
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveCart();
    }
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  getTotal(): number {

    return this.cart.reduce(
      (sum, item) =>
        sum + item.product.price * item.quantity,
      0
    );
  }

  getCount(): number {

    return this.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }
}