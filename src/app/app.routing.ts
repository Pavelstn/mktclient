import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MainComponent} from './main/main.component';
import {DealViewComponent} from './dealview/deal-view.component';
import {CategoryViewComponent} from './categoryview/category-view.component';
import {CartViewComponent} from './cart/cart-view.component';
import {OrderComponent} from './order/order.component';



const appRoutes: Routes = [
    /*{ path: '', component: HomeComponent },*/
    { path: '', component: MainComponent },
    { path: 'cart', component: CartViewComponent },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderComponent },
    { path: 'view/:id', component: DealViewComponent },
    { path: 'category/:id', component: CategoryViewComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
