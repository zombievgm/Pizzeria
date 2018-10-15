import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage} from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage} from '../pages/contact/contact';
import { DishdetailPage} from '../pages/dishdetail/dishdetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DishProvider } from '../providers/dish/dish';
import { LeaderProvider } from '../providers/leader/leader';
import { PromotionProvider } from '../providers/promotion/promotion';
import { HttpClientModule } from '@angular/common/http';

import {dbURL} from '../shared/dburl';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AboutPage,
    DishdetailPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AboutPage,
    DishdetailPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    {provide: 'DbURL', useValue: dbURL}
  ]
})
export class AppModule {}
