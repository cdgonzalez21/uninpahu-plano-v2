import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-plano-edificio',
  standalone: true,
  imports: [VideoModalComponent,NgFor,NgIf,NgClass],
  templateUrl: './plano-edificio.component.html',
  styleUrls: ['./plano-edificio.component.css']
})

export class PlanoEdificioComponent implements OnInit {
 
  @ViewChild('inputRef') inputElement!: ElementRef;
  //videoUrl = 'assets/7019977_Arms_Boy_1280x720.mp4'; // Ruta del video
  videoUrl = 'assets/animacion1.mp4'; // Ruta del video
  
  isHovered = false;
  idsalonactive:number =0;
  listaSalon = [
    {id:501,active:false,posx:260,posy:40},
    {id:502,active:false,posx:380,posy:40},
    {id:503,active:false,posx:330,posy:240},
    {id:504,active:false,posx:450,posy:240},
    {id:505,active:false,posx:330,posy:340},
    {id:506,active:false,posx:520,posy:340}
  ];
 
  labelBotonMapa :string="Mapa de Ruta de Evacuación";
  urlMapa = "../../assets/MAPA.jpg";
  activeMapa = false;

  ngOnInit(): void {    

  }

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

buscar(){
  const salon1 = this.listaSalon.find(x => x.id == this.idsalonactive);
  if (salon1) {
    salon1.active = false;
  }
  
  this.idsalonactive = this.inputElement.nativeElement.value;
  if(this.listaSalon.find(x=>x.id==this.idsalonactive )!=undefined){
    Swal.fire({
      title: "salón - "+this.idsalonactive ,
      text: "El salón sale marcado en el plano de la universidad ",
      icon: "success"
    });
    const salon = this.listaSalon.find(x => x.id == this.idsalonactive );
    if (salon) {
      salon.active = true;

    }
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html: `
      <label>El salón no existe, tener en cuenta que los datos sean solo números, revisar si se encuentra el salón en la lista de la pantalla principal</label>
 <div class="video-container" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
        <video width="640" height="360" [style.display]="isHovered ? 'none' : 'block'" autoplay muted loop style="margin-left: -10%;">
          <source src="../../assets/animacion1.mp4" type="video/mp4">
          Tu navegador no soporta el video.
        </video>
      </div>
        <br>
    <audio controls loop>
      <source src="../../assets/Error de búsqueda.mp3" type="audio/mp3">
      Tu navegador no soporta el elemento de audio.
    </audio>
    `,   confirmButtonText: `Cerrar`,
      showCloseButton: true,
      customClass: {
        popup: 'custom-large-swal-popup',
        title: 'custom-large-swal-title',
        htmlContainer: 'custom-large-swal-html',        
      confirmButton: 'custom-large-swal-confirm',
      }    
    });
  }  
}

mapa(){
  this.labelBotonMapa =this.labelBotonMapa=="Mapa de Ruta de Evacuación" ?"Mapa de los salones":"Mapa de Ruta de Evacuación";
  this.activeMapa = this.labelBotonMapa=="Mapa de Ruta de Evacuación" ?false:true;  
}

Informacion() {
  Swal.fire({
    title: "<strong>Información de búsqueda!</strong>",
    html: `
      <div class="video-container">
        <iframe 
          width="640" 
          height="360" 
          src="https://www.youtube.com/embed/zDiiSGhrgk0?autoplay=1&loop=1&playlist=zDiiSGhrgk0&modestbranding=1&showinfo=0&rel=0&controls=0&cc_load_policy=1" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
        <div class="overlay"></div>
      </div>
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `Cerrar`,
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
