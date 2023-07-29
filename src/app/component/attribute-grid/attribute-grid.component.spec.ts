import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeGridComponent } from './attribute-grid.component';

describe('AttributeGridComponent', () => {
  let component: AttributeGridComponent;
  let fixture: ComponentFixture<AttributeGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributeGridComponent]
    });
    fixture = TestBed.createComponent(AttributeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
