import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditContactosRoutingModule } from './add-edit-contactos-routing.module';
import { AddEditContactosComponent } from './add-edit-contactos.component';


@NgModule({
  declarations: [AddEditContactosComponent],
  imports: [
    CommonModule,
    AddEditContactosRoutingModule
  ]
})
export class AddEditContactosModule { }
