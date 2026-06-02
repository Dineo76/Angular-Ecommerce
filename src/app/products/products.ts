import {  Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Products {

  // productlist= [
  //   {id:1, name: 'Expresso', price: 'R19.00', country: 'South Africa'},
  //   {id:2, name: 'Iced latte', price: 'R20.00', country: 'Ethiopia'},
  //   {id:3, name: 'Latte', price: 'R14.00', country: 'Egypt'},
  //   {id:4, name: 'Cappuccino', price: 'R10.00', country: 'Namibia'},
  //   {id:5, name: 'Frappe', price: 'R19.00', country: 'Pakistan'},
  //   {id:6, name: 'Machiatto', price: 'R10.00', country: 'Brazil'},
  //   {id:7, name: 'Dopio', price: 'R10.00', country: 'Namibia'},
  //   {id:8, name: 'Hot chocolate', price: 'R125.00', country: 'Namibia'},
  //   {id:9, name: 'Con Panna', price: 'R10.00', country: 'Namibia'},
  //   {id:10, name: 'Mocha', price: 'R10.00', country: 'Namibia'}, 
  //   {id:11, name: 'Irish', price: 'R10.00', country: 'Namibia'},
  //   {id:12, name: 'Fredo', price: 'R10.00', country: 'Namibia'}

  // ]


 
productlist = [

  {
    id: 1,
    name: 'Espresso',
    price: 'R19.00',
    country: 'South Africa',
    image: 'https://images.pexels.com/photos/7190477/pexels-photo-7190477.jpeg',
    description: 'Strong and rich coffee shot.'
  },

  {
    id: 2,
    name: 'Iced Latte',
    price: 'R20.00',
    country: 'Ethiopia',
    image: 'https://images.pexels.com/photos/27548785/pexels-photo-27548785.jpeg',
    description: 'Smooth chilled coffee with milk.'
  },

  {
    id: 3,
    name: 'Latte',
    price: 'R14.00',
    country: 'Egypt',
    image: 'https://images.pexels.com/photos/15800981/pexels-photo-15800981.jpeg',
    description: 'Creamy espresso with steamed milk.'
  },

  {
    id: 4,
    name: 'Cappuccino',
    price: 'R10.00',
    country: 'Namibia',
    image: 'https://images.pexels.com/photos/2478313/pexels-photo-2478313.jpeg',
    description: 'Foamy and delicious Italian coffee.'
  },

  {
    id: 5,
    name: 'Frappe',
    price: 'R19.00',
    country: 'Pakistan',
    image: 'https://media.istockphoto.com/id/471348211/photo/matcha.jpg?b=1&s=612x612&w=0&k=20&c=QbaO_KOmaJWDKVoROrNna5Ztl0JqidgXpUgG4SYJaOE=',
    description: 'Cold blended coffee drink.'
  }
]


 
  getproducts(){
    return this.productlist
  }

}
