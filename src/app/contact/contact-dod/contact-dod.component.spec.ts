import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDodComponent } from './contact-dod.component';

describe('ContactDodComponent', () => {
  let component: ContactDodComponent;
  let fixture: ComponentFixture<ContactDodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
