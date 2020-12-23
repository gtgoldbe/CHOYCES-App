import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutUsPage } from '../pages/about-us/about-us';
import {TutoringServicesPage} from '../pages/tutoring-services/tutoring-services';
import {EducationalConsultantServicesPage} from '../pages/educational-consultant-services/educational-consultant-services';
import {WhatSHappeningNowPage} from '../pages/what-s-happening-now/what-s-happening-now';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutUsPage,
    TutoringServicesPage,
    EducationalConsultantServicesPage,
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
    AboutUsPage,
    TutoringServicesPage,
    EducationalConsultantServicesPage,
    WhatSHappeningNowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
