import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { Movies } from '../../models/movie.model';

/**
 * Generated class for the MoviesHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies-home',
  templateUrl: 'movies-home.html',
})
export class MoviesHomePage {

  movieNowPlaying:Movies[] = [];
  moviePopular:Movies[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider:MovieProvider) {
    this.getMovieNP();
    this.getPopular();
  }

  getMovieNP(){
    this.movieProvider.getNowPlaying().subscribe(
      data => {
        this.movieNowPlaying = data['results'];

        this.movieNowPlaying.forEach((data, index) => {
          if(index %2 == 0)
            this.movieNowPlaying[index].poster_path = 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg';
          else
            this.movieNowPlaying[index].poster_path = 'https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg'; 
        });
      }
    );
  }

  getPopular(){
    this.movieProvider.getPopular().subscribe(
      data => {
        this.moviePopular = data['results'];

        this.moviePopular.forEach((data, index) => {
          if(index %2 == 0)
            this.moviePopular[index].poster_path = 'https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_.jpg';
          else
          this.moviePopular[index].poster_path = 'https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg';
        });
      }
    );
  }

  

}
