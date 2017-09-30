import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ChooseSidePage } from '../pages/choose-side/choose-side';
import { BrideProgramsPage } from '../pages/bride-programs/bride-programs';
import { BhartiKhimnaniPage } from '../pages/bharti-khimnani/bharti-khimnani';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = BhartiKhimnaniPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

