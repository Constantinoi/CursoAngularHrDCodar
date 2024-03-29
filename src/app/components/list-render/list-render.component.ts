import { Animal } from './../../Animal';

import { Component, OnInit } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  animalDetails = '';
  constructor(private listService: ListService) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O animal ${animal.nome} tem ${animal.idade} anos.`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo Animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimal(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
