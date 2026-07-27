import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: number;
  customer: any;
  items: CartItem[];
  total: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.loadCart();
  }

  /* ==========================================
     USER STORAGE KEYS
  ========================================== */

  private getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  private getCartKey(): string {

    const user = this.getCurrentUser();

    return user
      ? `cart_${user.email}`
      : 'cart_guest';

  }

  private getOrdersKey(): string {

    const user = this.getCurrentUser();

    return user
      ? `orders_${user.email}`
      : 'orders_guest';

  }

  /* ==========================================
     CART
  ========================================== */

  private cart: CartItem[] = [];

  private loadCart(): void {

    this.cart = JSON.parse(
      localStorage.getItem(this.getCartKey()) || '[]'
    );

  }

  private saveCart(): void {

    localStorage.setItem(
      this.getCartKey(),
      JSON.stringify(this.cart)
    );

  }

  getCart(): CartItem[] {

    this.loadCart();

    return this.cart;

  }

  addToCart(product: Product): void {

    this.loadCart();

    const existing = this.cart.find(
      item => item.product.id === product.id
    );

    if (existing) {

      existing.quantity++;

    } else {

      this.cart.push({
        product,
        quantity: 1
      });

    }

    this.saveCart();

  }

  removeFromCart(productId: number): void {

    this.loadCart();

    this.cart = this.cart.filter(
      item => item.product.id !== productId
    );

    this.saveCart();

  }

  increaseQty(productId: number): void {

    this.loadCart();

    const item = this.cart.find(
      i => i.product.id === productId
    );

    if (item) {

      item.quantity++;

      this.saveCart();

    }

  }

  decreaseQty(productId: number): void {

    this.loadCart();

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

    this.loadCart();

    return this.cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

  }

  getCount(): number {

    this.loadCart();

    return this.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

  }

  /* ==========================================
     ORDERS
  ========================================== */

  getOrders(): Order[] {

    return JSON.parse(
      localStorage.getItem(this.getOrdersKey()) || '[]'
    );

  }

  saveOrder(order: Order): void {

    const orders = this.getOrders();

    orders.push(order);

    localStorage.setItem(
      this.getOrdersKey(),
      JSON.stringify(orders)
    );

  }

  createOrder(
    customer: any,
    items: CartItem[],
    total: number
  ): Order {

    const order: Order = {

      id: Date.now(),

      customer,

      items: [...items],

      total,

      date: new Date()

    };

    this.saveOrder(order);

    return order;

  }

}