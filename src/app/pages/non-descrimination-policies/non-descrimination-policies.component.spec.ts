import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDescriminationPoliciesComponent } from './non-descrimination-policies.component';

describe('NonDescriminationPoliciesComponent', () => {
  let component: NonDescriminationPoliciesComponent;
  let fixture: ComponentFixture<NonDescriminationPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonDescriminationPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDescriminationPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
