import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';



import { LocalStorage} from './services/local-storage.service';
import { LoadDataService} from './services/load-data.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ConfigService} from './services/config.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [LocalStorage, LoadDataService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
