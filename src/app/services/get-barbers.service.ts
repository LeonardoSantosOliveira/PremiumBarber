import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBarber } from '../interfaces/IBarber.interface';

@Injectable({
  providedIn: 'root'
})
export class GetBarbersService {
  
  BARBERS: IBarber[] =[
    {
      name: "Bruno",
      photo: "/assets/images/barber1.png",
      twitter: '',
      facebook: '',
      instagram: '',
    },
    {
      name: "Bruno",
      photo: "/assets/images/barber2.png",
      twitter: '',
      facebook: '',
      instagram: '',
    },
    {
      name: "Bruno",
      photo: "/assets/images/barber3.png",
      twitter: '',
      facebook: '',
      instagram: '',
    },
  ]

  getBarbers(): Observable<IBarber[]> {
    return of(this.BARBERS);
  }

}
