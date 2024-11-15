import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent {
  Enviar(){
    Swal.fire({
      title: "¡Buen trabajo!",
      text: "Respuestas Enviadas",
      icon: "success"
    });
  }
}
