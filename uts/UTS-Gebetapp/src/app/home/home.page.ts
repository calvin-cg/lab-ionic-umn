import {Component, OnInit} from '@angular/core';
import {GebetanModel} from "./gebetan.model";
import {GebetanService} from "./gebetan.service";
import {TargetService} from "../target-gebetan/target.service";
import {IonItemSliding, LoadingController, ToastController} from "@ionic/angular";
import {Route} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  loadedGebetan: GebetanModel[];
  isloading: boolean;

  constructor(
    private gebetanService: GebetanService,
    private targetGebetanService: TargetService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.loadedGebetan = this.gebetanService.getAllGebetan();
  }

  public addToTargetGebetan(gebetan: GebetanModel, itemSliding: IonItemSliding) {
    const targetGebetan = this.targetGebetanService.getAllTargetGebetan();

    this.isloading = true;
    this.loadingCtrl.create({ keyboardClose: true})
      .then(loadingElement => {
        loadingElement.present();
        setTimeout(() => {
          this.isloading = false;
          loadingElement.dismiss();
          if (targetGebetan.findIndex(x => x.id === gebetan.id) > -1) {
            this.presentToast( gebetan.name + ' sudah menjadi target kamu');
          } else {
            this.targetGebetanService.addToTargetGebetan(gebetan);
            itemSliding.close();
            this.presentToast('Berhasil tambah target');
          }
        }, 1500);
      });
  }

  async presentToast(m: string) {
    const toast = await this.toastCtrl.create({
      message: m,
      duration: 2000
    });
    await toast.present();
  }

}
