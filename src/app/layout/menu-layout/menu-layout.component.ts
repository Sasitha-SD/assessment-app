import {Component, NgIterable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MealDbApiService} from "../../core/services/meal-db-api.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.scss']
})
export class MenuLayoutComponent {
  categories: any = [];
  beefItems: any = [];
  seafoodItems: any = [];
  dessertItems: any = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private mealDbService: MealDbApiService, private ngxService: NgxUiLoaderService) {
  }

  async ngOnInit(): Promise<any> {
    this.ngxService.start();
    this.categories = await this.mealDbService.getCategories();
    this.beefItems = await this.mealDbService.getItemByCategories('Beef');
    this.seafoodItems = await this.mealDbService.getItemByCategories('Seafood');
    this.dessertItems = await this.mealDbService.getItemByCategories('Dessert');
    this.ngxService.stop();
  }

  //switch items
  switchItems(index: any): NgIterable<any> {
    switch (index) {
      case 0: {
        return this.beefItems.slice(0, 3);
      }
      case 1: {
        return this.seafoodItems.slice(0, 3);
      }
      default: {
        return this.dessertItems.slice(0, 3);
      }
    }
  }

  onClickItem(tempCategory: string, tempItem: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["menu", tempCategory, tempItem]);

  }
}
