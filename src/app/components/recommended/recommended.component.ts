import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { title } from 'process';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
  providers: [ServiceService]
})

export class RecommendedComponent implements OnInit {

  public arrayLength: number;
  public recommended: string[];
  public movies: any[];
  
  constructor(
    private _config:NgbCarouselConfig,
    private _servicesService: ServiceService
  ) {
    
    this.movies = new Array();
    this.recommended = ["spider-man", 
                        "Mulan", 
                        "Toy+Story", 
                        "Titanic", 
                        "The+Fast+and+the+Furious"];
  
    _config.interval = 3000;
    _config.pauseOnHover = true;
  }

  ngOnInit(): void {

    this.arrayLength = this.recommended.length;

    for (let i = 0; i < this.arrayLength; i++) {

      let element = this.recommended[i];

      this._servicesService.getRecommended(element).subscribe(
        result => {
          this.movies.push(result.Poster, result.Title, result.Plot);
        },
        error => {
          console.log( < any > error);
        }
      );
    }
  }
}
