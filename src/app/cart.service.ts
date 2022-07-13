import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  /*define an items property to store the array of the current products in the cart.*/
  
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
  /* 
  The addToCart() method appends a product to an array of items
  The getItems() method collects the items users add to the cart and returns each item with its associated quantity
  The clearCart() method returns an empty array of items, which empties the cart
  */
  constructor( private http: HttpClient) { }
  
}
