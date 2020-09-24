import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//Angular Material



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
  ]
})
export class AngularMaterialModule { }
