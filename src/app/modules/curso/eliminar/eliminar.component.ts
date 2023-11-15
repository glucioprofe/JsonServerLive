import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.sass']
})
export class EliminarComponent implements OnInit {
  public id!: number
  public curso: any
  public loading: boolean = false
  constructor(
    public route: ActivatedRoute,
    public enrutar: Router,
    public cursoServ: CursoService
  ){

  }
  ngOnInit(): void {
    this.loading = true
    this.id = this.route.snapshot.params['id']
    this.cursoServ.cargarUno(this.id).subscribe(res=>{
      this.loading = false
      this.curso = res
    })
  }
  onEliminar(){
    this.loading = true
    this.cursoServ.eliminar(this.id).subscribe(res=>{
      this.loading = false
      this.enrutar.navigate(['/'])
    })
  }

}
