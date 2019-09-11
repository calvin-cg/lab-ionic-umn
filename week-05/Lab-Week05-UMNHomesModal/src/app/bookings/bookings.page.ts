import { Component, OnInit } from '@angular/core';
import {BookingModel} from "./booking.model";
import {BookingsService} from "./bookings.service";
import {IonItemSliding} from "@ionic/angular";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: BookingModel[];

  constructor(private service: BookingsService) { }

  ngOnInit() {
    this.bookings = this.service.getBookingsData();
  }

  deleteBooking(id: string, sliding: IonItemSliding) {
    sliding.close();
    this.service.deleteBooking(id);
    this.bookings = this.service.getBookingsData();
  }

}
