import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
 