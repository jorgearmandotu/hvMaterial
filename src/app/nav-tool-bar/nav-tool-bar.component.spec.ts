import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolBarComponent } from './nav-tool-bar.component';

describe('NavToolBarComponent', () => {
  let component: NavToolBarComponent;
  let fixture: ComponentFixture<NavToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
