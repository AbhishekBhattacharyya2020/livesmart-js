import {ConnectorDevices} from './connector-devices';

export const CONNECTORDEVICES: ConnectorDevices[]=[
  {
     "id":1,
     "name":"LS Extender 1",
     "active":true,
     "connected":true,
     "description":"Multi-sensor",
     "lsdevice":true,
     "devicetype":"ms",
     "type":"c-1"
  },
  {
     "id":2,
     "name":"Cookie House",
     "active":true,
     "connected":true,
     "description":"Multi-sensor",
     "lsdevice":true,
     "devicetype":"ms",
     "type":"h"
  },
  {
     "id":3,
     "name":"AC1",
     "active":true,
     "connected":true,
     "description":"Air Conditioner",
     "lsdevice":false,
     "devicetype":"ac",
     "type":"c-1"
  },
  {
     "id":4,
     "name":"TV",
     "active":true,
     "connected":true,
     "description":"Kids Room",
     "lsdevice":false,
     "devicetype":"tv",
     "type":"c-1"
  },
  {
     "id":5,
     "name":"Light",
     "active":true,
     "connected":true,
     "description":"Ceiling Light",
     "lsdevice":false,
     "devicetype":"lt",
     "type":"c-1"
  },
  {
     "id":6,
     "name":"TV",
     "active":true,
     "connected":true,
     "description":"Kids Room",
     "lsdevice":false,
     "devicetype":"tv",
     "type":"h"
  }
]