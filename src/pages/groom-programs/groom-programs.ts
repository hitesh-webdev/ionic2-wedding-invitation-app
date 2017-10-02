import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-groom-programs',
  templateUrl: 'groom-programs.html',
})
export class GroomProgramsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMap(latitude, longitude, place) {
    window.open('geo://?q=' + latitude + ',' + longitude + '('+ place +')', '_system');
  }

}
