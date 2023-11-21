import {Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Router} from "@angular/router";
import {flush} from "@angular/core/testing";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  array = [1, 2, 3, 4];
  effect = 'scrollx';

  constructor(private router: Router) {
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

}
