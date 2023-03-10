import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraeteTrainerComponent } from './craete-trainer.component';

describe('CraeteTrainerComponent', () => {
  let component: CraeteTrainerComponent;
  let fixture: ComponentFixture<CraeteTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraeteTrainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraeteTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
