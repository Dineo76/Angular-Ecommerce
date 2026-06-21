import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { FavoriteService } from '../service/favorite.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  public favoriteService = inject(FavoriteService);

  product?: Product;
  addedMessage = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);

      this.addedMessage = true;

      setTimeout(() => {
        this.addedMessage = false;
      }, 2000);
    }
  }

  toggleFavorite() {
    if (this.product) {
      this.favoriteService.toggleFavorite(this.product);
    }
  }

  isFavorite(): boolean {
    return this.product
      ? this.favoriteService.isFavorite(this.product.id)
      : false;
  }
}