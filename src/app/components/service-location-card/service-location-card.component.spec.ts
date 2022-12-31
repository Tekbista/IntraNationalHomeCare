import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocationCardComponent } from './service-location-card.component';

describe('ServiceLocationCardComponent', () => {
  let component: ServiceLocationCardComponent;
  let fixture: ComponentFixture<ServiceLocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLocationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
