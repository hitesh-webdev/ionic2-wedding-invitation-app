import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SendWishesPage } from '../send-wishes/send-wishes';

@Component({
  selector: 'page-blessing-wall',
  templateUrl: 'blessing-wall.html',
})
export class BlessingWallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  writeBlessingNav() {
    this.navCtrl.push(SendWishesPage, {option: 2});
  }

}
