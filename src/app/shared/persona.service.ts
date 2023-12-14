import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  public infoPersona (){
    let persona = new Persona;
    persona.Id = 12;
    persona.Nombre = "Nombre";
    persona.Apellido = "Apellido";
    return persona;
  }
}
