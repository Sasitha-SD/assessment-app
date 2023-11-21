import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent {
  data!: { item: any; category: any };
  paramsSubscription!: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = {
      item: this.route.snapshot.params['category'],
      category: this.route.snapshot.params['item']

    };
    this.paramsSubscription = this.route.params.subscribe(
      (params) => {
        this.data.item = params['category'];
        this.data.category = params['item'];

      }
    );
  }

}
