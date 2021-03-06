import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-bride-programs',
  templateUrl: 'bride-programs.html',
})
export class BrideProgramsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMap(latitude, longitude, place) {
    window.open('geo://?q=' + latitude + ',' + longitude + '('+ place +')', '_system');
  }

}
