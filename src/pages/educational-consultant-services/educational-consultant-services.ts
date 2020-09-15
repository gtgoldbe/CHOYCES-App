import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TutoringServicesPage} from '../tutoring-services/tutoring-services';
import {OurTeamPage} from '../our-team/our-team';

/**
 * Generated class for the EducationalConsultantServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-educational-consultant-services',
  templateUrl: 'educational-consultant-services.html',
})
export class EducationalConsultantServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationalConsultantServicesPage');
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  swipeEvent(e){
    if(e.direction == 2){
      this.navCtrl.setRoot(OurTeamPage);
  }
    else{
      this.navCtrl.setRoot(TutoringServicesPage);
    }
  }

}
