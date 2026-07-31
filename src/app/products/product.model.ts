export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;

  category: string;
  size: string;
  ingredients: string[];
  calories: number;
}