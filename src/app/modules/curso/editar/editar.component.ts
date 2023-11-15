import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {
  public id!: number
  public curso: any
  constructor(
    public route: ActivatedRoute,
    public cursoServ: CursoService
  ){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.cursoServ.cargarUno(this.id).subscribe(res=>{
      this.curso = res
    })
  }
  onUpdate(){
    this.cursoServ.actualizar(this.curso).subscribe()
  }
}
