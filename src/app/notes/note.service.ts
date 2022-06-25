import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './notes.json';

@Injectable()
export class NoteService {

  getNotes():Note[]{

    return NOTES;
  }
  constructor() {

   }

}
