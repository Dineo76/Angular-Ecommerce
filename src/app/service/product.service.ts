import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
      // =========================
  // HOT COFFEE
  // =========================

  {
    id: 1,
    name: 'Americano',
    price: 19,
    description: 'Rich espresso topped with hot water.',
    image: 'assets/images/americano.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 2,
    name: 'Espresso',
    price: 18,
    description: 'A bold and concentrated coffee shot.',
    image: 'assets/images/expresso-shot.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: 22,
    description: 'Espresso with steamed milk and creamy foam.',
    image: 'assets/images/cappuccino.jpg',
    category: 'Hot Coffee'
  },
  
  {
    id: 4,
    name: 'Mocha',
    price: 26,
    description: 'Chocolate and espresso combined perfectly.',
    image: 'assets/images/mocha2.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 5,
    name: 'Flat White',
    price: 25,
    description: 'Velvety microfoam over rich espresso.',
    image: 'assets/images/flat-white.jpg',
    category: 'Hot Coffee'
  },

  // =========================
  // ICED COFFEE
  // =========================

  {
    id: 6,
    name: 'Iced Latte',
    price: 28,
    description: 'Cold espresso with chilled creamy milk.',
    image: 'assets/images/iced-latte.jpg',
    category: 'Iced Coffee'
  },
  {
    id: 7,
    name: 'Iced Americano',
    price: 24,
    description: 'Refreshing espresso served over ice.',
    image: 'assets/images/iced-americano.jpg',
    category: 'Iced Coffee'
  },
  {
    id: 8,
    name: 'Cold Brew',
    price: 30,
    description: 'Slow brewed coffee with a smooth finish.',
    image: 'assets/images/cold-brew.jpg',
    category: 'Iced Coffee'
  },
  {
    id: 9,
    name: 'Iced Mocha',
    price: 32,
    description: 'Chocolate coffee served chilled.',
    image: 'assets/images/iced-mocha.jpg',
    category: 'Iced Coffee'
  },
  {
    id: 10,
    name: 'Caramel Frappé',
    price: 34,
    description: 'Creamy caramel blended with ice.',
    image: 'assets/images/caramel-frappe.jpg',
    category: 'Iced Coffee'
  },
  {
    id: 11,
    name: 'Vanilla Frappé',
    price: 34,
    description: 'Sweet vanilla iced coffee delight.',
    image: 'assets/images/vanilla-frappe.jpg',
    category: 'Iced Coffee'
  },

  // =========================
  // PASTRIES
  // =========================

  {
    id: 12,
    name: 'Butter Croissant',
    price: 20,
    description: 'Fresh buttery French pastry.',
    image: 'assets/images/croissant.jpg',
    category: 'Pastries'
  },
  {
    id: 13,
    name: 'Chocolate Muffin',
    price: 22,
    description: 'Moist muffin with rich chocolate chips.',
    image: 'assets/images/chocolate-muffin.jpg',
    category: 'Pastries'
  },
  {
    id: 14,
    name: 'Blueberry Muffin',
    price: 22,
    description: 'Soft muffin packed with blueberries.',
    image: 'assets/images/blueberry.jpg',
    category: 'Pastries'
  },
  {
    id: 15,
    name: 'Cinnamon Roll',
    price: 25,
    description: 'Warm roll topped with sweet icing.',
    image: 'assets/images/cinnamon-roll.jpg',
    category: 'Pastries'
  },
  {
    id: 16,
    name: 'Brownie',
    price: 23,
    description: 'Rich chocolate brownie with a fudgy centre.',
    image: 'assets/images/brownie.jpg',
    category: 'Pastries'
  },
 

  // =========================
  // DESSERTS
  // =========================

  {
    id: 17,
    name: 'Cheesecake',
    price: 35,
    description: 'Creamy baked cheesecake.',
    image: 'assets/images/cheesecake.jpg',
    category: 'Desserts'
  },
  {
    id: 18,
    name: 'Chocolate Cake',
    price: 36,
    description: 'Rich layered chocolate cake.',
    image: 'assets/images/chocolatecake.jpg',
    category: 'Desserts'
  },
  {
    id: 19,
    name: 'Carrot Cake',
    price: 34,
    description: 'Moist carrot cake with cream cheese frosting.',
    image: 'assets/images/carrotcake.jpg',
    category: 'Desserts'
  },
  {
    id: 20,
    name: 'Red Velvet Cake',
    price: 38,
    description: 'Classic red velvet with cream cheese icing.',
    image: 'assets/images/redvelvet-cake.jpg',
    category: 'Desserts'
  },
  {
    id: 21,
    name: 'Tiramisu',
    price: 38,
    description: 'Italian coffee-flavoured dessert.',
    image: 'assets/images/tiramisucake.jpg',
    category: 'Desserts'
  },
  {
    id: 22,
    name: 'Belgian Waffles',
    price: 40,
    description: 'Golden waffles served fresh.',
    image: 'assets/images/waffles.jpg',
    category: 'Desserts'
  }

  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}