import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  getCount(): number {
    return this.cart.length;
  }
}