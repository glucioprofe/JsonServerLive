import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    CursoComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CursoModule { }
