import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { GetCortesService } from '../../services/get-cortes.service';
import { ICorte } from '../../interfaces/ICorte.interface';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import localePt from '@angular/common/locales/pt';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localePt);

@Component({
  selector: 'app-modal',
  standalone: true,
  providers: [provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {


  minDate: Date = new Date();
  cortes: ICorte[] = [];
  horaSelecionadoIndex: number | null = null;
  mensagemFinal: string | undefined = undefined;

  horarioSelecionado: string = ''

  mesesDoAno: { [key: number]: string } = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro",
  };

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
    private readonly _cortesServices: GetCortesService,
    private readonly _dialog: MatDialog,
  ) { }

  agendar = new FormGroup({
    nome: new FormControl('', Validators.required),
    data: new FormControl(this.minDate, Validators.required),
    servico: new FormControl('-1', Validators.required),
    unidade: new FormControl('iguape', Validators.required)
  })

  ngOnInit(): void {
    this._cortesServices.getCortes().subscribe(data => this.cortes = data);
  }

  selecionarHora(hora: string, index: number) {
    this.horaSelecionadoIndex = index;
    this.horarioSelecionado = hora;
  }

  agendarWpp() {

    let nome = this.agendar.value.nome;
    let diaPadrao = this.agendar.value.data;
    let servico = this.agendar.value.servico;
    let local = this.agendar.value.unidade;
    let horario = this.horarioSelecionado;



    if (diaPadrao) {
      let dia = diaPadrao.getDate();
      let mesPadrao: number = diaPadrao?.getMonth();
      let mes = this.mesesDoAno[mesPadrao];

      let nomeCorteFiltro = this.cortes.filter(corte => corte.value == servico);
      let nomeCorte = nomeCorteFiltro[0].title

      //verifica se os campos estão devidamente preenchidos
      if (servico != '-1') {
        if (horario != '') {

          const mensagem: string = `Olá, meu nome é *${nome}*. \n\n Gostaria de agendar *${nomeCorte}*. \n\n No dia *${dia}* de *${mes}* ás *${horario}*.\n\n Este horário está disponível ?`
          this.mensagemFinal = encodeURI(mensagem);

          // console.log('nome: ', nome);
          // console.log('data: ', dia, 'de: ', mes);
          // console.log('servico: ', nomeCorte);
          // console.log('unidade: ', local);
          // console.log('Horario: ', horario);


        }
      }

    }

  }

  onClick() {
    const dialogRef = this._dialog.closeAll();
  }


}
