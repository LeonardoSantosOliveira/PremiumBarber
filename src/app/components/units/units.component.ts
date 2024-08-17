import { Component } from '@angular/core';
import { UnidadeComponent } from './components/unidade/unidade.component';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [
    UnidadeComponent,
  ],
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent {

}
