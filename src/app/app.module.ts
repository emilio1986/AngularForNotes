import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.Component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.Component';
import { DirectivaComponent } from './directiva/directiva.component';
import { NotesComponent } from './notes/notes.component';
import { NoteService } from './notes/note.service';

// Repositorio CONTENEDOR Aca se declaran todos los componentes
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    NotesComponent,

  ],
  imports: [
    BrowserModule
  ],
  //Services Inyection
  providers: [NoteService],
  bootstrap: [AppComponent]
})
//Clase que se carga en el main.ts
export class AppModule { }