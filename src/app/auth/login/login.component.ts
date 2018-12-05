import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/models';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';
import { BuyService } from 'src/app/services/buy.service';

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
  loginForm: FormGroup;
  status;
  mensaje: string="";
  constructor( private loginservice: LoginServiceService, private router:Router, private buyservice: BuyService, private _formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    //return this.dataservice.setLogin()(this.user.email, this.user.password).subscribe
    this.user.user = this.loginForm.value.user;
    this.user.password = this.loginForm.value.password;
    
    this.loginservice.setLogin(this.user).subscribe(arg => {
      this.status = arg;
      console.log(arg['status']);
      if(arg['status']){
        console.log('redirecion aprobada');
        this.buyservice.addLog();
        console.log('este es sesion storage '+sessionStorage.getItem('log'));
        //this.router.navigate(['/']);
        location.reload();
        this.router.navigate(['/inicio']);
      }else{ this.mensaje = 'Datos Erroneos'; alert("error verifique datos"); this.buyservice.delLog(); }
    });
  }

}
