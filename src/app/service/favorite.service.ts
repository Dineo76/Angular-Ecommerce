import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  liked = signal(false);

  toggle() {
    this.liked.update(value => !value);
  }
}