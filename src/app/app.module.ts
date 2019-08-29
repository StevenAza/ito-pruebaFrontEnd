import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RolComponent } from './pages/rol/rol.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AutenticarComponent } from './pages/autenticar/autenticar.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    MensajesComponent,
    UsuariosComponent,
    AutenticarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
