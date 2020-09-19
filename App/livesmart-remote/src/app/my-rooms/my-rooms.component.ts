import { OnInit,Component, AfterViewInit } from '@angular/core';
import {MyRooms} from '././my-rooms';
import {MyRoomsService} from './my-rooms.service';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.component.html',
  styleUrls: ['./my-rooms.component.scss']
})
export class MyRoomsComponent implements OnInit, AfterViewInit{
  myRooms : MyRooms[];
  code:string;
  deviceCounts:number[];
  totalRooms: number;
  totalExtenders:number;
  deviceListClass = 'grid-view'
  constructor(private myRoomsService:MyRoomsService) {}

  ngAfterViewInit():void {
    let countArray=[];
    let extenderCount=0;
    extenderCount=document.querySelectorAll('.extender').length;
    this.myRooms.forEach(function (device) {
      countArray.push(document.querySelectorAll('.'+device.code).length);
  });
  //update number of components after the loading flag is set to true
  setTimeout(() => {this.deviceCounts=countArray; this.totalRooms=countArray.length;this.totalExtenders=extenderCount})
  }


  ngOnInit(): void {
    this.code='';
    this.deviceCounts=[];
    this.getMyDevices();
  }

  getMyDevices():void{
    this.myRoomsService.getMyDevices().subscribe(myRooms=>this.myRooms=myRooms);
  }


}
