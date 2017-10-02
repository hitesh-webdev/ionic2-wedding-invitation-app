import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseSidePage } from '../choose-side/choose-side';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  chooseSideNav() {
    this.navCtrl.push(ChooseSidePage);
  }

}
