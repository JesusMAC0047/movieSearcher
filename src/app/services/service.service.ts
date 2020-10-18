import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string;

  constructor( public http: HttpClient ) { 
    this.url = "http://www.omdbapi.com/?apikey=2f1482ea&t=";
  }
  
  getRecommended(element): Observable<any>{
    return this.http.get(this.url+element);
  }

}
