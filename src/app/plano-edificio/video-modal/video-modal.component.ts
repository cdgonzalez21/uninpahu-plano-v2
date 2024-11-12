import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-modal',
  standalone: true, // Este componente es stand-alone
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css'],
  imports: [NgIf],
})
export class VideoModalComponent {
  @Input() videoUrl: string = '';
  isOpen: boolean = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
