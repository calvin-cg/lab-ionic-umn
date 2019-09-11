import {Component, Input, OnInit} from '@angular/core';
import {PlaceModel} from "../../places/place.model";
import {ActionSheetController, ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: PlaceModel;

  constructor(
      private modalCtrl: ModalController,
      private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async onBookPlace() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [{
        text: 'Book w/ Random Date',
        handler: () => {
          this.modalCtrl.dismiss({message: 'This is a dummy message'}, 'confirm');
          // this.modalCtrl.create({
          //   component: CreateBookingComponent, componentProps: {selectedPlace: this.selectedPlace}
          // }).then(
          //     modalElement => {
          //       console.log('PRESENT MODAL');
          //       modalElement.present();
          //       return modalElement.onDidDismiss();
          //     }).then(
          //     resultData => {
          //       console.log('RESULT DATA');
          //       console.log(resultData);
          //     });
        }
      }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
    // this.modalCtrl.dismiss({message: 'This is a dummy message'}, 'confirm');
  }

}
