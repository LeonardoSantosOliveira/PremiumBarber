import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  @Output() agendarEmitter = new EventEmitter();
  
  onClick() {
    this.agendarEmitter.emit();
  }

}
