import { Component, OnInit } from '@angular/core';
import {UKMModel} from "../ukm.model";
import {HomeService} from "../home.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-ukm',
  templateUrl: './ukm.page.html',
  styleUrls: ['./ukm.page.scss'],
})
export class UkmPage implements OnInit {
  loadUKM: UKMModel[];

  constructor(
    private service: HomeService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadUKM = this.service.getAllUKM();
  }

  async joinUKMAlert(ukm: UKMModel) {
    const alert = await this.alertController.create({
      header: 'Join UKM',
      message: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Serius',
          handler: () => this.joinUKM(ukm),
        }
      ]
    });
    await alert.present();
  }

  joinUKM(ukm: UKMModel) {
    this.service.addToMyUKM(ukm);
  }

}
