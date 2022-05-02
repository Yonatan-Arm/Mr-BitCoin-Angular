import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { AuthService } from './services/auth-service.service';
import { SignupComponent } from './pages/signup/signup.component';
const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverService },
},

  {
    path: 'contact',
    component: BitcoinAppComponent,
    canActivate: [AuthService],
},
{ path: 'edit', component: ContactEditComponent},
{path: 'edit/:id',  component: ContactEditComponent, resolve: { contact: ContactResolverService },},
  {
    path: 'statistic',
    component: StatisticComponent,
},
  {
    path: 'signup',
    component: SignupComponent,
},


{
  path: '', component: HomePageComponent,children:[
    ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
