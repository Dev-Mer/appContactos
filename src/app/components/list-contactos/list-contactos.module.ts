import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContactosRoutingModule } from './list-contactos-routing.module';
import { ListContactosComponent } from './list-contactos.component';


@NgModule({
  declarations: [ListContactosComponent],
  imports: [
    CommonModule,
    ListContactosRoutingModule
  ]
})
export class ListContactosModule { }
