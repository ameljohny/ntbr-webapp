import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContentVoeComponent } from './about-content-voe.component';

describe('AboutContentVoeComponent', () => {
  let component: AboutContentVoeComponent;
  let fixture: ComponentFixture<AboutContentVoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContentVoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContentVoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
