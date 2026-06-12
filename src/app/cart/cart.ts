// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CartService } from '../service/cart.service';
// import { Product } from '../products/product.model';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.html',
//   styleUrls: ['./cart.css']
// })
// export class CartComponent {

//   cartService = inject(CartService);

//   get cartItems(): Product[] {
//     return this.cartService.getCart();
//   }

//   removeItem(id: number) {
//     this.cartService.removeFromCart(id);
//   }

//   get total(): number {
//     return this.cartService.getTotal();
//   }

//   clearCart() {
//     this.cartService.clearCart();
//   }
// }
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {

  cartService = inject(CartService);

  get cartItems() {
    return this.cartService.getCart();
  }

  increase(id: number) {
    this.cartService.increaseQty(id);
  }

  decrease(id: number) {
    this.cartService.decreaseQty(id);
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  get total() {
    return this.cartService.getTotal();
  }

  clear() {
    this.cartService.clearCart();
  }
}