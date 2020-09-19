import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContactosComponent } from './list-contactos.component';

const routes: Routes = [{ path: '', component: ListContactosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListContactosRoutingModule { }
