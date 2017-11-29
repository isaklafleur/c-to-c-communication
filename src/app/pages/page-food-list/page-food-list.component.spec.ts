import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFoodListComponent } from './page-food-list.component';

describe('PageFoodListComponent', () => {
  let component: PageFoodListComponent;
  let fixture: ComponentFixture<PageFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
