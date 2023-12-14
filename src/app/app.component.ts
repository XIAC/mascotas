import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Persona } from './shared/persona.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            PiePaginaComponent,
            EncabezadoComponent,
            NgbModule,
            CuerpoComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Hola desde typescript';
  esReal : boolean = true;
  nombre: string = "Samuel"
  persona: Persona = new Persona();

  mostrar(){
    console.log("desde el boton mostrar",this.persona);
  }
}
