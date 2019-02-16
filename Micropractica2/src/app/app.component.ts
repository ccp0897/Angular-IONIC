import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche, EstadoCoche} from './coche'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MICROPRÁCTICA ANGULAR - 02';
  subtitle = 'Venta de coches de sugunda mano';

  public EstadoCoche:any = EstadoCoche;

  public coches:Array<Coche>=[
    new Coche('renault', 'scenic', '', new Date(2010, 4, 12), new Date(2011,4,28), 5000, EstadoCoche.BUENO),
    new Coche('seat', 'ibiza', '', new Date(2008, 5, 2), new Date(2009,1,29), 4200, EstadoCoche.BUENO),
    new Coche('renault', 'megane', '', new Date(2002, 12, 12), new Date(2012,6,15), 2000, EstadoCoche.MALO),
    new Coche('tesla ', 'model 3', '', new Date(2008, 8, 18), new Date(2010,9,8), 6000, EstadoCoche.BUENO),
  ];

  public filtro:string='';

  public getFiltrados():Array<number>{
    var filtrados:Array<number>=[];
    var indice:number=0;
    for (var coche of this.coches){
      if (coche.marca.lastIndexOf(this.filtro, 0) === 0) filtrados.push(indice);
        indice=indice+1;
      
    }
    return filtrados;
  }

  public cmd_vender(id){
    this.coches.splice(id,1);
  }
  public cmd_rebajar(id){
    this.coches[id].rebajar();
  }
}
