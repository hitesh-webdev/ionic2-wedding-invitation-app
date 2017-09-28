import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrideProgramsPage } from './bride-programs';

@NgModule({
  declarations: [
    BrideProgramsPage,
  ],
  imports: [
    IonicPageModule.forChild(BrideProgramsPage),
  ],
})
export class BrideProgramsPageModule {}
