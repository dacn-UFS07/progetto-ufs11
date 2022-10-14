import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private _carrello :Prodotto[] = []

  constructor() { }
}
