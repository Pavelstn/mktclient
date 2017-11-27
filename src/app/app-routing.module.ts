import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SecurityService } from './services/security.service';
// import { SessionResolver } from './resolvers/security.resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
