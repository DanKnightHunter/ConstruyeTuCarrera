import { Component, OnInit } from '@angular/core';

import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  horario: [];
  constructor( public alumnoService: AlumnoService ) { }
  
  ngOnInit() {
    this.alumnoService.getHorarioActual( '1' )
    .subscribe( resp => {
        var keys = Object.keys( resp );
        var len = keys.length;
        
        console.log(resp);
        console.log(len);
        
        //for(var i = 0; i<5; i++){
            //console.log(i);
            
            for(var j = 0; j <= len; j++)    {
                console.log(resp['Materia'][j]);
            }
            
        //}
        
    });
  }

}
