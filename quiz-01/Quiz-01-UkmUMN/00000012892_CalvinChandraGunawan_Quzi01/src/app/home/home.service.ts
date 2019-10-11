import { Injectable } from '@angular/core';
import {UKMModel} from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private ukmData: UKMModel[] = [
      new UKMModel(
          'u1',
          'Basket',
          'Olahraga mantul-mantulin bola'
      ),
      new UKMModel(
          'u2',
          'Drama',
          'Kegiatan yang membuat Anda menjadi orang lain'
      ),
      new UKMModel(
          'u3',
          'Volly',
          'Olahraga menampar bola'
      ),
      new UKMModel(
          'u4',
          'Futsal',
          'Olahraga menendang bola'
      ),
      new UKMModel(
          'u5',
          'UMN TV',
          'Ini bukan UKM'
      )
  ];

  private myUKM: UKMModel[] = [];

  constructor() { }

  getAllUKM() {
    return [...this.ukmData];
  }

  addToMyUKM(getUKM: UKMModel) {
    this.myUKM.push(getUKM);
    console.log(this.myUKM);
  }

  removeMyUKM(id: string) {
    this.myUKM = this.myUKM.filter(myukm => {
      return myukm.id !== id;
    });
  }

  getMyUKM() {
    return [...this.myUKM];
  }

}
