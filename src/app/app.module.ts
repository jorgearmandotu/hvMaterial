import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
//import { InfoModule } from './info/info.module';
//import { ProductsModule } from './producs/products.module';
//import { RegisterComponent } from './auth/register/register.component';
//import { LoginComponent } from './auth/login/login.component';
//import { AuthModule } from './auth/auth.module';
import { from } from 'rxjs';
import { SafePipe } from './safe.pipe';
import { DialogProductComponent } from './dialog-product/dialog-product.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
//import { ProductsComponent } from './products/products.component';
//import { DetalleProductComponent } from './products/detalle-product/detalle-product.component';
//import { DetallesComponent } from './products/detalles/detalles.component';

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
    NotFoundComponent,
    SafePipe,
    DialogProductComponent,
    TruncateTextPipe,
    //ProductsComponent,
    //DetalleProductComponent,
    //DetallesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    //InfoModule,
    AppRoutingModule,
    //ProductsModule,
    //AuthModule,
  ],
  entryComponents:[DialogProductComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
