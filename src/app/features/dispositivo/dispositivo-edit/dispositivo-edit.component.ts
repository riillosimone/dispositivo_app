import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dispositivo } from 'src/app/model/dispositivo';
import { DispositivoService } from '../dispositivo.service';

@Component({
  selector: 'dsp-dispositivo-edit',
  templateUrl: './dispositivo-edit.component.html',
  styleUrls: ['./dispositivo-edit.component.css']
})
export class DispositivoEditComponent implements OnInit {

  @Output() editNotify: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private dispositivoService: DispositivoService) { }

  @Input() dispositivo?: Dispositivo;
  marcaUpdate?: string;
  modelloUpdate?: string;
  prezzoUpdate?: number;
  dataProduzioneUpdate?: Date;
  inProduzioneUpdate?: boolean;

  ngOnInit(): void {
    
    if (this.dispositivo) {
      this.marcaUpdate = this.dispositivo.marca;
      this.modelloUpdate = this.dispositivo.modello;
      this.prezzoUpdate = this.dispositivo.prezzo;
      this.dataProduzioneUpdate = this.dispositivo.dataProduzione;
      this.inProduzioneUpdate = this.dispositivo.inProduzione;
      
    }
  }

  onPremiAggiorna(): void {
    if (this.dispositivo) {
      let dispositivoDaAggiornare: Dispositivo = {
        id: this.dispositivo.id,
        marca: this.marcaUpdate ||  this.dispositivo.marca ,
        modello: this.modelloUpdate || this.dispositivo.modello,
        prezzo: this.prezzoUpdate  || this.dispositivo.prezzo,
        dataProduzione: this.dataProduzioneUpdate || this.dispositivo.dataProduzione,
        inProduzione:this.inProduzioneUpdate !== undefined ? this.inProduzioneUpdate : this.dispositivo.inProduzione
      };
    
    this.dispositivoService.update(dispositivoDaAggiornare);
    this.editNotify.emit(false);
    this.dispositivo = undefined; 
    }
  }
}
