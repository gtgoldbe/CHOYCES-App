import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {EducationalConsultantServicesPage} from '../educational-consultant-services/educational-consultant-services';
import {WhatSHappeningNowPage} from '../what-s-happening-now/what-s-happening-now';

/**
 * Generated class for the OurTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-our-team',
  templateUrl: 'our-team.html',
})
export class OurTeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OurTeamPage');
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  swipeEvent(e){
    if(e.direction == 2){
      this.navCtrl.setRoot(WhatSHappeningNowPage);
  }
    else{
      this.navCtrl.setRoot(EducationalConsultantServicesPage);
    }
  }

}
