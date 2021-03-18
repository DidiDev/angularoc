import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentLeftComponent } from './app-content-left.component';

describe('AppContentLeftComponent', () => {
  let component: AppContentLeftComponent;
  let fixture: ComponentFixture<AppContentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContentLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
