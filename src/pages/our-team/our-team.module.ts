import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurTeamPage } from './our-team';

@NgModule({
  declarations: [
    OurTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(OurTeamPage),
  ],
})
export class OurTeamPageModule {}
