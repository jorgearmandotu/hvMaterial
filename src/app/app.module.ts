import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MaterialModule } from './material';
import { NavToolBarComponent } from './nav-tool-bar/nav-tool-bar.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { HeaderSectionComponent } from './header-section/header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavToolBarComponent,
    InputSearchComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
