import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AddEditContactosRoutingModule } from './add-edit-contactos-routing.module';
import { AddEditContactosComponent } from './add-edit-contactos.component';

// Angular Material Imports
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
// Angular Material Imports

@NgModule({
  declarations: [AddEditContactosComponent],
  imports: [
    CommonModule,
    AddEditContactosRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
  ]
})
export class AddEditContactosModule { }
