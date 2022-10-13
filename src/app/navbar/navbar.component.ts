import { Component, Input, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  badgeNumbersAddedToCart = 0; 

  constructor(private sharedBadgeNumbersAddedToCart: NavbarService) { }

  ngOnInit(): void {
    this.sharedBadgeNumbersAddedToCart.setBadgeNumbersAddedToCart(this.badgeNumbersAddedToCart)
  }

  getBadgeNumbersAddedToCart() {
    return this.sharedBadgeNumbersAddedToCart.getBadgeNumbersAddedToCart()
  }

}
