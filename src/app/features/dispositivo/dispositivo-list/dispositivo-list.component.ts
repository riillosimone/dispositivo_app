import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../dispositivo.service';
import { Dispositivo } from 'src/app/model/dispositivo';

@Component({
  selector: 'dsp-dispositivo-list',
  templateUrl: './dispositivo-list.component.html',
  styleUrls: ['./dispositivo-list.component.css']
})
export class DispositivoListComponent implements OnInit{
  ngOnInit(): void {
    this.listaDispositivi = this.dispositivoService.listAll();
  }

  constructor(private dispositivoService:DispositivoService) {}

  listaDispositivi:Dispositivo[]=[];
  tastoPremuto:boolean = false;
  diversoDispositivo: boolean = false;
  selectedDispositivo?:Dispositivo;
  showNew:boolean = false;
  deleteToggle: boolean=false;
  editToggle: boolean=false;


  onPremiTasto(idDaVisualizzare:number) :void {
    let dispositivo = this.dispositivoService.findById(idDaVisualizzare);

    if (this.selectedDispositivo != dispositivo) {
      this.diversoDispositivo = true;
      this.tastoPremuto = this.diversoDispositivo;
      
    } else {
      this.tastoPremuto = !this.tastoPremuto;
      this.diversoDispositivo = false;
    }
    this.selectedDispositivo = dispositivo;
    this.showNew = false;
    this.deleteToggle = false;
    this.editToggle = false;
  }

  onAddNew():void{
    this.showNew = !this.showNew;
    this.tastoPremuto = false;
  }

  onNotify(boolean:boolean):void{
    this.showNew = !this.showNew;
  }

  onDelete(id:number) {
    let dispositivo = this.dispositivoService.findById(id);
    if (this.selectedDispositivo != dispositivo) {
      this.diversoDispositivo = true;
      this.deleteToggle = true;
      this.showNew = false;
      this.tastoPremuto = false;
    } else {
      this.deleteToggle = !this.deleteToggle;
      this.diversoDispositivo = false;
      this.tastoPremuto = false;
    }
    this.selectedDispositivo = dispositivo;
    this.showNew = false;
    this.tastoPremuto = false;
    this.editToggle = false;
  }

  onNotifyDelete(boolean:boolean) {
    this.deleteToggle = !this.deleteToggle;
  }

  onEdit(id:number) {
    let dispositivo = this.dispositivoService.findById(id);
    
    if (this.selectedDispositivo != dispositivo) {
      this.diversoDispositivo = true;
      this.editToggle = true;
    } else {
      this.editToggle = !this.editToggle;
      this.diversoDispositivo = false;
      this.tastoPremuto = false;
    }
    this.selectedDispositivo = dispositivo;
    this.showNew = false;
    this.tastoPremuto = false;
    this.deleteToggle = false;
  }

  onNotifyEdit(boolean:boolean) {
    this.editToggle = !this.editToggle;
  }
  
}
