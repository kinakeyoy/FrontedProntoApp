import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'comp',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: '**',
    redirectTo: 'comp'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
