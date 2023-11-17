import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    AOS.init();
  }
}
