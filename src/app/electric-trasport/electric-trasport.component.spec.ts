import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricTrasportComponent } from './electric-trasport.component';

describe('ElectricTrasportComponent', () => {
  let component: ElectricTrasportComponent;
  let fixture: ComponentFixture<ElectricTrasportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricTrasportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricTrasportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
