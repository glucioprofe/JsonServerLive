import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  public url = environment.serverdb + 'carajos'
  constructor( private http: HttpClient) { }

  cargar(){
    return this.http.get(this.url)
  }

  cargarUno(id: number){
    return this.http.get(this.url+'/'+id)
  }

  guardar(nombre: string){
    let data = {nombre: nombre}
    return this.http.post(this.url, data)
  }
  actualizar(curso: any){
    return this.http.put(this.url + '/' + curso.id, curso)
  }
  eliminar(id: number){
    return this.http.delete(this.url + '/' + id)
  }
}
