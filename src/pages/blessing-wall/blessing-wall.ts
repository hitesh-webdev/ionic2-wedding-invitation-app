import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SendWishesPage } from '../send-wishes/send-wishes';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-blessing-wall',
  templateUrl: 'blessing-wall.html',
})
export class BlessingWallPage {

  blessings: any[] = [];
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private loadingCtrl: LoadingController, private network: Network, private alertCtrl: AlertController) {

    if(this.network.type == 'none') {
      const alert = this.alertCtrl.create({
        title: "Internet Connection",
        subTitle:"Please Check Your Network connection",
        buttons: [{
           text: 'Ok'
           }]
         });
      alert.present();
      this.navCtrl.pop();
    }

  }

  ionViewWillEnter() {

    this.loader = this.loadingCtrl.create({
      content: 'Loading Messages'
    });

    this.loader.present();

    this.http.get('https://naresh-bharti-wedding-app.firebaseio.com/blessings.json').subscribe((response) => {

      //console.log(response.json());
      const obj = response.json();
      
      this.blessings = [];

      for(let key in obj){
        this.blessings.push(obj[key]);
      }

      this.loader.dismiss();
 
    }, (err) => {
      console.log(err);
    });
  }

  writeBlessingNav() {
    this.navCtrl.push(SendWishesPage, {option: 2});
  }

  ionViewWillLeave() {
    this.loader.dismiss();
  }

}
