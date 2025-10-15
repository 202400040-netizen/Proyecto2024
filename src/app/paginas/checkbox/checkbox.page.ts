import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonList, IonItem, IonBackButton, IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ComponentesModule } from 'src/app/componentes/componentes-module';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonBackButton, ComponentesModule, IonCheckbox, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

arreColores =
[
  { 
    color: 'danger',
    selected: true
  },


  {
    color: 'primary',
    selected: false
  },
  {
    color: 'secondary',
    selected: true
  },
  {
    color: 'tertiary',
    selected: false
  },
  {
    color: 'light',
    selected: true
  },
  {
    color: 'medium',
    selected: true
  },
  {
    color: 'dark',
    selected: false
  },
  {
    color: 'warning',
    selected: false
  },

]


MiFuncion(item: any){
  console.log(item);
}


MostrarDatos(){
  console.log(this.arreColores);
}
}

