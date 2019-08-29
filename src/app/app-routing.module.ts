import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from './pages/rol/rol.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AutenticarComponent } from './pages/autenticar/autenticar.component';


const routes: Routes = [
  { path: 'roles', component: RolComponent },
  { path: 'mensajes', component: MensajesComponent},
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', component:  AutenticarComponent},
  { path: '*', component: RolComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
