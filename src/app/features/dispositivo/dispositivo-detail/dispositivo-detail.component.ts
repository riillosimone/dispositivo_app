import { Component, Input } from '@angular/core';
import { Dispositivo } from 'src/app/model/dispositivo';

@Component({
  selector: 'dsp-dispositivo-detail',
  templateUrl: './dispositivo-detail.component.html',
  styleUrls: ['./dispositivo-detail.component.css']
})
export class DispositivoDetailComponent {
  @Input() dispositivo?:Dispositivo;
}
