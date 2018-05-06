import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipMainComponent } from './mentorship-main.component';

describe('MentorshipMainComponent', () => {
  let component: MentorshipMainComponent;
  let fixture: ComponentFixture<MentorshipMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorshipMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorshipMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
