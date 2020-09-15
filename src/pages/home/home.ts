import { Component } from '@angular/core';
import {EducationalConsultantServicesPage} from '../educational-consultant-services/educational-consultant-services';
import {TutoringServicesPage} from '../tutoring-services/tutoring-services';
import { NavController } from 'ionic-angular';
import {AboutUsPage} from '../about-us/about-us';
import {WhatSHappeningNowPage} from '../what-s-happening-now/what-s-happening-now';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/*
DIRECTION_NONE         1
DIRECTION_LEFT         2
DIRECTION_RIGHT        4
DIRECTION_UP           8
DIRECTION_DOWN         16
DIRECTION_HORIZONTAL   6
DIRECTION_VERTICAL     24
DIRECTION_ALL          30
*/
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToTutoring(){
    this.navCtrl.setRoot(TutoringServicesPage);
  }
  goToConsulting(){
    this.navCtrl.setRoot(EducationalConsultantServicesPage);
  }
  goHome(){
    
  }
  swipeEvent(e){
    if(e.direction == 2){
      this.navCtrl.setRoot(AboutUsPage);
  }
    else{
      this.navCtrl.setRoot(WhatSHappeningNowPage);
    }
  }
}

