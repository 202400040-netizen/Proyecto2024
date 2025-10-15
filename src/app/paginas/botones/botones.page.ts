import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ComponentesModule } from 'src/app/componentes/componentes-module';



@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
  standalone: true,
  imports: [IonBackButton, ComponentesModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BotonesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
