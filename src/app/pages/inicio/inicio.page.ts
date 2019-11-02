import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(public menu: MenuController, public alumnoService: AlumnoService, private router: Router,
              public alertController: AlertController ) {
    this.menuActive();
   }
  // funcion para inhabilitar menu en una pagina false=no mostrar true=mostrar menu
   menuActive() {
     this.activeMenu = 'first';
     this.menu.enable(false, 'first');
   }

  ngOnInit() {
    this.alumnoService.getTopHeadlines()
    .subscribe( resp => {
        console.log('Alumno', resp);
    });
  }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Codigo o NIP invalidos',
      message: 'Verifique que el codigo o el NIP estan bien escritos.',
      buttons: ['OK']
    });

    await alert.present();
  }

  validar() {
    console.log('Prueba', this.codigo, ' ', this.nip);

    this.alumnoService.validarAlumno( this.codigo, this.nip )
    .subscribe( resp => {
        console.log(resp);
        if (resp)    {
            this.router.navigateByUrl('/principal?codigo=' + this.codigo);
        } else {
            this.alerta();
        }
    });
  }

}
