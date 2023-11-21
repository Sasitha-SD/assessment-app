import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {MenuLayoutComponent} from "./layout/menu-layout/menu-layout.component";
import {SecondPageComponent} from "./components/second-page/second-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {

        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {

        path: 'home',
        component: HomepageComponent
      }

    ]
  },
  {
    path: 'menu',
    component: MenuLayoutComponent,
    children: [
      {

        path: ':item/:category',
        component: SecondPageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
