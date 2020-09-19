import { Component, OnInit , Input} from '@angular/core';
import {ConnectorDevices} from './connector-devices';
import {ConnectorDevicesService} from './connector-devices.service';

@Component({
  selector: 'app-connector-devices',
  templateUrl: './connector-devices.component.html',
  styleUrls: ['./connector-devices.component.scss']
})
export class ConnectorDevicesComponent implements OnInit {
  connectorDevices : ConnectorDevices[];
  selectedConnectorDevice: ConnectorDevices;
  deviceListClass = 'grid-view'

  constructor(private connecterDevicesService:ConnectorDevicesService) { }

  @Input() code: string;

  ngOnInit(): void {
    this.getDevices();
  }

  toggleSwitch(device:ConnectorDevices):void {
    device.active = !device.active;
    console.log(this.connectorDevices)
  }

  toggleConnection(device:ConnectorDevices):void {
    device.connected = !device.connected;
  }

  getDevices():void{
    this.connecterDevicesService.getDevices().subscribe(connectorDevices=>this.connectorDevices=connectorDevices);
  }

}
