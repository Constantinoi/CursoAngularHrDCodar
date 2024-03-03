import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
})
export class DiretivasComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];

underline = 'underline-title'

  constructor() {}

  ngOnInit(): void {}
}
