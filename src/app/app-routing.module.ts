import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./modules/home/home.module').then( m=>m.HomeModule )},
  { path: 'curso', loadChildren: ()=>import('./modules/curso/curso.module').then( m=>m.CursoModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
