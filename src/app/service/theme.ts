import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  isDarkTheme = signal(false);

  toggleTheme() { this.isDarkTheme.update(value => !value);
    
   }
  
}
