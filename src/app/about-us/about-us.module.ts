import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutUsPage } from './about-us.page';

import { AboutUsPageRoutingModule } from './about-us-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
