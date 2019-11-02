import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  menuOpts: Observable<Componente[]>;

  constructor( private dataService: AlumnoService, private navCtrl: NavController ) { }

  ngOnInit() {
    this.menuOpts = this.dataService.getMenuOpt();
  }
  onClickPrincipal() {
    this.navCtrl.navigateRoot('/principal');
  }
  onClickGenerar() {
    this.navCtrl.navigateRoot('/generar-horario');
  }
  onClickPerfil() {
    this.navCtrl.navigateRoot('/perfil');
  }
  onClickCerrar() {
    this.navCtrl.navigateRoot('/inicio');
  }
}
