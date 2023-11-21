import {Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  array = [1, 2, 3, 4];
  effect = 'scrollx';


  customOptions: OwlOptions = {
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 800,
    center: true,
    rewind:false,
    autoplayHoverPause:false,
    slideTransition: 'linear',
    animateIn: 'linear',
    animateOut: 'linear',
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

}
