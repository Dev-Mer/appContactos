import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listContactos', pathMatch: 'full' },
  {
    path: 'listContactos',
    loadChildren: () =>
      import('./components/list-contactos/list-contactos.module').then(
        (m) => m.ListContactosModule
      ),
  },
  {
    path: 'addEditContactos',
    loadChildren: () =>
      import('./components/add-edit-contactos/add-edit-contactos.module').then(
        (m) => m.AddEditContactosModule
      ),
  },
  { path: '**', redirectTo: 'listContactos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
