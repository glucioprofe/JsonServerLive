import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

interface curso {
  nombre: ''
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {
  public nombre: string = ''

  constructor( private cursoServ: CursoService ){}
  ngOnInit(): void {

  }
  onSave(){

    this.cursoServ.guardar(this.nombre).subscribe( res =>{
      this.nombre = ''
    })
  }
}
