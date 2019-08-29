import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {

  public List: Array<any>;
  thead = [
    'Nombre Rol',
    'Descripcion',
    'Estado',
    'Acción'
  ]
  name: string;
  descripcion: string;
  alert: boolean;
  modal: boolean;
  nameForm: string;
  TituloModal: string = "Actualizacion de usuarios";
  descripcionForm: string;
  errorRegistro: boolean;
  errorMensaje: string;
  successMensaje: string;
  exitoRegistro: boolean;
  isMod: boolean;
  idActualizado: number;
  constructor(private servicio: BaseService) {
    this.getItemsRol();
  }
  ngOnInit() {

  }
  getItemsRol() {
    this.servicio.listUser().subscribe((result: Array<any>) => {

      this.List = result;
    });
  }
  consultar() {
    this.servicio.listBySearch(this.name, this.descripcion).subscribe((result: Array<any>) => {
      this.List = result['content'];
      this.alert = false;
    },
      error => {
        if (error.status === 404) {
          this.alert = true;
          this.List = [];
        } else {
          this.alert = false;
        }
      })
  }
  limpiar() {
    this.alert = false;
    this.name = "";
    this.descripcion = "";
    this.getItemsRol();
  }
  modificar(obj: any){
    this.modal = true;
    this.TituloModal = "Editar usuarios";
    this.nameForm = obj.nombre;
    this.descripcionForm = obj.descripcion;
    this.isMod = true;
    this.idActualizado = obj.id;
  }

  registrar(){
    this.modal = true;
    this.isMod = false;
    this.TituloModal = "Registro de usuarios";
  }
  rolSave(){

    const data = {
      "nombre": this.nameForm,
      "descripcion": this.descripcionForm,
      "activo": true
    };

    if(this.isMod){
      const data = {
        "nombre": this.nameForm,
        "descripcion": this.descripcionForm,
        "activo": true,
        "id": this.idActualizado
      };
      this.servicio.actualizar(data).subscribe((data: Array<any>)=>{
        this.successMensaje = "Se ha actualizado con exito";
        this.exitoRegistro = true;
        },
        error => {
          this.errorRegistro = true;
          this.errorMensaje = error['error'][0]['message'];
        });

    }
    else{
      this.servicio.registrar(data).subscribe((data: Array<any>)=>{
        this.successMensaje = "Se ha registrado con exito";
        this.exitoRegistro = true;
        },
        error => {
          this.errorRegistro = true;
          this.errorMensaje = error['error'][0]['message'];
        });
    }
  }
}
