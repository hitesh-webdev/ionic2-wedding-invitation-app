import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroomProgramsPage } from '../groom-programs/groom-programs';
import { SendWishesPage } from '../send-wishes/send-wishes';
import { BlessingWallPage } from '../blessing-wall/blessing-wall';

@Component({
  selector: 'page-naresh-keswani',
  templateUrl: 'naresh-keswani.html',
})
export class NareshKeswaniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  groomProgramsNav() {
    this.navCtrl.push(GroomProgramsPage);
  }

  sendWishesNav() {
    this.navCtrl.push(SendWishesPage, {option: 1});
  }

  blessingWallNav() {
    this.navCtrl.push(BlessingWallPage);
  }

}
