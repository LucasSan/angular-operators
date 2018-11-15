import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'rxjs-poc'
  },
  {
    path: 'rxjs-poc',
    loadChildren: './unsubscribe/unsubscribe.module#UnsubscribeRxjsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
