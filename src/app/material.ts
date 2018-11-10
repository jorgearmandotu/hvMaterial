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


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
  MatMenuModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatCardModule,
  MatSelectModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
  MatMenuModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatCardModule,
  MatSelectModule, MatDialogModule],
})
export class MaterialModule { }
