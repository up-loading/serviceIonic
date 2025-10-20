import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PersonajeService } from '../../services/personaje';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Lista de Personajes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item
          *ngFor="let personaje of personajes; let i = index"
          [routerLink]="['/detalle-personaje', i]"
        >
          <ion-label>
            <h2>{{ personaje.nombre }} ({{ personaje.alias }})</h2>
            <p>Equipo: {{ personaje.equipo }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class ListaPersonajesPage {
  personajes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) {
    this.personajes = this.personajeService.getTodosLosPersonajes();
  }
}