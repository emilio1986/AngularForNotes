import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  //DeAcoplating json file
  notes!: Note[];

  //Dependency Inyection of the Service
  //If is inyected  vy constructor param, required private Mod, either with a porivate field
  //and doing the assignment like-> (  this. localService = noteService)
  constructor(private noteService: NoteService) {}

  //initializer method like prePersist
  //AutoUpdating notesInformation
  ngOnInit() {
    this.noteService.getNotes().subscribe((notes) => (this.notes = notes));
  }
}
