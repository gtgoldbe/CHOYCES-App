import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutUsPage } from '../pages/about-us/about-us';
import {TutoringServicesPage} from '../pages/tutoring-services/tutoring-services';
import {EducationalConsultantServicesPage} from '../pages/educational-consultant-services/educational-consultant-services';
import {TutoringSignUpPage} from '../pages/tutoring-sign-up/tutoring-sign-up';
import {OurTeamPage} from '../pages/our-team/our-team';
import {WhatSHappeningNowPage} from '../pages/what-s-happening-now/what-s-happening-now';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    AboutUsPage,
    TutoringServicesPage,
    EducationalConsultantServicesPage,
    TutoringSignUpPage,
    OurTeamPage,
    WhatSHappeningNowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    AboutUsPage,
    TutoringServicesPage,
    EducationalConsultantServicesPage,
    TutoringSignUpPage,
    OurTeamPage,
    WhatSHappeningNowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
