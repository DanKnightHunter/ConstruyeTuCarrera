import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  activeMenu: string;

  constructor(public menu: MenuController) {
    this.menuActive();
   }
  //funcion para inhabilitar menu en una pagina false=no mostrar true=mostrar menu
   menuActive(){
     this.activeMenu = 'first';
     this.menu.enable(false, 'first');
   }

  ngOnInit() {
  }

}
