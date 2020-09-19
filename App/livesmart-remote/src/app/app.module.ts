import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';
import { MyDevicesComponent } from './my-devices/my-devices.component';
import { MyRoomsComponent } from './my-rooms/my-rooms.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectorDevicesComponent } from './connector-devices/connector-devices.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    MyDevicesComponent,
    MyRoomsComponent,
    AppNavComponent,
    ProfileBarComponent,
    AdvertisementsComponent,
    TaskbarComponent,
    ConnectorDevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
