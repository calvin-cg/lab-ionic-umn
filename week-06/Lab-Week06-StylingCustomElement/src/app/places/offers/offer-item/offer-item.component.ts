import {Component, Input, OnInit} from '@angular/core';
import {PlaceModel} from "../../place.model";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() offer: PlaceModel;

  constructor() { }

  getDummyDate() {
    return new Date();
  }

  ngOnInit() {}

}
