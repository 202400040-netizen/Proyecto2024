import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ComponentesModule } from 'src/app/componentes/componentes-module';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonBackButton, ComponentesModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
