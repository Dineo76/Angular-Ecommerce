import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { Contacts } from './contacts/contacts';
import { Menu } from './menu/menu';
import { Products } from './products/products';
import { CartComponent } from './cart/cart';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'about-us', component: AboutUs },
  { path: 'contacts', component: Contacts },
  { path: 'menu', component: Menu },
  { path: 'products', component: Products },
  { path: 'cart', component: CartComponent }
];