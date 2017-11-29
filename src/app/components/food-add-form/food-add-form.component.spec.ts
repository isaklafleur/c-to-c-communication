import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddFormComponent } from './food-add-form.component';

describe('FoodAddFormComponent', () => {
  let component: FoodAddFormComponent;
  let fixture: ComponentFixture<FoodAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
