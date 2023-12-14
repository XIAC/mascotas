import { Component } from '@angular/core';
import { PersonaService } from '../shared/persona.service';
import { Mascota, Persona } from '../shared/persona.model';
import { liveQuery } from 'dexie';
import { db } from '../shared/AppDb';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  providers: [PersonaService],
  imports: [],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

  persona : Persona = new Persona;
  mascotasList: Mascota[] = [];
  mascotasSubscription: Subscription; // Add Subscription
  constructor(public personaService: PersonaService) {
    this.persona = this.personaService.infoPersona();
    // console.log(this.personaService.infoPersona());
    this.loadMascotas();
    console.log(this.mascotasList);
  }

  loadMascotas() {
    // this.mascotasList = liveQuery(() => db.mascotas.toArray());
    this.mascotasSubscription = liveQuery(() => db.mascotas.toArray()).subscribe(
      (mascotas: Mascota[]) => {
        this.mascotasList = mascotas;
      },
      error => {
        console.error('Error fetching mascotas:', error);
      }
    );
  }
  ngOnDestroy() {
    if (this.mascotasSubscription) {
      this.mascotasSubscription.unsubscribe();
    }
  }

}
