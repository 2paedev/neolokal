import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../common/components/spinner/spinner.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IUser } from '../common/models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Geolocation]
})
export class HomePage implements OnInit {

  currentUsersInLokal: IUser[];

  constructor(private spinnerService: SpinnerService, private geolocation: Geolocation) {}

  ngOnInit() {
    this.loadAllUsers();
    this.getCurrentLocation();
  }

  loadAllUsers() {
    this.currentUsersInLokal = [
      {
        id: 1,
        name: 'Pae',
        mail: 'pae@gmail.com',
        locatedInLokal: true
      },
      {
        id: 2,
        name: 'Sam',
        mail: 'sam@gmail.com',
        locatedInLokal: true
      },
      {
        id: 3,
        name: 'Warrior',
        mail: 'warrior@gmail.com',
        locatedInLokal: false
      }
    ];
  }

  getCurrentLocation() {
    this.spinnerService.activate();
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.spinnerService.deactivate();
     }).catch((error) => {
       console.log('Error getting location', error);
       this.spinnerService.deactivate();
     });
  }
}
