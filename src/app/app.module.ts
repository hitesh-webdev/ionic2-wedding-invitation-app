import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChooseSidePage } from '../pages/choose-side/choose-side';
import { BrideProgramsPage } from '../pages/bride-programs/bride-programs';
import { GroomProgramsPage } from '../pages/groom-programs/groom-programs';
import { BhartiKhimnaniPage } from '../pages/bharti-khimnani/bharti-khimnani';
import { NareshKeswaniPage } from '../pages/naresh-keswani/naresh-keswani';
import { SendWishesPage } from '../pages/send-wishes/send-wishes';
import { BlessingWallPage } from '../pages/blessing-wall/blessing-wall';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChooseSidePage,
    BrideProgramsPage,
    BhartiKhimnaniPage,
    SendWishesPage,
    BlessingWallPage,
    NareshKeswaniPage,
    GroomProgramsPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChooseSidePage,
    BrideProgramsPage,
    BhartiKhimnaniPage,
    SendWishesPage,
    BlessingWallPage,
    NareshKeswaniPage,
    GroomProgramsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
