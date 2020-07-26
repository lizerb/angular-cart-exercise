import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Input para entrada de dados, Output para saída, EventEmitter para eventos
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}