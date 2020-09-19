import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {MyDevices} from './my-devices';
import {MYDEVICES} from './mock-my-devices';

@Injectable({
  providedIn: 'root'
})
export class MyDevicesService {

  constructor() { }

  getMyDevices():Observable<MyDevices[]>{
    return of(MYDEVICES);
  }
}
