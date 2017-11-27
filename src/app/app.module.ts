import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './modules/home/home.module';
import {LandingModule} from './modules/landing/landing.module';
import {CartModule} from './modules/cart/cart.module';


// import { MyLocalStorageService} from './services/my-local-storage.service';
import {LoadDataService} from './services/load-data.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ConfigService} from './services/config.service';
import {CartService} from './services/cart.service';
import {OrderService} from './services/order.service';
import {SplashScreenService} from './services/splash-screen.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,

    HomeModule,
    LandingModule,
    CartModule,
  ],
  providers: [LoadDataService, ConfigService, CartService, OrderService, SplashScreenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
