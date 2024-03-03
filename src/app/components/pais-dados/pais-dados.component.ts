import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-dados',
  templateUrl: './pais-dados.component.html',
  styleUrls: ['./pais-dados.component.css'],
})
export class PaisDadosComponent implements OnInit {
  @Input() name: string = '';
  @Input() userData!: { nome: string; email: string; idade: number };
  constructor() {}

  ngOnInit() {}
}
