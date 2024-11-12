import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  videoUrl = 'assets/animacion1.mp4'; // Ruta del video
  isHovered = false;
    // Ejemplo de lógica para hacer clic en una sala
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
