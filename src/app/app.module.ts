import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxUiLoaderModule} from "ngx-ui-loader";
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomepageComponent,
    SecondPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgxUiLoaderModule,
        NzCarouselModule
    ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
