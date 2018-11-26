import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
  MatMenuModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatCardModule,
  MatSelectModule, MatDialogModule, MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
  MatMenuModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatCardModule,
  MatSelectModule, MatDialogModule, MatListModule, ScrollDispatchModule, MatStepperModule],
})
export class MaterialModule { }
