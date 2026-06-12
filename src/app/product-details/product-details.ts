import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product?: Product;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(id);

  }

  addToCart() {

    if (this.product) {
      this.cartService.addToCart(this.product);
    }

  }
}