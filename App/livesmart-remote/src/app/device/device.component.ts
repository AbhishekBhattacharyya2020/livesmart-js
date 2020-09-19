import { Component, OnInit, Input } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Device} from './device';
import {DeviceService} from './device.service';
import {MyDevices} from '../my-devices/my-devices';
import {MyDevicesService} from '../my-devices/my-devices.service';
import {DEVICECODES} from './device-codes';




@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  devices : Device[];
  deviceTypes:MyDevices[];
  selectedDevice: Device;
  deviceCodes=DEVICECODES;
  
  deviceClass = 'device-grid-view'

  constructor(private deviceService:DeviceService, private router: Router, private myDevicesService:MyDevicesService) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl ||[]).join('');
        this.deviceClass=currentRoute.replace('dashboard/','device-');;
      }
    })
  }

  @Input() code: string;
 

  ngOnInit(): void {
    this.getDevices();
    this.getAllDeviceTypes();
  }

  toggleSwitch(device:Device):void {
    device.active = !device.active;
    console.log(this.devices)
  }

  toggleConnection(device:Device):void {
    device.connected = !device.connected;
  }

  getDevices():void{
    this.deviceService.getDevices().subscribe(devices=>this.devices=devices);
  }

  getAllDeviceTypes():void{
    this.myDevicesService.getMyDevices().subscribe(deviceTypes=>this.deviceTypes=deviceTypes);
  }

}
