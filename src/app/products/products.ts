import {  Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Products {

  productlist= [
    {id:1, name: 'Expresso', price: 'R12.00', country: 'South Africa'},
    {id:2, name: 'Iced latte', price: 'R20.00', country: 'Ethiopia'},
    {id:3, name: 'Latte', price: 'R14.00', country: 'Egypt'},
    {id:4, name: 'Cappuccino', price: 'R10.00', country: 'Namibia'}
    
  ]
 
  getproducts(){
    return this.productlist
  }
}

