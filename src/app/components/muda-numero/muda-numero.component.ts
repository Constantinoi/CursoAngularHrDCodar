import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-muda-numero',
  templateUrl: './muda-numero.component.html',
  styleUrls: ['./muda-numero.component.css'],
})
export class MudaNumeroComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handlesCLick() {
    this.changeNumber.emit();
  }
}
