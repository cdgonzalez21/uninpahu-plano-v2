import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoModalComponent } from './video-modal/video-modal.component';

@Component({
  selector: 'app-plano-edificio',
  standalone: true,
  imports: [VideoModalComponent],
  templateUrl: './plano-edificio.component.html',
  styleUrls: ['./plano-edificio.component.css']
})
export class PlanoEdificioComponent implements OnInit {
  //videoUrl = 'assets/7019977_Arms_Boy_1280x720.mp4'; // Ruta del video
  videoUrl = 'assets/animacion1.mp4'; // Ruta del video
  isHovered = false;
 
  ngOnInit(): void {}

  // Ejemplo de lógica para hacer clic en una salas
  onRoomClick(room: string) {
    alert(`Has hecho clic en la ${room}`);
  }

    animationCreated(animationItem: Animation): void {
      animationItem.addEventListener('complete', () => {
        console.log('Animación completada'); 
      });
    }
 // Métodos para manejar el mouse
 onMouseEnter() {
  this.isHovered = false; // Cuando el mouse está sobre el video
}

onMouseLeave() {
  this.isHovered = false; // Cuando el mouse sale del video
}

    
}
