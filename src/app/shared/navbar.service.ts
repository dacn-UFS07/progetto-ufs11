import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  badgeNumbersAddedToCart!: number

  constructor() { }

  setBadgeNumbersAddedToCart(data: number) {
    this.badgeNumbersAddedToCart = data
  }

  getBadgeNumbersAddedToCart(){
    return this.badgeNumbersAddedToCart
  }
}
