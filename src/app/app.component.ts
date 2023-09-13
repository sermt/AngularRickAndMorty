import { Component } from '@angular/core';
import { Character } from './models/APIResponse.model';
import { CharactersService } from './services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private CharactersService: CharactersService) {}
  isModalOpen = false;
  characterData: Partial<Character> = {};

  showModal(character: Partial<Character> = {}): void {
    this.characterData = character;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  characters:Observable<Character[]> = this.CharactersService.getCharacters();
}
