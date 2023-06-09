import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DispositivoService } from '../dispositivo.service';
import { Dispositivo } from 'src/app/model/dispositivo';

@Component({
  selector: 'dsp-dispositivo-delete',
  templateUrl: './dispositivo-delete.component.html',
  styleUrls: ['./dispositivo-delete.component.css']
})
export class DispositivoDeleteComponent {
  constructor(private dispositivoService:DispositivoService) {}
  @Input() dispositivo?:Dispositivo;
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  onTastoDelete(id:number | undefined) {
    if (id != undefined) 
      this.dispositivoService.delete(id); 
    this.delete.emit(false);
  }
}
