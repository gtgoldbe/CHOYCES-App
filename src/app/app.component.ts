import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutUsPage } from '../pages/about-us/about-us';
import {TutoringServicesPage} from '../pages/tutoring-services/tutoring-services';
import {EducationalConsultantServicesPage} from '../pages/educational-consultant-services/educational-consultant-services';
import {TutoringSignUpPage} from '../pages/tutoring-sign-up/tutoring-sign-up';
import {OurTeamPage} from '../pages/our-team/our-team';
import {WhatSHappeningNowPage} from '../pages/what-s-happening-now/what-s-happening-now';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My First List', component: ListPage },
      { title: 'About Us', component: AboutUsPage},
      { title: 'Tutoring Services', component: TutoringServicesPage},
      { title: 'Educational Consultant Services', component: EducationalConsultantServicesPage},
      { title: 'Tutoring Sign Up', component: TutoringSignUpPage},
      { title: 'Our Team', component: OurTeamPage},
      { title: 'What\'s Happening Now', component: WhatSHappeningNowPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
