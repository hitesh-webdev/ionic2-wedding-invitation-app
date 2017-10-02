import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-send-wishes',
  templateUrl: 'send-wishes.html',
})
export class SendWishesPage {

  option: number;
  wishForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private network: Network, private alertCtrl: AlertController) {

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

    this.option = +navParams.get('option');
    this.setupForm();
  }

  setupForm() {

    this.wishForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })

  }

  onSendWish() {
    const name = this.wishForm.value.name;
    const message = this.wishForm.value.message + '%0A%0AFrom: ' + name + '%0A%0A%0ASent from Naresh weds Bharti App';

    //console.log(message);
    this.wishForm.reset();
    window.open('whatsapp://send?text=' + message + '&phone=+917792080060', '_system');
  }

}
