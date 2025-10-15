import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ExampleComponent } from './example.component';
import { ComponentesModule } from 'src/app/componentes/componentes-module';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    ExampleComponent,
    IonBackButton,
    ComponentesModule
  ]
})
export class ButtonPage implements OnInit {

  constructor() { }

  ngOnInit() { }

}
