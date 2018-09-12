import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesHomePage } from './movies-home';

@NgModule({
  declarations: [
    MoviesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesHomePage),
  ],
})
export class MoviesHomePageModule {}
