import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  cartItems = this.cartService.getItems()

  constructor(private cartService: CarrelloService) { }

  ngOnInit(): void {
  }

}
