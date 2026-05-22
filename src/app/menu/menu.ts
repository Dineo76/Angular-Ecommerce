import { Component, inject, Injectable} from '@angular/core';
import { Products } from '../products/products';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
products = inject(Products);

productlist= this.products.getproducts();
}
