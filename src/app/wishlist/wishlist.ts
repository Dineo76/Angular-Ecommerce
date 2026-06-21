import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../service/favorite.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {

  constructor(
    public favoriteService: FavoriteService,
    public cartService: CartService
  ) {}

  // ✅ FIX: use getter instead of class property
  get favorites() {
    return this.favoriteService.favorites;
  }

  remove(id: number) {
    this.favoriteService.removeFavorite(id);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}