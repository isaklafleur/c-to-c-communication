import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Services
import { FoodService } from "./services/food.service";

// Components
import { AppComponent } from "./app.component";
import { FoodAddFormComponent } from "./components/food-add-form/food-add-form.component";
import { FoodItemComponent } from "./components/food-item/food-item.component";
import { FoodListComponent } from "./components/food-list/food-list.component";
import { PageFoodListComponent } from "./pages/page-food-list/page-food-list.component";



@NgModule({
  declarations: [
    AppComponent,
    FoodAddFormComponent,
    FoodItemComponent,
    FoodListComponent,
    PageFoodListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
