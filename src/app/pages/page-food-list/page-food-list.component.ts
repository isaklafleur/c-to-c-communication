import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-food-list",
  templateUrl: "./page-food-list.component.html",
  styleUrls: ["./page-food-list.component.css"]
})
export class PageFoodListComponent implements OnInit {
  food = [
    { name: "apple pie", calories: 9999 },
    { name: "banana cake", calories: 19999 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
