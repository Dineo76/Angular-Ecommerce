import { Routes } from '@angular/router';

import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { Contacts } from './contacts/contacts';
import { Menu } from './menu/menu';
import { CartComponent } from './cart/cart';

export const routes: Routes = [
  { path: '', component: Hero },

  { path: 'menu', component: Menu },
  { path: 'about-us', component: AboutUs },
  { path: 'contacts', component: Contacts },
  { path: 'cart', component: CartComponent },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details')
        .then(m => m.ProductDetailsComponent)
  }
];