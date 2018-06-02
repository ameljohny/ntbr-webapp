import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWtcComponent } from './contact-wtc.component';

describe('ContactWtcComponent', () => {
  let component: ContactWtcComponent;
  let fixture: ComponentFixture<ContactWtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
