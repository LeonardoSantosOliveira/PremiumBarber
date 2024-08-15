import { Component } from '@angular/core';
import { BarberComponent } from './components/barber/barber.component';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [
    BarberComponent
  ],
  templateUrl: './party.component.html',
  styleUrl: './party.component.scss'
})
export class PartyComponent {

}
