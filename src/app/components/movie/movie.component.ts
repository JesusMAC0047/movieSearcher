import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

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

  constructor( private _route: ActivatedRoute,
               private _servicesService: ServiceService ) {
  
    this.movieName = this._route.snapshot.paramMap.get('name');
    
    this.movie = this.movieName.replace(/ /g, "+");
    
    this._servicesService.getMovie(this.movie).subscribe(
      result => {
        this.review = result;
        console.log(this.review);
      },
      error => {
        console.log( < any > error);
      }
    );
  }

  ngOnInit(): void {
  }

}
