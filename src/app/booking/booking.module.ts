import { FlightbookedHistoryComponent } from './flightbooked-history/flightbooked-history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { FlightBookingComponent } from './flightbooking/flightbooking.component';


@NgModule({
  declarations: [
    FlightBookingComponent,
    FlightbookedHistoryComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
