import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurCaregiverComponent } from './meet-our-caregiver.component';

describe('MeetOurCaregiverComponent', () => {
  let component: MeetOurCaregiverComponent;
  let fixture: ComponentFixture<MeetOurCaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetOurCaregiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
