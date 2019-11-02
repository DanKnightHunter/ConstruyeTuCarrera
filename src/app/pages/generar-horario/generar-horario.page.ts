import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generar-horario',
  templateUrl: './generar-horario.page.html',
  styleUrls: ['./generar-horario.page.scss'],
})
export class GenerarHorarioPage implements OnInit {


  tiempo = [];
  hora = [];
  

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
    for(var i = 5, j = 1; i < 135; i+=5, j++)    {
        
        this.tiempo.push(i);
        if((j%11)==0)    {
            i+=40;
        }
    }
  
  }
    
    opcionesTurno: any = {
        header: 'Turno',
        subHeader: 'Selecciona el turno',
        message: 'El horario se creara en el turno selecionado',
        translucent: true
    };
    
    opcionesDia: any = {
        header: 'Dias',
        subHeader: 'Selecciona el o los dias',
        message: 'El horario se creara en los dias selecionados',
        translucent: true,
    };
    toogleMenu() {
      this.menuCtrl.toggle();
  }
}