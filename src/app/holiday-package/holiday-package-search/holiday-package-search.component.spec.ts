import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayPackageSearchComponent } from './holiday-package-search.component';

describe('HolidayPackageSearchComponent', () => {
  let component: HolidayPackageSearchComponent;
  let fixture: ComponentFixture<HolidayPackageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayPackageSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayPackageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
