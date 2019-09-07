import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlaceModel} from "../../place.model";
import {PlacesService} from "../../places.service";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: PlaceModel;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
        paramMap => {
          if (!paramMap.has('placeId')) {
            return;
          }
          this.loadedPlace = this.placesService.getPlace(paramMap.get('placeId'));
        })
  }


}
