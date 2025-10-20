import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-detalle-personaje',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalle del Personaje</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" *ngIf="personaje">
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ personaje.nombre }}</ion-card-title>
          <ion-card-subtitle>{{ personaje.alias }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Equipo:</strong> {{ personaje.equipo }}</p>
          <p><strong>Poder Principal:</strong> {{ personaje.poderPrincipal }}</p>
          <p><strong>Primera Aparición:</strong> {{ personaje.primeraAparicion }}</p>
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" routerLink="/">Volver a la lista</ion-button>
    </ion-content>
  `
})
export class DetallePersonajePage {
  personaje: Personaje | undefined;

  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajeService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaje = this.personajeService.getPersonajePorIndice(id);
  }
}