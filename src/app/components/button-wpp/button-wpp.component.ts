import { Component } from '@angular/core';

@Component({
  selector: 'app-button-wpp',
  standalone: true,
  imports: [],
  templateUrl: './button-wpp.component.html',
  styleUrl: './button-wpp.component.scss'
})
export class ButtonWppComponent {

  mensagem: string = encodeURI('Gostaria de saber mais sobre seu serviço')

}
