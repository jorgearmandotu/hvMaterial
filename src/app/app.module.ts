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

@NgModule({
  declarations: [
    AppComponent,
    NavToolBarComponent,
    InputSearchComponent,
    HeaderSectionComponent,
    TabMainComponent,
    CardContentComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
