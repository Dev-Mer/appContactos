import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContactosRoutingModule } from './list-contactos-routing.module';
import { ListContactosComponent } from './list-contactos.component';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
// Angular Material

@NgModule({
  declarations: [ListContactosComponent],
  imports: [
    CommonModule,
    ListContactosRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
  ]
})
export class ListContactosModule { }
