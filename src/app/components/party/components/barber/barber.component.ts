import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barber',
  standalone: true,
  imports: [],
  templateUrl: './barber.component.html',
  styleUrl: './barber.component.scss'
})
export class BarberComponent {
  @Input() photo: string = '';
  @Input() name: string ='';
  @Input() facebook: string = '';
  @Input() twitter: string = '';
  @Input() instagram: string = '';
}
