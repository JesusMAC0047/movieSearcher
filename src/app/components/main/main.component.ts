import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public placeholder: string;
  
  constructor() {
  
    this.placeholder = "Ejemplo: Batman";
  }

  ngOnInit(): void {
  }

}
