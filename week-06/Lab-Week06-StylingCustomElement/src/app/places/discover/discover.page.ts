import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {PlaceModel} from "../place.model";
import {PlacesService} from "../places.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: PlaceModel[];
  listedLoadedPlaces: PlaceModel[];

  constructor(
      private menuCtrl: MenuController,
      private placesServices: PlacesService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesServices.getPlaces();
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onOpenMenu() {
    this.menuCtrl.toggle('m1');
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

}
