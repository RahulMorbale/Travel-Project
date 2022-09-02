import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayPackageRoutingModule } from './holiday-package-routing.module';
import { HolidayPackageSearchComponent } from './holiday-package-search/holiday-package-search.component';
import { HolidayBookPackageComponent } from './holiday-book-package/holiday-book-package.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HolidayPackageSearchComponent,
    HolidayBookPackageComponent
  ],
  imports: [
    CommonModule,
    HolidayPackageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HolidayPackageModule { }
