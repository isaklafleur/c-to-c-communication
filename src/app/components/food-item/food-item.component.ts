import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-food-item",
  templateUrl: "./food-item.component.html",
  styleUrls: ["./food-item.component.css"]
})
export class FoodItemComponent implements OnInit {
  @Input() foodItem: object;
  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit();
  }

}
