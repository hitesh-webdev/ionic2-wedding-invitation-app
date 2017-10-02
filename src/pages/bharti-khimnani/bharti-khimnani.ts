import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrideProgramsPage } from '../bride-programs/bride-programs';
import { SendWishesPage } from '../send-wishes/send-wishes';
import { BlessingWallPage } from '../blessing-wall/blessing-wall';

@Component({
  selector: 'page-bharti-khimnani',
  templateUrl: 'bharti-khimnani.html',
})
export class BhartiKhimnaniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  brideProgramsNav() {
    this.navCtrl.push(BrideProgramsPage);
  }

  sendWishesNav() {
    this.navCtrl.push(SendWishesPage);
  }

  blessingWallNav() {
    this.navCtrl.push(BlessingWallPage);
  }

}
