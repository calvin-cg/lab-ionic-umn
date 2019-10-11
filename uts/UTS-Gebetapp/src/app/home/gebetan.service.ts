import { Injectable } from '@angular/core';
import {GebetanModel} from "./gebetan.model";

@Injectable({
  providedIn: 'root'
})
export class GebetanService {

  private gebetan: GebetanModel[] = [
    new GebetanModel(
      '0',
      'https://picsum.photos/seed/' + this.getSeed() + '/200',
      'Shinta Kusuma Devi',
      'Perempuan',
      'Aku suka cowo macho'
    ),
    new GebetanModel(
      '1',
      'https://picsum.photos/seed/' + this.getSeed() + '/200',
      'Tony Hehe',
      'Laki-laki',
      'Aku cowo humoris'
    ),
    new GebetanModel(
      '2',
      'https://picsum.photos/seed/' + this.getSeed() + '/200',
      'Bella Humorisa',
      'Perempuan',
      'Aku suka ketawa'
    ),
    new GebetanModel(
      '3',
      'https://picsum.photos/seed/' + this.getSeed() + '/200',
      'Joko Pintar',
      'Laki-laki',
      'Aku cowo jenius'
    ),
    new GebetanModel(
      '4',
      'https://picsum.photos/seed/' + this.getSeed() + '/200',
      'John Thor',
      'Laki-laki',
      'Aku tinggal di Asgard'
    )
  ];

  constructor() { }

  private getSeed() {
    return Math.floor(Math.random() * 1000);
  }

  public getAllGebetan() {
    return [...this.gebetan];
  }
}
