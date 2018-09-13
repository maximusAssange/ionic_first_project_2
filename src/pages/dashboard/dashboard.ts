import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions, Modal } from 'ionic-angular';
import { VotePage } from '../vote/vote';
import { trigger, style, animate, transition } from '@angular/animations';
import { MoviesHomePage } from '../movies-home/movies-home';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-50%)', opacity: 0}),
          animate('250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('250ms', style({transform: 'translateY(-50%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public name:String = "JACKY";
  public position:String = "ionic programmer";
  public period:String = "2017/2018";
  public detailUser:Boolean = false;
  public arrow_class:String = "arrow-down";
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  
  }

  setPanelDetail(){
    // if(this.detailUser == true){
    //   this.detailUser = false;
    //   this.arrow_class = "arrow-down";
    // }else{
    //   this.detailUser = true;
    //   this.arrow_class = "arrow-up";
    // }
    const myModalOptions:ModalOptions = {
      enableBackdropDismiss:false
    }

    const myModal:Modal = this.modal.create('ModalPage', myModalOptions);

    myModal.present();

  }

  goto(id:Number){
    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    if(id==1){
      this.navCtrl.push(VotePage, animationsOptions);
    }else if(id==2){

    }else if(id==3){
      this.navCtrl.push(MoviesHomePage, animationsOptions);
    }
  }


}
