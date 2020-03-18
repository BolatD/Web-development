import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { database } from "src/app/database";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = database.cart;

  getProducts(): Observable <any> {
    return of(database.products);
  }

  getProductById(id: number): Observable <any> {
    return of(database.products.find(product => product.id === id));
  }


  addItem(newItemId) {
    let exists = false;

    this.cart.items.forEach(item => {
      if(item.id === newItemId) {
        item.quantity++;
        exists = true;
      }
    });

    if(!exists) {
      database.cart.items.push({
        id: newItemId,
        quantity: 1,
      });
    }
    this.cart.totalPrice += database.products[newItemId].price;
  }
  removeItem(itemId) {

    let i = 0;

    this.cart.items.forEach(item => {
      if(item.id === itemId) {
        if(item.quantity > 1){
          item.quantity--;
        }
        else {
          this.cart.items.splice(i, 1);
        }
      }
      i++;
    });

    this.cart.totalPrice -= database.products[itemId].price;


  }
  constructor() { }
}
