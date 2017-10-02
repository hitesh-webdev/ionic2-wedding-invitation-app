import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-send-wishes',
  templateUrl: 'send-wishes.html',
})
export class SendWishesPage {

  option: number;
  wishForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private network: Network, private alertCtrl: AlertController, private http: Http, private toastCtrl: ToastController) {

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

    if(this.option === 2) {

      const name = this.wishForm.value.name;
      const message = this.wishForm.value.message;
      const timestamp = new Date().getTime();

      this.http.post('https://naresh-bharti-wedding-app.firebaseio.com/blessings.json', {name: name, message: message, time: timestamp}).subscribe((response) => {
        let toast = this.toastCtrl.create({
          message: 'Message Posted Successfully',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.navCtrl.pop();
      }, (err) => {
        const alert = this.alertCtrl.create({
          title: "Internet Connection",
          subTitle:"Please Check Your Network connection",
          buttons: [{
             text: 'Ok',
             handler: () => {
              this.navCtrl.pop();
             }
             }]
           });
        alert.present();
        console.log(err);
      });

      this.wishForm.reset();

    }
    else if(this.option === 1) {

      const name = this.wishForm.value.name;
      const message = this.wishForm.value.message + '%0A%0AFrom: ' + name + '%0A%0A%0ASent from Naresh weds Bharti App';

      //console.log(message);
      this.wishForm.reset();
      window.open('whatsapp://send?text=' + message + '&phone=+919887704122', '_system');

    }
    else {

      const name = this.wishForm.value.name;
      const message = this.wishForm.value.message + '%0A%0AFrom: ' + name + '%0A%0A%0ASent from Naresh weds Bharti App';

      //console.log(message);
      this.wishForm.reset();
      window.open('whatsapp://send?text=' + message + '&phone=+917792080060', '_system');

    }

  }

}
