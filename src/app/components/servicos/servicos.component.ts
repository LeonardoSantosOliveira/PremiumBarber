import { Component, OnInit } from '@angular/core';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { GetCortesService } from '../../services/get-cortes.service';
import { ICorte } from '../../interfaces/ICorte.interface';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [
    ServiceItemComponent
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent implements OnInit {

  constructor(private readonly cortesService: GetCortesService){}

  servicos: ICorte[] = [];

  ngOnInit() {
      this.cortesService.getCortes().subscribe(data => this.servicos = data);
  }

}
