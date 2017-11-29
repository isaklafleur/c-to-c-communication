import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-food-list",
  templateUrl: "./page-food-list.component.html",
  styleUrls: ["./page-food-list.component.css"]
})
export class PageFoodListComponent implements OnInit {
  foodList = [
    { name: "apple pie", calories: 9999 },
    { name: "banana cake", calories: 19999 },
    { name: "banana cssdsdsake", calories: 193343999 },
  ];

  constructor() { }

  ngOnInit() {
  }
  handleDelete(item) {
    const index = this.foodList.indexOf(item);
    this.foodList.splice(index, 1);
  }

}
