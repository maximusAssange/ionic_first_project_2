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

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider:MovieProvider) {
    this.getMovieNP();
  }

  getMovieNP(){
    this.movieProvider.getNowPlaying().subscribe(
      data => {
        this.movieNowPlaying = data['results'];

        this.movieNowPlaying.forEach((data, index) => {
          this.movieNowPlaying[index].poster_path = 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg';
        });
      }
    );
  }

  

}
