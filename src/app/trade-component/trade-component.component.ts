import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trade-component',
  templateUrl: './trade-component.component.html',
  styleUrls: ['./trade-component.component.css']
})
export class TradeComponentComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
