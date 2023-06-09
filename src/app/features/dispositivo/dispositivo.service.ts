import { Injectable } from '@angular/core';
import { Dispositivo } from 'src/app/model/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private listaDispositivi: Dispositivo[] = [
    { id: 1, marca: "Samsung", modello: "s20", prezzo: 399, dataProduzione: new Date("2020-5-5"), inProduzione: true },
    { id: 2, marca: "Nokia", modello: "3310", prezzo: 59, dataProduzione: new Date("2004-5-5"), inProduzione: false },
    { id: 3, marca: "Motorola", modello: "moto g8", prezzo: 399, dataProduzione: new Date("2019-5-5"), inProduzione: false },
    { id: 4, marca: "Apple", modello: "Iphone 14", prezzo: 899, dataProduzione: new Date("2023-5-5"), inProduzione: true },
  ]


  constructor() { }

  listAll(): Dispositivo[] {
    return this.listaDispositivi;
  }

  findById(id: number) {
    let dispositivo = this.listaDispositivi.find(element => element.id === id);
    return dispositivo;
  }

  insert(dispositivo: Dispositivo | undefined): void {
    if (dispositivo === undefined) {
      console.log("Aooooooooooo");
    } else {
      let maxId: number = 1;
      this.listaDispositivi.forEach(element => {
        if (element.id > maxId) {
          maxId = element.id;
        }
      });
      dispositivo.id = ++maxId;
      this.listaDispositivi.push(dispositivo);
    }
  }

  delete(id: number) {
    let index = this.listaDispositivi.findIndex(item => item.id === id)
    if (index !== -1) {
      this.listaDispositivi.splice(index, 1);
    }
  }

  update(dispositivo: Dispositivo) {
   
      let index = this.listaDispositivi.findIndex(item => item.id === dispositivo.id)
      if (index !== -1) {
        let dispositivoAggiornato = { ...this.listaDispositivi[index], ...dispositivo };
        this.listaDispositivi[index] = dispositivoAggiornato;
      }
    }
  
}
