import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartCount() {
throw new Error('Method not implemented.');
}

  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log('Cart:', this.cart);
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    console.log('Cart:', this.cart);
  }

  getCart() {
    return this.cart;
  }
}