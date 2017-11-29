import { Component, OnInit } from "@angular/core";
import { FoodService } from "../../services/food.service";

@Component({
  selector: "app-page-food-list",
  templateUrl: "./page-food-list.component.html",
  styleUrls: ["./page-food-list.component.css"]
})
export class PageFoodListComponent implements OnInit {
  foodList: object[];
  loading = false;

  constructor(private foodService: FoodService) { }

  handleDelete(item) {
    this.foodService.delete(item.id, () => {
      const index = this.foodList.indexOf(item);
      this.foodList.splice(index, 1);
    });
  }
  ngOnInit() {
    this.foodList = this.foodService.getAllFood(() => {
      this.loading = true;
    });
  }
}
