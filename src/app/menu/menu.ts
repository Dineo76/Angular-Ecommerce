import { Component, inject} from '@angular/core';
import { Products } from '../products/products';
import { Cart } from '../services/cart';
import { Favorite } from '../service/favorite';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})

export class Menu {

  products = inject(Products);

  cartService = inject(Cart);
  favoriteService = inject(Favorite);

  productlist = this.products.getproducts();

  addCoffee(coffee: any) {

    this.cartService.addToCart(coffee);
  
  }
  
  toggleHeart() {

    this.favoriteService.toggleHeart();

  }

}
