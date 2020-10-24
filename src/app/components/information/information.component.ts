import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  public title: string;
  public information: string;

  constructor() {
  
    this.title = "Información";
    this.information = `
      Esta página fue creada con el fin de practicar peticiones ajax a partir de una
      API publica. 
      La API utilizada en este caso fue http://www.omdbapi.com/ la cual por sus características
      solo permite un máximo de mil (1000) peticiones y sus datos son unicamente en ingles por
      lo cual se pide que al buscar una película sea con su título original en ingles.
    `;
  }

  ngOnInit(): void {
  }

}
