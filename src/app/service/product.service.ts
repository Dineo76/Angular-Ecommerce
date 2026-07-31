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
  description: 'A bold double espresso topped with hot water, creating a smooth, rich coffee with a clean finish for those who enjoy authentic black coffee.',
  image: 'assets/images/americano.jpg',
  category: 'Hot Coffee',
  size: 'Medium (350 ml)',
  calories: 15,
  ingredients: [
    'Double Espresso',
    'Filtered Hot Water'
  ]
},

{
  id: 2,
  name: 'Espresso',
  price: 18,
  description: 'Our signature espresso is crafted from premium Arabica beans, delivering an intense aroma, velvety crema, and bold flavour in every sip.',
  image: 'assets/images/expresso-shot.jpg',
  category: 'Hot Coffee',
  size: 'Single Shot',
  calories: 5,
  ingredients: [
    '100% Arabica Coffee Beans'
  ]
},

{
  id: 3,
  name: 'Cappuccino',
  price: 22,
  description: 'A perfectly balanced blend of espresso, steamed milk and creamy foam finished with a light dusting of cocoa powder.',
  image: 'assets/images/cappuccino.jpg',
  category: 'Hot Coffee',
  size: 'Medium (350 ml)',
  calories: 150,
  ingredients: [
    'Espresso',
    'Steamed Milk',
    'Milk Foam',
    'Cocoa Powder'
  ]
},

{
  id: 4,
  name: 'Mocha',
  price: 26,
  description: 'Rich espresso blended with silky chocolate, steamed milk and topped with whipped cream for a luxurious coffee treat.',
  image: 'assets/images/mocha2.jpg',
  category: 'Hot Coffee',
  size: 'Large (450 ml)',
  calories: 290,
  ingredients: [
    'Espresso',
    'Chocolate Syrup',
    'Steamed Milk',
    'Whipped Cream'
  ]
},

{
  id: 5,
  name: 'Flat White',
  price: 25,
  description: 'A smooth, velvety coffee made with rich espresso and silky microfoam for a creamy yet bold coffee experience.',
  image: 'assets/images/flat-white.jpg',
  category: 'Hot Coffee',
  size: 'Medium (350 ml)',
  calories: 170,
  ingredients: [
    'Double Espresso',
    'Steamed Milk',
    'Microfoam'
  ]
},

// =========================
// ICED COFFEE
// =========================

{
  id: 6,
  name: 'Iced Latte',
  price: 28,
  description: 'Fresh espresso poured over ice with chilled creamy milk for a smooth and refreshing coffee.',
  image: 'assets/images/iced-latte.jpg',
  category: 'Iced Coffee',
  size: 'Large (500 ml)',
  calories: 180,
  ingredients: [
    'Espresso',
    'Cold Milk',
    'Ice Cubes'
  ]
},

{
  id: 7,
  name: 'Iced Americano',
  price: 24,
  description: 'Double espresso served over crystal-clear ice with cold water, delivering a refreshing and bold coffee flavour.',
  image: 'assets/images/iced-americano.jpg',
  category: 'Iced Coffee',
  size: 'Large (500 ml)',
  calories: 12,
  ingredients: [
    'Double Espresso',
    'Cold Water',
    'Ice Cubes'
  ]
},

{
  id: 8,
  name: 'Cold Brew',
  price: 30,
  description: 'Slow-steeped for over 16 hours to create a naturally sweet, smooth coffee with low acidity and a refreshing finish.',
  image: 'assets/images/cold-brew.jpg',
  category: 'Iced Coffee',
  size: 'Large (500 ml)',
  calories: 8,
  ingredients: [
    'Cold Brew Coffee',
    'Filtered Water',
    'Ice Cubes'
  ]
},

{
  id: 9,
  name: 'Iced Mocha',
  price: 32,
  description: 'A refreshing blend of espresso, creamy milk and rich chocolate served over ice for the perfect sweet coffee indulgence.',
  image: 'assets/images/iced-mocha.jpg',
  category: 'Iced Coffee',
  size: 'Large (500 ml)',
  calories: 260,
  ingredients: [
    'Espresso',
    'Chocolate Syrup',
    'Cold Milk',
    'Ice Cubes',
    'Whipped Cream'
  ]
},

{
  id: 10,
  name: 'Caramel Frappé',
  price: 34,
  description: 'A smooth blended coffee drink with caramel sauce, crushed ice and whipped cream for a rich café-style treat.',
  image: 'assets/images/caramel-frappe.jpg',
  category: 'Iced Coffee',
  size: 'Large (500 ml)',
  calories: 340,
  ingredients: [
    'Espresso',
    'Milk',
    'Caramel Syrup',
    'Ice',
    'Whipped Cream'
  ]
},

{
  id: 11,
  name: 'Vanilla Frappé',
  price: 34,
  description: 'A creamy vanilla-flavoured blended coffee topped with whipped cream and finished with a hint of vanilla sweetness.',
  image: 'assets/images/vanilla-frappe.jpg',
  category: 'Iced Coffee',
  size: 'Large (500 ml)',
  calories: 330,
  ingredients: [
    'Espresso',
    'Milk',
    'Vanilla Syrup',
    'Ice',
    'Whipped Cream'
  ]
},

// =========================
// PASTRIES
// =========================

