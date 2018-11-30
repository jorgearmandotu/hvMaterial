import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/models';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {
    user:'',
    password: ''
  };
  status;
  mensaje: string="";
  constructor( private loginservice: LoginServiceService, private router:Router) {
   }

  ngOnInit() {
  }

  login(){
    //return this.dataservice.setLogin()(this.user.email, this.user.password).subscribe
    console.log('submit');
    console.log(this.user);
    this.loginservice.setLogin(this.user).subscribe(arg => {
      this.status = arg;
      console.log(arg['status']);
      if(arg['status']){
        console.log('redirecion aprobada');
        //this.router.navigate(['/']);
        location.reload();
        this.router.navigate(['/inicio']);
      }else{ this.mensaje = 'Datos Erroneos'; alert("error verifique datos"); }
    });
  }

}
