import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTimeComponent } from './home-time.component';

describe('HomeTimeComponent', () => {
  let component: HomeTimeComponent;
  let fixture: ComponentFixture<HomeTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
