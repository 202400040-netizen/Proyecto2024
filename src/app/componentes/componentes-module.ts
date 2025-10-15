import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';


HeaderComponent


@NgModule({
  declarations: [
    HeaderComponent
  ],

  imports: [
    CommonModule,
    IonicModule

  ],
  exports: [
    HeaderComponent
  ]


})
export class ComponentesModule { 



}


standalone: false

"standalone false usamos esto por el componente Angular"
"Creacion de nuestro elemento modulo :P"