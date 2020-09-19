import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'components/listContactos',
    loadChildren: () =>
      import('./components/list-contactos/list-contactos.module').then(
        (m) => m.ListContactosModule
      ),
  },
  {
    path: 'components/addEditContactos',
    loadChildren: () =>
      import('./components/add-edit-contactos/add-edit-contactos.module').then(
        (m) => m.AddEditContactosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
