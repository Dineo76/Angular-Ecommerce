import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { Contacts } from './contacts/contacts';
import { Menu } from './menu/menu';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';
import { Wishlist } from './wishlist/wishlist';
import { RegisterComponent } from './register/register';
import {LoginComponent} from './login/login';
import { authGuard } from './guard/auth-guard';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', component: Hero },

  { path: 'menu', component: Menu },
  { path: 'about-us', component: AboutUs },
  { path: 'contacts', component: Contacts },
  { path: 'cart', component: Cart },
  { path: 'wishlist', component: Wishlist },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: Profile},

  



  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details')
        .then(m => m.ProductDetailsComponent)
  },
    {
  path: 'checkout',
  component: Checkout,
  canActivate: [authGuard]
},

    {
      path: 'success',
      loadComponent: () =>
        import('./success/success')
          .then(m => m.Success)
    },

{
  path: 'orders',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./orders/orders')
      .then(m => m.OrdersComponent)
},

 { path: 'profile',
  component: Profile,
  canActivate: [authGuard]
},


];