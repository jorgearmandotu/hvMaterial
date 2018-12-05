import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, MinLengthValidator, FormControl,  } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { RegisterData } from 'src/app/models/models';
import { Router } from '@angular/router';
import { Location } from '@angular/common'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLinear = true;
  datosFormGroup: FormGroup;
  contactoFormGroup: FormGroup;
  loginFormGroup: FormGroup;
  mensaje: string = "";
  mensajeUser: string = "";
  mensajePass: string = "";
  mensajeEmail : string = "";
  isValidUser:boolean = false;
  isValidPass:boolean = false;
  isValidEmail:boolean = false;

  dataRegister: RegisterData = {
    names : "",
    lastNames: "",
    id: "",
    email: "",
    phone: "",
    user: "",
    password: ""
  };

  constructor(private _formBuilder: FormBuilder, private registerservice:LoginServiceService, private router:Router, location:Location ) {
   }

  ngOnInit() {
    this.datosFormGroup = this._formBuilder.group({
      names: ['', Validators.required],
      lastNames: ['', Validators.required],
      id: ['', Validators.required]
    });
    this.contactoFormGroup = this._formBuilder.group({
      email: ['', Validators.email],
      phone: ['', Validators.required]
    });
    this.loginFormGroup = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', 
      [Validators.required, Validators.minLength(6)]
    ],
      passwordVerificate: ['', 
      [Validators.required, Validators.minLength(6) ]
  ],
    });    
  }

  validationUser(){
    this.dataRegister.user = this.loginFormGroup.value.user;
    let userLog ={'user': this.dataRegister.user};
    this.registerservice.userValidator(userLog).subscribe(arg => {
      if(arg){
        console.log(arg);
        this.mensajeUser ='El nombre de usuario ya existe seleccione otro por favor '
        this.isValidUser = false;
        return;
      }else{
        this.mensajeUser='';
        this.isValidUser = true;
      }
    });
  }
  validatePass(){
    if(this.loginFormGroup.value.password != this.loginFormGroup.value.passwordVerificate ){
      //alert('Contraseñas no coinciden');
      this.mensajeUser += "Contraseñas no coinciden";
      this.isValidPass = false;
    }else{
      this.mensajePass = "";
      this.isValidPass = true;
    }
  }
  validationEmail(){
    this.dataRegister.email = this.contactoFormGroup.value.email;
    let emailLog = { 'email':this.dataRegister.email };
    this.registerservice.emailValidator(emailLog).subscribe(arg => {
      console.log(arg);
      if(arg){
        this.mensajeEmail='El email de usuario ya existe, inicie sesion'
        this.mensaje = "El Email ya se ecnuentra registrado"
        this.isValidEmail = false;
        return false;
      }else{
        this.mensajeEmail='';
        this.mensaje = "";
        this.isValidEmail = true;
        return true;
      }
    });
  }

  register(){
    this.validatePass();
    this.validationUser();
    this.validationEmail();
    if(this.isValidUser && this.isValidPass && this.isValidEmail) {
      console.log('registrando');
      this.mensaje = "";
      this.dataRegister.names = this.datosFormGroup.value.names;
      this.dataRegister.lastNames = this.datosFormGroup.value.lastNames;
      this.dataRegister.id = this.datosFormGroup.value.id;
      this.dataRegister.email = this.contactoFormGroup.value.email;
      this.dataRegister.phone = this.contactoFormGroup.value.phone;
      this.dataRegister.user = this.loginFormGroup.value.user;
      this.dataRegister.password = this.loginFormGroup.value.password;
      this.registerservice.setRegister(this.dataRegister).subscribe(arg => {
        if(arg.status){
          console.log(this.dataRegister);
          //alert('registro exitoso');
          location.reload();
          this.router.navigate(['/inicio']);
        }else{
          alert('upps Algo malo ocurrio');
          this.mensaje = 'Parece que algo salio mal, revisa tus datos o si ya posees una cuenta intenta ingresar con ella';
        }
      });
    }
  }

}
