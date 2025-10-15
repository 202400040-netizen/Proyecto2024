import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.page.html',
  styleUrls: ['./paginas.page.scss'],
  standalone: true,
  imports: [IonButton ,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PaginasPage implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

  

}
