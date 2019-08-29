import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.scss']
})
export class AutenticarComponent implements OnInit {

  constructor(private Serivicio: BaseService, public Route: Router) { 

  }

  ngOnInit() {
    if(!localStorage.getItem("ttest")){
      this.Serivicio.autenticathe();
      this.Route.navigate(['/roles']);
    }
    else{
      this.Route.navigate(['/roles']);
    }
  }
}
