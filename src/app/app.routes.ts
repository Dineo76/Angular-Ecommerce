import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { Contacts } from './contacts/contacts';
import { Menu } from './menu/menu';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Wishlist } from './wishlist/wishlist';

export const routes: Routes = [
  { path: '', component: Hero },

  { path: 'menu', component: Menu },
  { path: 'about-us', component: AboutUs },
  { path: 'contacts', component: Contacts },
  { path: 'cart', component: Cart },
  { path: 'wishlist', component: Wishlist },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details')
        .then(m => m.ProductDetailsComponent)
  },
    { path: 'checkout', component: Checkout },

    {
      path: 'success',
      loadComponent: () =>
        import('./success/success')
          .then(m => m.Success)
    },

    {
  path: 'orders',
  loadComponent: () =>
    import('./orders/orders')
      .then(m => m.OrdersComponent)
}
];