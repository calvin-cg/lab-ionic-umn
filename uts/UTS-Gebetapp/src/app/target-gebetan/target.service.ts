import { Injectable } from '@angular/core';
import {GebetanModel} from "../home/gebetan.model";

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  private targetGebetan: GebetanModel[] = [];

  constructor() { }

  public getAllTargetGebetan() {
    return [...this.targetGebetan];
  }

  public addToTargetGebetan(gebetan: GebetanModel) {
    this.targetGebetan.push(gebetan);
  }

  public removeFromTargetGebetan(id: string) {
    this.targetGebetan = this.targetGebetan.filter(targetGebetan => {
      return targetGebetan.id !== id;
    });
  }
}
