import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public cursos: any = []
  constructor(
    public cursoService: CursoService
  ){}
  ngOnInit() {
    this.cursoService.cargar().subscribe( (res)=>{
      this.cursos = res;
    })
  }

}
