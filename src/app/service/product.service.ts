import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Americano',
      price: 19,
      description: 'Strong rich coffee shot',
      image: 'assets/images/americano.jpg'
    },
    {
      id: 2,
      name: 'Iced Latte',
      price: 25,
      description: 'Cold creamy latte',
      image: 'assets/images/iced latte.jpg'
    },
    {
      id: 3,
      name: 'Cappuccino',
      price: 22,
      description: 'Smooth foam coffee',
      image: 'assets/images/cappuccino.jpg',
    },
    {
      id: 4,
      name: 'Mocha',
      price: 22,
      description: 'Smooth foam coffee',
      image: './assets/images/mocha.jpg'
    }

  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}