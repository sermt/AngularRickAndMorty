import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Character, RickAndMortyResponse } from '../models/APIResponse.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<RickAndMortyResponse>(environment.apiUrl)
      .pipe(map((response) => response.results));
  }
}
