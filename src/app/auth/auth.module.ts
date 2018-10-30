
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

const authRoutes : Routes = [
 
]

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    RouterModule.forChild(authRoutes),
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
