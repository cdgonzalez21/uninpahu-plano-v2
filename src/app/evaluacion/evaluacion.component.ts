import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-evaluacion',
  standalone: true,
  imports: [],
  templateUrl: './evaluacion.component.html',
  styleUrl: './evaluacion.component.css'
})
export class EvaluacionComponent {



  Enviar(){
    Swal.fire({
      title: "¡Buen trabajo!",
      text: "Respuestas Enviadas",
      icon: "success"
    });
  }
}
