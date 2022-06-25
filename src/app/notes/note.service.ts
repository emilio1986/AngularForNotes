import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NoteService {

private urlEndpoint:string = 'http://localhost:8080/api/notes';

  constructor(private http:HttpClient) {}

  //Any changes ig Observed by this method and autoActuallized

  getNotes(): Observable<Note[]> {

      //Casting to []Note otherWise always is expecting an Observale/
    return  this.http.get<Note[]>(this.urlEndpoint);
  }
}

