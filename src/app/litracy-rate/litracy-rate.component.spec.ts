import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitracyRateComponent } from './litracy-rate.component';

describe('LitracyRateComponent', () => {
  let component: LitracyRateComponent;
  let fixture: ComponentFixture<LitracyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitracyRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitracyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
