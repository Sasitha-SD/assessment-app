import {Component, NgIterable} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {MealDbApiService} from "../../core/services/meal-db-api.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  data!: { item: any; category: any };
  paramsSubscription!: Subscription;
  getMeal: any = [];
  categories: any = [];
  beefItems: any = [];
  seafoodItems: any = [];
  dessertItems: any = [];

  constructor(private router: Router, private route: ActivatedRoute, private mealDbService: MealDbApiService,
              private ngxService: NgxUiLoaderService) {
  }

  async ngOnInit(): Promise<any> {
    this.data = {
      category: this.route.snapshot.params['category'],
      item: this.route.snapshot.params['item']
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params) => {
        this.data.item = params['item'];
        this.data.category = params['category'];
      }
    );

    this.getMeal = await this.mealDbService.getMealByName(this.data.item);
    this.categories = await this.mealDbService.getCategories();
    this.beefItems = await this.mealDbService.getItemByCategories('Beef');
    this.seafoodItems = await this.mealDbService.getItemByCategories('Seafood');
    this.dessertItems = await this.mealDbService.getItemByCategories('Dessert');
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

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
