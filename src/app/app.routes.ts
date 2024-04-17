import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/doc-form/doc-form.component').then(
        (c) => c.DocFormComponent
      ),
  },
];
