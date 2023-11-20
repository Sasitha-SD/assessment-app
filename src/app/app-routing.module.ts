import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {HomepageComponent} from "./components/homepage/homepage.component";

const routes: Routes = [{

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

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
