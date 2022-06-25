import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl:'./footer.Component.html',
  styleUrls:['./footer.Component.css']
})

export class FooterComponent {
  //any->  objeto Generic
public autor: any = {nombre:'Emilio' , apellido:'Ferraro' };
}
