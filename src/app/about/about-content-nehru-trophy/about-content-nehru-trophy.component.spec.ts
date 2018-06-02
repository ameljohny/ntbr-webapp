import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContentNehruTrophyComponent } from './about-content-nehru-trophy.component';

describe('AboutContentNehruTrophyComponent', () => {
  let component: AboutContentNehruTrophyComponent;
  let fixture: ComponentFixture<AboutContentNehruTrophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutContentNehruTrophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContentNehruTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
