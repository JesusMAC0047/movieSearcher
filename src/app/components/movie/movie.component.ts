import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [ServiceService]
})
export class MovieComponent implements OnInit {

  public movieName: string;
  public movie: string;
  public review: any;
  public alertMessage: any;
  public movieMessage: any;

  constructor(private _route: ActivatedRoute,
    private _servicesService: ServiceService,
    private configAlert: NgbAlertConfig) {
    
    configAlert.type = "danger";
    configAlert.dismissible = true;

    this.alertMessage = {
      type: 'LO SENTIMOS',
      message: 'No se encontro la pelicula que busca, verifique que escribio correctamente el titulo en ingles.'
    };
    
    this.movieMessage = {
      date: 'Datos generales',
      actors: 'Actores: ',
      genre: 'Genero: ',
      plot: 'Trama'
    };

    this.movieName = this._route.snapshot.paramMap.get('name');

    this.movieReview(this.movieName);
  }

  ngOnInit(): void {}

  movieReview(movieName) {

    this.movie = this.movieName.replace(/ /g, "+");

    this._servicesService.getMovie(this.movie).subscribe(
      result => {
        this.review = result;

        if (this.review.Response == "False") {

          document.getElementById('alerta').style.display = "block";

        } else {

          document.getElementById('alerta').style.display = "none";
          console.log(this.review);
          return this.review;
        }
      },
      error => {
        console.log( < any > error);
      }
    );
  }

  close(alerta) {
    document.getElementById(alerta).style.display = "none";
  }
}
