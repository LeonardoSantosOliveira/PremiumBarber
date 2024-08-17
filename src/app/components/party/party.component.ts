import { Component, OnInit } from '@angular/core';
import { BarberComponent } from './components/barber/barber.component';
import { GetBarbersService } from '../../services/get-barbers.service';
import { IBarber } from '../../interfaces/IBarber.interface';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [
    BarberComponent
  ],
  templateUrl: './party.component.html',
  styleUrl: './party.component.scss'
})
export class PartyComponent implements OnInit {

  barbers: IBarber[] = [];

  constructor(
    private readonly _getBarberService: GetBarbersService
  ){}

  ngOnInit(): void {
    this._getBarberService.getBarbers().subscribe(data => this.barbers = data);
  }

}