{
  id: 12,
  name: 'Butter Croissant',
  price: 20,
  description: 'Freshly baked every morning with flaky golden layers and rich buttery flavour that melts in your mouth.',
  image: 'assets/images/croissant.jpg',
  category: 'Pastries',
  size: '1 Piece',
  calories: 280,
  ingredients: [
    'Butter',
    'Flour',
    'Milk',
    'Eggs'
  ]
},

{
  id: 13,
  name: 'Chocolate Muffin',
  price: 22,
  description: 'Soft and moist chocolate muffin filled with rich chocolate chips for the perfect sweet snack.',
  image: 'assets/images/chocolate-muffin.jpg',
  category: 'Pastries',
  size: '1 Muffin',
  calories: 410,
  ingredients: [
    'Flour',
    'Chocolate Chips',
    'Butter',
    'Eggs',
    'Sugar'
  ]
},

{
  id: 14,
  name: 'Blueberry Muffin',
  price: 22,
  description: 'Light and fluffy muffin packed with juicy blueberries and baked until perfectly golden.',
  image: 'assets/images/blueberry.jpg',
  category: 'Pastries',
  size: '1 Muffin',
  calories: 390,
  ingredients: [
    'Blueberries',
    'Flour',
    'Butter',
    'Eggs',
    'Sugar'
  ]
},

{
  id: 15,
  name: 'Cinnamon Roll',
  price: 25,
  description: 'Soft cinnamon-spiced dough swirled with brown sugar and topped with smooth vanilla icing.',
  image: 'assets/images/cinnamon-roll.jpg',
  category: 'Pastries',
  size: '1 Roll',
  calories: 450,
  ingredients: [
    'Cinnamon',
    'Brown Sugar',
    'Butter',
    'Vanilla Icing'
  ]
},

{
  id: 16,
  name: 'Brownie',
  price: 23,
  description: 'Rich, fudgy chocolate brownie with a soft centre and a slightly crisp chocolate crust.',
  image: 'assets/images/brownie.jpg',
  category: 'Pastries',
  size: '1 Slice',
  calories: 430,
  ingredients: [
    'Dark Chocolate',
    'Butter',
    'Eggs',
    'Flour',
    'Cocoa Powder'
  ]
},

// =========================
// DESSERTS
// =========================

{
  id: 17,
  name: 'Cheesecake',
  price: 35,
  description: 'A rich and creamy baked cheesecake with a buttery biscuit base, finished with a smooth, velvety texture in every bite.',
  image: 'assets/images/cheesecake.jpg',
  category: 'Desserts',
  size: '1 Slice',
  calories: 420,
  ingredients: [
    'Cream Cheese',
    'Digestive Biscuits',
    'Butter',
    'Fresh Cream',
    'Vanilla Extract'
  ]
},

{
  id: 18,
  name: 'Chocolate Cake',
  price: 36,
  description: 'Layers of moist chocolate sponge filled with silky chocolate ganache, perfect for every chocolate lover.',
  image: 'assets/images/chocolatecake.jpg',
  category: 'Desserts',
  size: '1 Slice',
  calories: 480,
  ingredients: [
    'Chocolate Sponge',
    'Chocolate Ganache',
    'Butter',
    'Eggs',
    'Cocoa Powder'
  ]
},

{
  id: 19,
  name: 'Carrot Cake',
  price: 34,
  description: 'A moist carrot cake blended with warm spices and topped with smooth cream cheese frosting.',
  image: 'assets/images/carrotcake.jpg',
  category: 'Desserts',
  size: '1 Slice',
  calories: 430,
  ingredients: [
    'Fresh Carrots',
    'Cinnamon',
    'Walnuts',
    'Cream Cheese Frosting',
    'Brown Sugar'
  ]
},

{
  id: 20,
  name: 'Red Velvet Cake',
  price: 38,
  description: 'A classic red velvet sponge layered with luxurious cream cheese frosting and a hint of cocoa.',
  image: 'assets/images/redvelvet-cake.jpg',
  category: 'Desserts',
  size: '1 Slice',
  calories: 450,
  ingredients: [
    'Red Velvet Sponge',
    'Cream Cheese Frosting',
    'Vanilla',
    'Cocoa Powder'
  ]
},

{
  id: 21,
  name: 'Tiramisu',
  price: 38,
  description: 'An authentic Italian dessert made with coffee-soaked sponge fingers, mascarpone cream and a dusting of cocoa.',
  image: 'assets/images/tiramisucake.jpg',
  category: 'Desserts',
  size: '1 Slice',
  calories: 390,
  ingredients: [
    'Mascarpone Cheese',
    'Espresso',
    'Ladyfinger Biscuits',
    'Cocoa Powder',
    'Fresh Cream'
  ]
},

{
  id: 22,
  name: 'Belgian Waffles',
  price: 40,
  description: 'Freshly baked golden Belgian waffles served warm with maple syrup, whipped cream and seasonal fruit.',
  image: 'assets/images/waffles.jpg',
  category: 'Desserts',
  size: '2 Waffles',
  calories: 510,
  ingredients: [
    'Belgian Waffle Batter',
    'Whipped Cream',
    'Maple Syrup',
    'Fresh Strawberries',
    'Blueberries'
  ]
}
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}