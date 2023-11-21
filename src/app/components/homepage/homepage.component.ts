import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Router} from "@angular/router";
import {flush} from "@angular/core/testing";
import {MealDbApiService} from "../../core/services/meal-db-api.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  categories: any = {};
  randomMeal: any = []

  array = [1, 2, 3, 4];
  effect = 'scrollx';

  constructor(private router: Router, private mealDbService: MealDbApiService, private ngxService: NgxUiLoaderService) {
  }

  async ngOnInit(): Promise<any> {
    this.ngxService.start();
    this.categories = await this.mealDbService.getCategories();
    await this.getRandomMeal()
    console.log(this.categories);
    this.ngxService.stop();

  }

  carouselOptionsPrimary: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    center: true,
    dots: false,
    loop: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    smartSpeed: 3900,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,

      },
      400: {
        items: 2,

      },
      740: {
        items: 3,

      },
      940: {
        items: 4,
      }
    },
    nav: false
  }

  carouselOptionsSecondary: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    center: true,
    dots: false,
    loop: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    smartSpeed: 4400,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,

      },
      400: {
        items: 2,

      },
      740: {
        items: 3,

      },
      940: {
        items: 4,
      }
    },
    nav: false
  }

  onClickImage() {
    this.router.navigate(["/menu"]);
  }

  //gets a randomMeal image
  async getRandomMeal(): Promise<any> {
    for (let i = 0; i < 3; i++) {
      let meal = await this.mealDbService.getRandomMeal();
      this.randomMeal.push(meal.strMealThumb)
      console.log(this.randomMeal);
    }

  }

}
