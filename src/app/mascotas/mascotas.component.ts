import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {

}
