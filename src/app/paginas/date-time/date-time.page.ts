import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DateTimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
Fecha = "2006-06-22"

minimo = "2022"
maximo = "2023"


dia="22"
  mes="06"
  year="2006"

MostrarDatos(){
  console.log(this.dia,this.mes,this.year);
  console.log(this.mes,this.year);
  console.log(this.dia,this.mes);
}




}
