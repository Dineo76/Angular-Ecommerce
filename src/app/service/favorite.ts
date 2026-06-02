import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Favorite {

  liked = signal(false);

  toggleHeart() {

    this.liked.update(value => !value);

  }
}
