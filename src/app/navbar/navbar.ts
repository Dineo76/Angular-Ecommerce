import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CartService } from '../service/cart.service';
import { FavoriteService } from '../service/favorite.service';
import { ProductService } from '../service/product.service';
import { Product } from '../products/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbarApp',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {

  private router = inject(Router);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private favoriteService = inject(FavoriteService);

  searchTerm = '';
  results: any[] = [];
 

  selectResult(item: any) {

  if (item.type === 'product') {
    this.router.navigate(['/product', item.id]);
  }

  if (item.type === 'order') {
    this.router.navigate(['/orders']);
  }

  this.results = [];
  this.searchTerm = '';
}


  // ✅ CLEAN GETTERS FOR TEMPLATE
  get cartCount() {
    return this.cartService.getCount();
  }

  get wishlistCount() {
    return this.favoriteService.getCount();
  }

  onLiveSearch() {
  const term = this.searchTerm.toLowerCase().trim();

  if (!term) {
    this.results = [];
  
    return;
  }

  const products = this.productService.getProducts();
  const orders = this.cartService.getOrders();

  const productResults = products
    .filter(p => p.name.toLowerCase().includes(term))
    .map(p => ({
      type: 'product',
      label: p.name,
      id: p.id
    }));

  const orderResults = orders
    .filter(o =>
      o?.customer?.name?.toLowerCase().includes(term) ||
      o?.id?.toString().includes(term)
    )
    .map(o => ({
      type: 'order',
      label: `Order #${o.id} - ${o.customer.name}`,
      id: o.id
    }));

  this.results = [...productResults, ...orderResults];

 
}
}