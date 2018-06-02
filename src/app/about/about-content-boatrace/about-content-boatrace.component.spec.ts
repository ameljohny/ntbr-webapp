import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContentBoatraceComponent } from './about-content-boatrace.component';

describe('AboutContentBoatraceComponent', () => {
  let component: AboutContentBoatraceComponent;
  let fixture: ComponentFixture<AboutContentBoatraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContentBoatraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContentBoatraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
