import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitationComponent } from './sanitation.component';

describe('SanitationComponent', () => {
  let component: SanitationComponent;
  let fixture: ComponentFixture<SanitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
