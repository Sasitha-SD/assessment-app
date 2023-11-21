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
  categories: any = [];
  randomMeal: any = []

  constructor(private router: Router, private mealDbService: MealDbApiService,
              private ngxService: NgxUiLoaderService) {
  }

  async ngOnInit(): Promise<any> {
    this.ngxService.start(); //animation loader start
    this.categories = await this.mealDbService.getCategories();
    await this.getRandomMeal()
    this.ngxService.stop(); //animation loader stop
  }

  //carousel config
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
        items: 1,

      },
      740: {
        items: 3,

      },
      940: {
        items: 6,
      }
    },
    nav: false
  }

  //carousel config
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
        items: 1,

      },
      740: {
        items: 3,

      },
      940: {
        items: 6,
      }
    },
    nav: false
  }

  onClickImage() {
    this.router.navigate(["/menu"]);
  }

  //get a random Meal image amd push to array
  async getRandomMeal(): Promise<any> {
    for (let i = 0; i < 3; i++) {
      let meal = await this.mealDbService.getRandomMeal();
      this.randomMeal.push(meal.strMealThumb)
    }

  }

}
