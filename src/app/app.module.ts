import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './cmps/app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { BitcoinAppComponent } from './pages/bitcoin-app/bitcoin-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferCoinsComponent } from './cmps/transfer-coins/transfer-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    BitcoinAppComponent,
    ContactDetailsComponent,
    StatisticComponent,
    ContactEditComponent,
    ContactFilterComponent,
    SignupComponent,
    ChartComponent,
    MoveListComponent,
    TransferCoinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
