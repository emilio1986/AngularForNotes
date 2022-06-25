import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './notes.json';
import { Observable, of } from 'rxjs';

@Injectable()
export class NoteService {
  constructor() {}

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }
}
