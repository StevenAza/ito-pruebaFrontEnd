import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  List: Array<any>;
  constructor(private servicio: BaseService) {

  }
  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.servicio.getUser().subscribe((data:Array<any>)=>{
      console.log(data);
      this.List = data;
    })
  }
 
}
