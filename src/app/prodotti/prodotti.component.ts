import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';
import { ProdottoService } from '../services/prodotto.service';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti :Prodotto[] = []
  badgeNumbersAddedToCart:any

  constructor(private prodottoService :ProdottoService, private sharedBadgeNumbersAddedToCart: NavbarService) {
    this.prodotti = this.prodottoService.prodotti
   }

  ngOnInit(): void {
  }

  onAggiungiACarrello() {
    this.sharedBadgeNumbersAddedToCart.setBadgeNumbersAddedToCart(this.sharedBadgeNumbersAddedToCart.getBadgeNumbersAddedToCart() +1)
  }

}
