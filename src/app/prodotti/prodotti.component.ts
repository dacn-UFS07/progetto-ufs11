import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';
import { ProdottoService } from '../services/prodotto.service';
import { NavbarService } from '../shared/navbar.service';
import { CarrelloService } from '../services/carrello.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti :Prodotto[] = []
  badgeNumbersAddedToCart:any

  constructor(private cartService: CarrelloService, private prodottoService :ProdottoService, private sharedBadgeNumbersAddedToCart: NavbarService) {
    this.prodotti = this.prodottoService.prodotti
   }

  ngOnInit(): void {
  }

  onIncreaseBadgeNumber() {
    this.sharedBadgeNumbersAddedToCart.setBadgeNumbersAddedToCart(this.sharedBadgeNumbersAddedToCart.getBadgeNumbersAddedToCart() +1)
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
