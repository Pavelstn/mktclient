import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MainComponent} from './main/main.component';
import {SmallCardComponent} from './smallcard/smallcard.component';
import {TopNavComponent} from './topnav/topnav.component';
import {DealViewComponent} from './dealview/deal-view.component';
import {CategoryViewComponent} from './categoryview/category-view.component';
import { CarouselModule } from 'ng2-bootstrap';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        MainComponent,
        SmallCardComponent,
        TopNavComponent,
        DealViewComponent,
        CategoryViewComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        CarouselModule.forRoot(),
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
