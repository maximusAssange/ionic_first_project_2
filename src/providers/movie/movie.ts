import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Movies } from '../../models/movie.model';
import { map } from 'rxjs/operators';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  films: Observable<any>;
  baseUrl: String;
  apiKey: string;
  query: string; 
  
  public movieList:Movies[] = [];

  constructor(public http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.apiKey = '7cbb5e10c593e2e8e635cf8b0b446bb6';
  }

  getNowPlaying(){

    this.query = '/movie/now_playing';
    return this.http.get<Movies[]>(this.baseUrl + this.query + '?api_key=' + this.apiKey);
    
  }



}
