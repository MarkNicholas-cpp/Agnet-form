import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSupportComponent } from './medical-support.component';

describe('MedicalSupportComponent', () => {
  let component: MedicalSupportComponent;
  let fixture: ComponentFixture<MedicalSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
