import { LayoutComponent } from './core/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', component: LayoutComponent,
  //   children: [
  //     { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  //     { path: 'cabs', loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule) },
  //     { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) }]
  // }

  // { path: '', component: LayoutComponent },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'cabs',
    loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule)
  },
  {
    path: 'package',
    loadChildren: () => import('./holiday-package/holiday-package.module').then(m => m.HolidayPackageModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
