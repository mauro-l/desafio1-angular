import { Component } from '@angular/core';
import { Students } from './models/estudiantes.models';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {

  listaDeEstudiantes: Students[] =[
    new Students('Picapiedra', 'Pedro', 2, 5),
    new Students('Marmol', 'Pablo', 7, 5),
    new Students('Picapiedra', 'Vilma', 4, 5),
    new Students('Marmol', 'Betty', 2, 2, 0, false),
    new Students('Marmol', 'Bammbamm', 4, 5)
  ];

  mostarLista = true;
  mostarListado(){
    this.mostarLista = !this.mostarLista;
  }

}




