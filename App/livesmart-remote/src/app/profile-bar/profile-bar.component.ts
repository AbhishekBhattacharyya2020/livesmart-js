import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.scss']
})
export class ProfileBarComponent implements OnInit {
  profiles = ['Cookie House'];

  profileForm = new FormGroup(
{profileControl:new FormControl()}
  )
  
  constructor() { 
    this.profileForm.controls['profileControl'].setValue(this.profiles[0], {onlySelf: true});
  }

  ngOnInit(): void {
  }

}
