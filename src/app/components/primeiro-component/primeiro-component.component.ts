import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css'],
})
export class PrimeiroComponentComponent implements OnInit {
  nome: string = 'Consta';
  idade: number = 20;
  trabalho = 'Dev';
  hobbies = ['Jogar', 'Ler'];
  carro = {
    nome: 'gol',
    ano: 2003,
  };
  constructor() {}

  ngOnInit(): void {}
}
