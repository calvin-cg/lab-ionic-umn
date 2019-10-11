import { Component, OnInit } from '@angular/core';
import {UKMModel} from "../ukm.model";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadMyUKM: UKMModel[] = [];

  constructor(
    private service: HomeService
  ) { }

  ngOnInit() {
    this.loadMyUKM = this.service.getMyUKM();
  }

  ionViewWillEnter() {
    this.loadMyUKM = this.service.getMyUKM();
  }

  onRemoveMyUKM(id: string) {
    this.service.removeMyUKM(id);
    this.loadMyUKM = this.service.getMyUKM();
  }

}
