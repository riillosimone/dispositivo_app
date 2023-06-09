import { Component, EventEmitter, Output } from '@angular/core';
import { DispositivoService } from '../dispositivo.service';
import { Dispositivo } from 'src/app/model/dispositivo';

@Component({
  selector: 'dsp-dispositivo-insert',
  templateUrl: './dispositivo-insert.component.html',
  styleUrls: ['./dispositivo-insert.component.css']
})
export class DispositivoInsertComponent {

  dispositivo?: Dispositivo;
  idInput: number = 0;
  marcaInput: string = "";
  modelloInput: string = "";
  prezzoInput: number = 0;
  dataProduzioneInput: Date = new Date();
  inProduzioneInput: boolean = false;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dispositivoService: DispositivoService) { }

  onPremiConferma() {
    this.dispositivo = {
      id: this.idInput,
      marca: this.marcaInput,
      modello: this.modelloInput,
      prezzo: this.prezzoInput,
      dataProduzione: this.dataProduzioneInput,
      inProduzione: this.inProduzioneInput
    };

    this.dispositivoService.insert(this.dispositivo);
    this.dispositivo = undefined;
    this.notify.emit(false);
  }
}
