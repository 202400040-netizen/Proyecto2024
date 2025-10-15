import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonItem, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, warningOutline, personAddOutline, checkboxOutline,triangle, ellipse, square } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

interface estComponentes {
  name: string;
  icon: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [RouterLink, IonIcon, IonItem, IonList, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor() {
   
    addIcons({ addCircleOutline, warningOutline, personAddOutline, checkboxOutline, triangle, ellipse, square });

   }

  ngOnInit() {
  }
  
  componentes: estComponentes[] = [
    {
     name:'Action-Sheet',
     icon: 'add-circle-outline',
     redirectTo:'/action-sheet'
    },
    {
     name:'Alert',
     icon: 'warning-outline',
     redirectTo:'/alert'
    },
    {
     name: 'Button',
     icon:'square',
     redirectTo:'/button'
    },
    {
     name:'Perfil',
     icon:'person-add-outline',
     redirectTo:''
    },
    {
     name:'Card',
     icon:'triangle',
     redirectTo:'/card'
    },
    {
     name:'checkbox',
     icon:'square',
     redirectTo:'/checkbox'
    }
  ];


}


