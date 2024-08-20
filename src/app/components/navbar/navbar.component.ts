import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  abrirMenu(menu: HTMLDivElement) {
    menu.classList.remove("hidden");
    menu.classList.remove("animate__slideOutRight");
    menu.classList.add("animate__slideInRight");
  }

  fecharMenu(menu: HTMLDivElement) {
    menu.classList.remove("animate__slideInRight");
    menu.classList.add("animate__slideOutRight");
  }

}
