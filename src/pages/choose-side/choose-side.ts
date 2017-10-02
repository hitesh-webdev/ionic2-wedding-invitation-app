import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BhartiKhimnaniPage } from '../bharti-khimnani/bharti-khimnani';
import { NareshKeswaniPage } from '../naresh-keswani/naresh-keswani';

@Component({
  selector: 'page-choose-side',
  templateUrl: 'choose-side.html',
})
export class ChooseSidePage {

  constructor(public navCtrl: NavController) {
  }

  chooseBride() {
    this.navCtrl.push(BhartiKhimnaniPage);
  }

  chooseGroom() {
    this.navCtrl.push(BhartiKhimnaniPage);
  }

}
