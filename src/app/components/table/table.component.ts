import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/APIResponse.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() characters: Character[] | null = [];
  @Output() showModal: EventEmitter<Partial<Character>> = new EventEmitter();

  titles = ['ID', 'Name', 'Gender'];
  sendData(image: string, name: string): void {
    this.showModal.emit({ image, name });
  }
}
