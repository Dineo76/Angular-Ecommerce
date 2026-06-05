import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Espresso',
      price: 19,
      description: 'Strong rich coffee shot',
      image: 'assets/espresso.jpg'
    },
    {
      id: 2,
      name: 'Iced Latte',
      price: 25,
      description: 'Cold creamy latte',
      image: 'assets/iced-latte.jpg'
    },
    {
      id: 3,
      name: 'Cappuccino',
      price: 22,
      description: 'Smooth foam coffee',
      image: 'assets/cappuccino.jpg'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}