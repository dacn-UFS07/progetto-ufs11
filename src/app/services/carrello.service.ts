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

  getItems() {
    return this.cartItems;
  }

}
