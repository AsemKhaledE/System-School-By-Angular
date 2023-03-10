import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCoursesByIdComponent } from './get-courses-by-id.component';

describe('GetCoursesByIdComponent', () => {
  let component: GetCoursesByIdComponent;
  let fixture: ComponentFixture<GetCoursesByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCoursesByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCoursesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
