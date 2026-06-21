import { Injectable, signal } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private readonly storageKey = 'coffeeFavorites';

  favorites = signal<Product[]>(this.loadFavorites());

  private loadFavorites(): Product[] {
    const savedFavorites = localStorage.getItem(this.storageKey);

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return [];
  }

  private saveFavorites() {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.favorites())
    );
  }

  toggleFavorite(product: Product) {
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

  removeFavorite(productId: number) {
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
}