import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TutoringSignUpPage} from '../tutoring-sign-up/tutoring-sign-up';
import {HomePage} from '../home/home';
import {AboutUsPage} from '../about-us/about-us';
import {EducationalConsultantServicesPage} from '../educational-consultant-services/educational-consultant-services';

/**
 * Generated class for the TutoringServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutoring-services',
  templateUrl: 'tutoring-services.html',
})
export class TutoringServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutoringServicesPage');
  }

  goToSignUp(){
    this.navCtrl.setRoot(TutoringSignUpPage);
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  swipeEvent(e){
    if(e.direction == 2){
      this.navCtrl.setRoot(EducationalConsultantServicesPage);
  }
    else{
      this.navCtrl.setRoot(AboutUsPage);
    }
  }

}
