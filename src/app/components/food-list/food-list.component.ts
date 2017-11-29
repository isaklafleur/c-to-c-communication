import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  @Input() foods: object[];
  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onDelete(item) {
    this.delete.emit(item);
  }

}
