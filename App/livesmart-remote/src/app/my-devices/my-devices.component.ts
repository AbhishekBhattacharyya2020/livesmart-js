import { OnInit,Component, AfterViewInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MyDevices} from '././my-devices';
import {MyDevicesService} from './my-devices.service';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.scss']
})
export class MyDevicesComponent implements OnInit, AfterViewInit{
  myDevices : MyDevices[];
  code:string;
  deviceCounts:number[];
  totalDevices: number;
  deviceListClass = 'grid-view'
  constructor(private myDeviceServices:MyDevicesService, private router: Router) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl ||[]).join('');
        this.deviceListClass=currentRoute.replace('dashboard/','');;
      }
    })
  }

  ngAfterViewInit():void {
    let countArray=[];
    this.myDevices.forEach(function (device) {
      countArray.push(document.querySelectorAll('.'+device.code).length);
  });
  //update number of components after the loading flag is set to true
  setTimeout(() => {this.deviceCounts=countArray; this.totalDevices=countArray.reduce((a,b)=>a+b,0);})
  }


  ngOnInit(): void {
    this.code='';
    this.deviceCounts=[];
    this.getMyDevices();
  }

  getMyDevices():void{
    this.myDeviceServices.getMyDevices().subscribe(myDevices=>this.myDevices=myDevices);
  }


}
