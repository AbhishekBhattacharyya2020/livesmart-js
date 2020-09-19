import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {ConnectorDevices} from './connector-devices';
import {CONNECTORDEVICES} from './mock-connector-devices';

@Injectable({
  providedIn: 'root'
})
export class ConnectorDevicesService {

  constructor() { }

  getDevices():Observable<ConnectorDevices[]>{
    return of(CONNECTORDEVICES);
  }
}