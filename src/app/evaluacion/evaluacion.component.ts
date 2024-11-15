import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-evaluacion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './evaluacion.component.html',
  styleUrl: './evaluacion.component.css'
})
export class EvaluacionComponent {
  @ViewChild('inputRef') inputElement!: ElementRef;
  
active =true;
Certificado:string="";

  Enviar(){
    Swal.fire({
      title: "¡Buen trabajo!",
      text: "Respuestas Enviadas",
      icon: "success"
    });
    this.active = false;
  }

  nombre(){
    this.Certificado = this.inputElement.nativeElement.value;
  }

  async generatePDF() {
    const div = document.getElementById('certificate-container');  // El div que quieres capturar

    const imgWidth = 206;
    if (div) {
      // Usar html2canvas para capturar el contenido del div como una imagen
      html2canvas(div).then((canvas) => {
        // Convertir el canvas en una imagen PNG
        const imgData = canvas.toDataURL('image/png');
        
        // Crear un enlace para descargar la imagen
        const link = document.createElement('a');
        link.href = imgData;  // Establecer el contenido de la imagen como el href del enlace
        link.download = 'captura.png';  // Nombre del archivo a descargar
        link.click();  // Disparar el clic para descargar la imagen
      });
    }
  }
}
