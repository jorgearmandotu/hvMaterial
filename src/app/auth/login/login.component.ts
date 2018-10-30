import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserData } from 'src/app/models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user :UserData = {email:"", password:""};
  constructor( private dataservice: DataService) {
   }

  ngOnInit() {
  }

  login(){
    //return this.dataservice.setLogin()(this.user.email, this.user.password).subscribe
  }

}
