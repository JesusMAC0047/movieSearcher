import { Component, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  public placeholder: string;
  public inputSearch: string = "";
  public alertMessage: any;
  
  constructor( private configAlert:NgbAlertConfig,
               private router:Router ) {
  
    configAlert.type = "warning";
    configAlert.dismissible = true;
  
    this.placeholder = "Ejemplo: Batman";
    this.alertMessage = {type: 'ATENCIÓN',
                        message: 'Ingrese el nombre de alguna película en ingles'};
  }

  ngOnInit(): void {
  }

  onSearch(formSearch){
  
    let search = formSearch.value.inputSearch;
    
    if (search == "") {
      document.getElementById('alerta').style.display = "block";
    } else {
      document.getElementById('alerta').style.display = "none";
      this.router.navigate(['movie/' + this.inputSearch]);
    }
  }

  close(alerta){
    document.getElementById(alerta).style.display="none";
  }
}
