import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {InformationComponent} from './components/information/information.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {CarouselModule} from "ngx-owl-carousel-o";
import { MenuLayoutComponent } from './layout/menu-layout/menu-layout.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

registerLocaleData(en);
const ngxUiConfig: NgxUiLoaderConfig = {
  bgsColor: '#2bd78c',
  bgsOpacity: 1,
  bgsPosition: 'bottom-right',
  bgsSize: 80,
  bgsType: 'three-bounce',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#2bd78c',
  fgsPosition: 'center-center',
  fgsSize: 80,
  fgsType: 'three-bounce',
  gap: 38,
  logoPosition: 'center-center',
  logoSize: 130,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(0,0,0,0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: false,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomepageComponent,
    InformationComponent,
    MenuLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NzCarouselModule,
    CarouselModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NgxUiLoaderModule.forRoot(ngxUiConfig)
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
