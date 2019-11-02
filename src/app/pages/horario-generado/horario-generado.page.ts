import { Component, OnInit } from '@angular/core';


import { AlumnoService } from '../../services/alumno.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-horario-generado',
  templateUrl: './horario-generado.page.html',
  styleUrls: ['./horario-generado.page.scss'],
})
export class HorarioGeneradoPage implements OnInit {

  horario = [];

  constructor(public alumnoService: AlumnoService, private menuCtrl: MenuController) { }

  toogleMenu() {
    this.menuCtrl.toggle();
  }
  ngOnInit() {
    this.alumnoService.getHorarioGenerado( '1' )
    .subscribe( resp => {
        // var keys = Object.keys( resp );
        // var len = keys.length;
        var flag = false;

        console.log(resp);
        // console.log(len);

        // for ( var hora = 700; hora < 2200; hora += 100) {
        //     // console.log(i);
        //     for (var i = 0; i < 7; i++){
        //         // console.log(hora);
        //         flag = false;

        //         if (i == 0)  {
        //             this.horario.push(hora + '-' + (hora + 100));
        //         } else {
        //             for ( var j = 0; j <= len; j++)    {
        //                 console.log(resp['Materia'][j]['Hora'][0]['dia']);
        //                 if ( resp['Materia'][j]['Hora'][0]['dia'] == this.dias[i] || resp['Materia'][j]['Hora'][1]['dia'] == this.dias[i] ){
        //                     if ( resp['Materia'][j]['Hora'][0]['horaInicio'] == hora )   {
        //                         this.horario.push(resp['Materia'][j]['mNombre']);
        //                         flag = true;
        //                     } else if ( resp['Materia'][j]['Hora'][1]['horaInicio'] == hora )   {
        //                         this.horario.push(resp['Materia'][j]['mNombre']);
        //                         flag = true;
        //                     } else if ( resp['Materia'][j]['Hora'][0]['horaFin'] == (hora + 55) ) {
        //                         this.horario.push(resp['Materia'][j]['mNombre']);
        //                         flag = true;
        //                     }
        //                 }
        //                 if (j == len)   {
        //                     if (!flag)   {
        //                         this.horario.push('');
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        console.log(this.horario);
    });
  }

}
