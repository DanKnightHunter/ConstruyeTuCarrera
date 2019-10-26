import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { Top } from '../interfaces/interfaces';

import { apiKey } from "../../app/apis/servidor.js";


var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor( private http: HttpClient ) { }
  
  getTopHeadlines() {
    //const requestOptions = new RequestOptions({ headers: headers }); 
    
    let httpParams = new HttpParams()
                        .set('codigo', '212099002')
	                    .set('nip', '1234');
                        //.set('year', year);
  
    //return this.http.get<Top>('http://localhost/Horario/getAlumnos.php', { params: httpParams } );
    //return this.http.get<Top>(apiKey+'getAlumno.php', { params: httpParams } );
    
    return this.http.get(apiKey+'getAlumnoValido.php', { params: httpParams } );
    
  }
  
  validarAlumno( codigo: string, nip: string ) {
    let httpParams = new HttpParams()
                        .set('codigo', codigo )
	                    .set('nip', nip );
    
    return this.http.get(apiKey+'getAlumnoValido.php', { params: httpParams } );
    
  }
  
  getHorarioActual( codigo: string ) {
    let httpParams = new HttpParams()
                        .set('id', codigo );
    
    return this.http.get(apiKey+'getHorarioActual.php', { params: httpParams } );
    
  }
  
}