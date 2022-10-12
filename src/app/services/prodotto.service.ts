import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti :Prodotto[] = [
    {codice:"001",nome:"prodotto 1", categoria:1, slug:"prod1",prezzo:100,foto:""},
    {codice:"002",nome:"prodotto 2", categoria:2, slug:"prod2",prezzo:200,foto:""},
    {codice:"003",nome:"prodotto 3", categoria:1, slug:"prod3",prezzo:300,foto:""},
    {codice:"004",nome:"prodotto 4", categoria:2, slug:"prod4",prezzo:400,foto:""},
    {codice:"005",nome:"prodotto 5", categoria:2, slug:"prod5",prezzo:500,foto:""},
    {codice:"006",nome:"prodotto 6", categoria:1, slug:"prod6",prezzo:250,foto:""},
  ]

  constructor() { }

  get prodotti() {
    return [...this._prodotti]
  }
}
