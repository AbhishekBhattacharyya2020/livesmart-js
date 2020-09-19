import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {MyRooms} from './my-rooms';
import {MYROOMS} from './mock-my-rooms';

@Injectable({
  providedIn: 'root'
})
export class MyRoomsService {

  constructor() { }

  getMyDevices():Observable<MyRooms[]>{
    return of(MYROOMS);
  }
}