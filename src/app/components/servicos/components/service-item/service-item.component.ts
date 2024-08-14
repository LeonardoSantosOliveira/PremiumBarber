import { Component, inject, Input, OnInit } from '@angular/core';
import { GetCortesService } from '../../../../services/get-cortes.service';
import { ICorte } from '../../../../interfaces/ICorte.interface';
import { PricePipe } from '../../../../pipes/price.pipe';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [
    PricePipe
  ],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {

  @Input() photo: string = '';
  @Input() title: string = '';
  @Input() price: number = 0
  
}
