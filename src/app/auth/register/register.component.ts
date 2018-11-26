import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, MinLengthValidator,  } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { RegisterData } from 'src/app/models/models';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  mensaje: string = "";
  
  dataRegister: RegisterData = {
    names : "",
    lastNames: "",
    id: "",
    email: "",
    phone: "",
    user: "",
    password: ""
  };

  constructor(private _formBuilder: FormBuilder, private registerservice:LoginServiceService) {
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      cedula: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      mail: ['', Validators.email],
      phone: ['', Validators.required]
    });
    this.threeFormGroup = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', 
      [Validators.required, Validators.minLength(8)]
    ],
      passwordVerificate: ['', 
      [Validators.required, Validators.minLength(8) ]
  ],
    });    
  }

  register(formvalue){
    if(formvalue.password != formvalue.passwordVerificate ){
      //alert('Contraseñas no coinciden');
      this.mensaje = "Contraseñas no coinciden";
    }else{
      this.mensaje = "";
      this.registerservice.setRegister(this.dataRegister).subscribe(arg => {
        console.log(arg);
      });
    }
  }

}
