import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') userName;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, protected alertCtrl: AlertController) {

  }

  login(){
    if(this.userName.value == "admin" && this.password.value == "admin"){
      
      this.navCtrl.setRoot(DashboardPage);
    }else{

    }
  }

}
