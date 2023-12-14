import Dexie, { Table } from "dexie";
import { Mascota } from "./persona.model";

export class AppDB extends Dexie {
  mascotas!: Table<Mascota, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(2).stores({
      mascotas: 'Id,Nombre,Raza'
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    // const idMAscota = await db.mascota.add({
    //   Nombre: 'To Do Today'
    // });
    await this.mascotas.bulkAdd([
      {
        Id: 1,
        Nombre: 'Feed the birds',
        Raza: 'Chihuahua'
      },
      {
        Id: 2,
        Nombre: 'Sven',
        Raza: 'Dogg'
      },
      {
        Id: 3,
        Nombre: 'reg',
        Raza: 'XF'
      },
    ]);
  }
}

export const db = new AppDB();
