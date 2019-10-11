import { Component, OnInit } from '@angular/core';
import {BookingModel} from "./booking.model";
import {BookingsService} from "./bookings.service";
import {IonItemSliding} from "@ionic/angular";
import {PlaceModel} from "../places/place.model";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: BookingModel[];
  myBookings: PlaceModel[];

  constructor(private service: BookingsService) { }

  ngOnInit() {
    this.bookings = this.service.getBookingsData();
    this.myBookings = this.service.getMyBookings();
  }

  ionViewWillEnter() {
    this.myBookings = this.service.getMyBookings();
  }

  onCancelMyBooking(id: string) {
    this.service.removeFromMyBookings(id);
    this.myBookings = this.service.getMyBookings();
  }

  deleteBooking(id: string, sliding: IonItemSliding) {
    sliding.close();
    this.service.deleteBooking(id);
    this.bookings = this.service.getBookingsData();
  }

}
