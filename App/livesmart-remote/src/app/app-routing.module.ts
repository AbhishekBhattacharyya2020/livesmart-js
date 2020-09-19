import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyDevicesComponent} from './my-devices/my-devices.component';
import {MyRoomsComponent} from './my-rooms/my-rooms.component';

const routes: Routes = [
  {
    path: 'dashboard',
  component: MyDevicesComponent,
  children:[
    {
      path: 'grid-view',
      children:[]
    },{
      path: 'list-view',
      children:[]
    }
  ]
},
  {path: 'rooms', component: MyRoomsComponent},
  { path: '', redirectTo: 'dashboard/grid-view', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
