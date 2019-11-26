import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import { environment } from 'src/environments/environment';
import {Capacitor, Plugins} from '@capacitor/core';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  lat = -6.25645952432459;
  lng = 106.61910856320742;
  @ViewChild('map', { static: false }) mapElementRef: ElementRef;

  constructor(private modalCtrl: ModalController, private renderer: Renderer2, private alertCtrl: AlertController) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getGoogleMaps().then((googleMaps) => {
      const mapElement = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapElement, {
        center: { lat: this.lat, lng: this.lng },
        zoom: 16,
      });
      googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapElement, 'visible');
      });

      this.getLocation().then(loc => {
        if (!loc) {
          const marker = new googleMaps.Marker({ position: { lat: this.lat, lng: this.lng }, map });
        } else {
          const marker = new googleMaps.Marker({ position: { lat: loc.latitude, lng: loc.longitude }, map });
          map.panTo( new googleMaps.LatLng( loc.latitude, loc.longitude ) );
        }
      });

      map.addListener('click', event => {
        const selectedCoords = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        this.modalCtrl.dismiss(selectedCoords);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  onChooseLocation(event: any) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(this.lat);
    console.log(this.lng);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed',
      message: 'Could not get user location.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async getLocation() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      this.presentAlert();
      return null;
    }
    const coordinates = await Plugins.Geolocation.getCurrentPosition();
    return coordinates.coords;
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.mapsAPIKey}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK is not available');
        }
      };
    });
  }



  onCancel() {
    this.modalCtrl.dismiss();
  }

}
