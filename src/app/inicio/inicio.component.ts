import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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
  video() {
    // Swal.fire({
    //   title: "<strong>Video Tutorial</strong>",      
    //   html: `
    //     <div class="video-container">
    //       <iframe 
    //         width="640" 
    //         height="360" 
    //         src="https://www.youtube.com/embed/wqy9tYrc6Es?autoplay=1&mute=1&loop=1&playlist=wqy9tYrc6Es&modestbranding=1&showinfo=0&rel=0&controls=0" 
    //         frameborder="0" 
    //         allow="autoplay; encrypted-media" 
    //         allowfullscreen>
    //       </iframe>
    //       <div class="overlay"></div>
    //     </div>
    //   `,
    //   showCloseButton: true,
    //   focusConfirm: false,
    //   confirmButtonText: `
    //     <i class="fa fa-thumbs-up"></i> 
    //   `,
    //   customClass: {
    //     htmlContainer: 'custom-swal-html'
    //   }
    // });
    Swal.fire({
      title: "<strong>¡Bienvenido!</strong>",
      html: `
        <div class="video-container">
          <iframe 
            width="640" 
            height="360" 
            src="https://www.youtube.com/embed/wqy9tYrc6Es?autoplay=1&loop=1&playlist=wqy9tYrc6Es&modestbranding=1&showinfo=0&rel=0&controls=0&cc_load_policy=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
          <div class="overlay"></div>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `Aceptar`,
      cancelButtonText: `Cancelar`,
      customClass: {
        popup: 'custom-large-swal-popup',
        title: 'custom-large-swal-title',
        htmlContainer: 'custom-large-swal-html',
        confirmButton: 'custom-large-swal-confirm',
        cancelButton: 'custom-large-swal-cancel'
      }
    });
}


}
