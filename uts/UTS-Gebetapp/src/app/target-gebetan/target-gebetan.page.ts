import { Component, OnInit } from '@angular/core';
import {GebetanModel} from "../home/gebetan.model";
import {TargetService} from "./target.service";
import {log} from "util";
import {ActionSheetController, IonItemSliding, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-target-gebetan',
  templateUrl: './target-gebetan.page.html',
  styleUrls: ['./target-gebetan.page.scss'],
})
export class TargetGebetanPage implements OnInit {

  private loadedTargetGebetan: GebetanModel[];

  constructor(
    private targetGebetanService: TargetService,
    private actionSheetCtrl: ActionSheetController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getAllTargetGebetan();
  }

  ionViewWillEnter() {
    this.getAllTargetGebetan();
  }

  public removeTarget(id: string, itemSliding: IonItemSliding) {
    this.actionSheetCtrl.create({
      header: 'Yakin gak gebet dia lagi?',
      buttons: [
        {
          text: 'Yakin, hapus dari daftar',
          handler: () => {
            this.targetGebetanService.removeFromTargetGebetan(id);
            this.getAllTargetGebetan();
            itemSliding.close();
            this.presentToast('Target berhasil dihapus');
          },
        },
        {
          text: 'Gak yakin, kembali',
          handler: () => {
            itemSliding.close();
            this.getAllTargetGebetan();
          },
        }
      ]
    })
      .then(actionSheetElement => {
        actionSheetElement.present();
      });
  }

  private getAllTargetGebetan() {
    this.loadedTargetGebetan = this.targetGebetanService.getAllTargetGebetan();
  }

  async presentToast(m: string) {
    const toast = await this.toastCtrl.create({
      message: m,
      duration: 2000
    });
    await toast.present();
  }

}
