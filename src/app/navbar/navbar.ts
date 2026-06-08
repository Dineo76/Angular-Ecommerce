import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { CartService } from '../service/cart.service';
import { FavoriteService } from '../service/favorite.service';




@Component({
  selector: 'navbarApp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  cartService = inject(CartService);
  favoriteService = inject(FavoriteService);

  get cartCount() {
    return this.cartService.getCount();
  }
}
