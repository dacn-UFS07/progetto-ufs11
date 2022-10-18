import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private cartItems :Prodotto[] = []

  constructor() { }

  addToCart(product: Prodotto) {
    this.cartItems.push(product);
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  getItems() {
    return this.cartItems;
  }

}
