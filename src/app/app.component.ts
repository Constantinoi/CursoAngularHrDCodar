import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'nomeCompartilhado';

  userData = {
    nome: 'Consta',
    email: 'teste@TestBed.com',
    idade: 123,
  };

  title = 'curso-angular';
}
