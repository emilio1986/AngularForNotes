import { Component } from '@angular/core';

//Decorador de la clase componente, que para usarse se debe importar obviamente
@Component({
  selector: 'app-root',
  //componente vista HTML GRAL
  templateUrl: './app.component.html',
  //componente RAIZ-> Apcomponent
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bienvenido a Angular';

  curso:String =  'Curso Spring 5 con Angular 7';
  profesor:String = 'Ferraro Emilio';

}
