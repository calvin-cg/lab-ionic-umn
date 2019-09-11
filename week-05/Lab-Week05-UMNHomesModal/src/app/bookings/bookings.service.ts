import { Injectable } from '@angular/core';
import {BookingModel} from "./booking.model";

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: BookingModel[] = [
      new BookingModel(
          'b1',
          'p1',
          'u1',
          'Ruko Bolsena',
          2
      ),
      new BookingModel(
            'b2',
            'p2',
            'u1',
            'Scientia Residence',
            8
        )
  ]

  constructor() { }

  getBookingsData() {
    return [...this._bookings];
  }

  deleteBooking(id: string) {
    this._bookings = this._bookings.filter(_bookings => _bookings.id !== id);
  }
}
