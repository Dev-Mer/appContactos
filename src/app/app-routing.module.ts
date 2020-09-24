import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contactos', pathMatch: 'full' },
  {
    path: 'contactos',
    loadChildren: () =>
      import('./components/list-contactos/list-contactos.module').then(
        (m) => m.ListContactosModule
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./components/add-edit-contactos/add-edit-contactos.module').then(
        (m) => m.AddEditContactosModule
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./components/add-edit-contactos/add-edit-contactos.module').then(
        (m) => m.AddEditContactosModule
      ),
  },
  { path: '**', redirectTo: 'contactos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
