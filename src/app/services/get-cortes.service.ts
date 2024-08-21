import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICorte } from '../interfaces/ICorte.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCortesService {

  SERVICOS: ICorte[] = [
    {
      photo: '/assets/images/service-1.png',
      title: 'Barba',
      value: 'barba',
      price: 20.00
    },
    {
      photo: '/assets/images/service-2.png',
      title: 'Corte completo',
      value: 'corteCompleto',
      price: 40.00
    },
    {
      photo: '/assets/images/service-3.png',
      title: 'Corte de cabelo',
      value: 'corte',
      price: 30.00
    },
    {
      photo: '/assets/images/service-4.png',
      title: 'Corte completo com lavagem',
      value: 'corteComLavagem',
      price: 40.00
    }
  ]

  getCortes(): Observable<ICorte[]> {
    return of(this.SERVICOS)
  }
}
