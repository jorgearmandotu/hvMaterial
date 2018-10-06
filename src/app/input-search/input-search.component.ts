import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})

export class InputSearchComponent implements OnInit {

  value: String = '';
  alerta() {
    alert('searching clicked');
    this.value = '';
  }
  constructor() {}

  ngOnInit() {
  }

}
