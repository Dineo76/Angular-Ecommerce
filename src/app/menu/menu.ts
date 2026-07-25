import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { FavoriteService } from '../service/favorite.service';
import { Product } from '../products/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu implements OnInit {
[x: string]: any;

  productlist: Product[] = [];
  selectedCategory = 'All';

  constructor(
    private productService: ProductService,
    private cartService: CartService,

    // public = your menu.html can use it
    public favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.productlist = this.productService.getProducts();
  }
  filterCategory(category: string) {

  this.selectedCategory = category;

  if (category === 'All') {
    this.productlist = this.productService.getProducts();
  } else {
    this.productlist = this.productService
      .getProducts()
      .filter(product => product.category === category);
  }

}

  addCoffee(coffee: Product) {
    this.cartService.addToCart(coffee);
    console.log('ADDED:', coffee);
  }

  removeCoffee(id: number) {
    this.cartService.removeFromCart(id);
  }
}