import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavContactComponent } from './vertical-nav-contact.component';

describe('VerticalNavContactComponent', () => {
  let component: VerticalNavContactComponent;
  let fixture: ComponentFixture<VerticalNavContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalNavContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
