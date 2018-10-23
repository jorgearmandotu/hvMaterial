import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MaterialModule } from './material';
import { NavToolBarComponent } from './nav-tool-bar/nav-tool-bar.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { TabMainComponent } from './tab-main/tab-main.component';
import { CardContentComponent } from './card-content/card-content.component';
import { DataService } from './data.service';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
//import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoModule } from './info/info.module';
import { ProductsModule } from './producs/products.module';
//import { RegisterComponent } from './auth/register/register.component';
//import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavToolBarComponent,
    InputSearchComponent,
    HeaderSectionComponent,
    TabMainComponent,
    CardContentComponent,
    ContentComponent,
    FooterComponent,
    //LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    InfoModule,
    AppRoutingModule,
    ProductsModule,
    AuthModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
