import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unidade',
  standalone: true,
  imports: [],
  templateUrl: './unidade.component.html',
  styleUrl: './unidade.component.scss'
})
export class UnidadeComponent {
  @Input({ required: true }) photo: string = '';
  @Input({ required: true }) address: string = '';
  @Input({ required: true }) name: string = '';
}
