import { Injectable } from "@angular/core";

@Injectable()
export class FoodService {
  foodList = [
    { name: "apple pie", calories: 9999 },
    { name: "banana cake", calories: 19999 },
    { name: "banana cssdsdsake", calories: 193343999 },
  ];

  constructor() { }

  getAllFood(callback) {
    window.setTimeout(() => {
      callback();
    }, 2000);
    return this.foodList;
  }

  delete(id, callback) {
    window.setTimeout(() => {
      callback();
    }, 1000);
  }

}
