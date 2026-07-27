import { Injectable, signal } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites = signal<Product[]>([]);

  constructor() {
    this.favorites.set(this.loadFavorites());
  }

  /* ==========================================
     USER STORAGE KEY
  ========================================== */

  private getStorageKey(): string {

    const currentUser = JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );

    return currentUser
      ? `wishlist_${currentUser.email}`
      : 'wishlist_guest';

  }

  /* ==========================================
     LOAD & SAVE
  ========================================== */

  private loadFavorites(): Product[] {

    const savedFavorites = localStorage.getItem(
      this.getStorageKey()
    );

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return [];

  }

  private saveFavorites(): void {

    localStorage.setItem(
      this.getStorageKey(),
      JSON.stringify(this.favorites())
    );

  }

  /* ==========================================
     FAVORITES
  ========================================== */

  toggleFavorite(product: Product): void {

    const alreadySaved = this.favorites().some(
      item => item.id === product.id
    );

    if (alreadySaved) {

      this.removeFavorite(product.id);

    } else {

      this.favorites.update(items => [...items, product]);

      this.saveFavorites();

    }

  }

  removeFavorite(productId: number): void {

    this.favorites.update(items =>
      items.filter(item => item.id !== productId)
    );

    this.saveFavorites();

  }

  isFavorite(productId: number): boolean {

    return this.favorites().some(
      item => item.id === productId
    );

  }

  getCount(): number {

    return this.favorites().length;

  }

  /* ==========================================
     REFRESH WHEN USER CHANGES
  ========================================== */

  refreshFavorites(): void {

    this.favorites.set(this.loadFavorites());

  }

}