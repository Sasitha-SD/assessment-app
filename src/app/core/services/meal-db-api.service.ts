import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NzMessageService} from "ng-zorro-antd/message";
import {SETTINGS} from "../config/commons.settings";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealDbApiService {
  categories: any;
  getItem: any;
  getMeal:any;
  getRandMeal:any;

  constructor(private http: HttpClient, private message: NzMessageService) {
  }

  //Calling endpoints
  getCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${SETTINGS.BASE_API}/categories.php`).subscribe((response: any) => {
        this.categories = response.categories;
        resolve(this.categories);
      }, error => {
        reject(error);
        this.message.create('error', 'Unable to load');
      });
    });
  }

  getItemByCategories(payload: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${SETTINGS.BASE_API}/filter.php?c=${payload}`).subscribe((response: any) => {
        this.getItem = response.meals;
        resolve(this.getItem);
      }, error => {
        reject(error);
        this.message.create('error', 'Unable to load');
      });
    });
  }

  getMealByName(payload: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${SETTINGS.BASE_API}/search.php?s=${payload}`).subscribe((response: any) => {
        this. getMeal = response.meals[0];
        this.message.create('success', 'Meal Found');
        resolve(this. getMeal);
      }, error => {
        reject(error);
        this.message.create('error', 'Unable to load');
      });
    });
  }

  getRandomMeal(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${SETTINGS.BASE_API}/random.php`).subscribe((response: any) => {
        this.getRandMeal= response.meals[0];
        console.log(this.getRandMeal);
        resolve(this.getRandMeal);
      }, error => {
        reject(error);
        this.message.create('error', 'Unable to load');
      });
    });
  }

}
