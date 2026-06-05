import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu implements OnInit {

  productlist: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productlist = this.productService.getProducts();
  }
}