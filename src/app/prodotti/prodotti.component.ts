import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';
import { ProdottoService } from '../services/prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  prodotti :Prodotto[] = []

  constructor(private prodottoService :ProdottoService) {
    this.prodotti = this.prodottoService.prodotti
   }

  ngOnInit(): void {
  }

}
