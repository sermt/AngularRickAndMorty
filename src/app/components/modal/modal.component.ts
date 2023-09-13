import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Character } from 'src/app/models/APIResponse.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() modalClose: EventEmitter<void> = new EventEmitter();
  @Input() characterData: Partial<Character> = {};
  closeModal():void{
    this.modalClose.emit();
  }
}
