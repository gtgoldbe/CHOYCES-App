import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {OurTeamPage} from '../our-team/our-team';

/**
 * Generated class for the WhatSHappeningNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-what-s-happening-now',
  templateUrl: 'what-s-happening-now.html',
})
export class WhatSHappeningNowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhatSHappeningNowPage');
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  swipeEvent(e){
    if(e.direction == 2){
      this.navCtrl.setRoot(HomePage);
  }
    else{
      this.navCtrl.setRoot(OurTeamPage);
    }
  }

}
