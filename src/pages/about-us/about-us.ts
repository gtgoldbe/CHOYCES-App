import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TutoringServicesPage} from '../tutoring-services/tutoring-services';
/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }
  swipeEvent(e){
    if(e.direction == 2){
      this.navCtrl.setRoot(TutoringServicesPage);
  }
    else{
      this.navCtrl.setRoot(HomePage);
    }
  }

}
