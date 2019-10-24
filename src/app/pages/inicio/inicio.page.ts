import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  activeMenu: string;
  codigo: string;
  nip: string;

  constructor(public menu: MenuController, public alumnoService: AlumnoService) {
    this.menuActive();
   }
  //funcion para inhabilitar menu en una pagina false=no mostrar true=mostrar menu
   menuActive(){
     this.activeMenu = 'first';
     this.menu.enable(false, 'first');
   }

  ngOnInit() {
    this.alumnoService.getTopHeadlines()
    .subscribe( resp => {
        console.log('Alumno', resp);
    });
  }
  
  validar() {
    console.log('Prueba', this.codigo, ' ', this.nip);
    
    this.alumnoService.validarAlumno( this.codigo, this.nip )
    .subscribe( resp => {
        console.log(resp);
    });
  }

}
