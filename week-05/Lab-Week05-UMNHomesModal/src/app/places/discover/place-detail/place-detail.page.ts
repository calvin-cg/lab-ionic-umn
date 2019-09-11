import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceModel} from "../../place.model";
import {PlacesService} from "../../places.service";
import {LoadingController, ModalController, NavController} from "@ionic/angular";
import {CreateBookingComponent} from "../../../bookings/create-booking/create-booking.component";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: PlaceModel;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private placesService: PlacesService,
      private navCtrl: NavController,
      private modalCtrl: ModalController,
      private loadingCtrl: LoadingController
  ) { }

  bookThisPlace() {
      this.loadingCtrl.create({
          keyboardClose: true,
          message: 'Booking the place ...'
      }).then(
          loadingEl => {
              loadingEl.present();
              setTimeout(() => {
                  loadingEl.dismiss();
                  this.bookingPlace();
              }, 2000);
          });
  }

  bookingPlace() {
      this.modalCtrl.create({
          component: CreateBookingComponent,
          componentProps: { selectedPlace: this.loadedPlace }
      }).then(
          modalElement => {
              modalElement.present();
              return modalElement.onDidDismiss();
          }
      ).then(
          resultData => {
              console.log(resultData.data, resultData.role);
              if (resultData.role === 'confirm') {
                  console.log('BOOKED');
              }
          }
      );
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
        paramMap => {
          if (!paramMap.has('placeId')) {
            return;
          }
          this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
        });
  }


}
