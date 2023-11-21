import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
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
  getMeal: any = {}

  constructor(private route: ActivatedRoute, private mealDbService: MealDbApiService,
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

    this.ngxService.start();
    this.getMeal = await this.mealDbService.getMealByName(this.data.category);
    console.log(this.getMeal);
    this.ngxService.stop();
  }


  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
