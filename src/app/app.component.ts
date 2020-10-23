import { GeneradorMoviles } from './core/control/generadorMoviles';
import { Movil } from './core/model/movil';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivasMoviles2021Prof';
  private listaMoviles:Array<Movil>;
  constructor(){
    this.listaMoviles=new GeneradorMoviles().movilesList;
  }
}
