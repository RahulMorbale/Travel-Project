import { HolidayBookPackageComponent } from './holiday-book-package/holiday-book-package.component';
import { HolidayPackageSearchComponent } from './holiday-package-search/holiday-package-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from '../Guards/authenticate.guard';

const routes: Routes = [
  {
    path: '', component: HolidayPackageSearchComponent,
    children: [
      { path: 'vaccationBooking', component: HolidayBookPackageComponent, canActivate: [AuthenticateGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayPackageRoutingModule { }
