import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { GetCortesService } from '../../services/get-cortes.service';
import { ICorte } from '../../interfaces/ICorte.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {


  minDate: Date = new Date();
  cortes: ICorte[] = [];
  horaSelecionadoIndex: number | null = null;

  horarioSelecionado: string = ''

  horarioFuncionamento = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
  ];
  constructor(
    private readonly _cortesServices: GetCortesService
  ) { }

  ngOnInit(): void {
    this._cortesServices.getCortes().subscribe(data => this.cortes = data);
  }

  selecionarHora(hora: string, index: number) { 
    this.horaSelecionadoIndex = index;

    this.horarioSelecionado = hora;
  }


}
