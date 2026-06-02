// import { Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Cart {

//   cartItems = signal<any[]>([]);

//   cartCount = signal(0);

//   addToCart(product: any) {

//     this.cartItems.update(items => [...items, product]);

//     this.cartCount.update(count => count + 1);

//   }

//   removeFromCart(id: number) {
//     this.cartItems.update(items =>
//       items.filter(item => item.id !== id)
//     );
  
//     this.cartCount.update(count => count - 1);
//   }

// }

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  cartItems = signal<any[]>([]);

  cartCount = signal(0);

  addToCart(product: any) {

    this.cartItems.update(items => {

      const existing = items.find(i => i.id === product.id);

      if (existing) {
        return items.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });

    this.cartCount.update(c => c + 1);
  }

  removeFromCart(id: number) {

    this.cartItems.update(items =>
      items.filter(item => item.id !== id)
    );

    this.cartCount.update(c => Math.max(0, c - 1));
  }

  increaseQty(id: number) {

    this.cartItems.update(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    this.cartCount.update(c => c + 1);
  }

  decreaseQty(id: number) {

    this.cartItems.update(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );

    this.cartCount.update(c => Math.max(0, c - 1));
  }
}