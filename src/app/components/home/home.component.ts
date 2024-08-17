import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { PartyComponent } from '../party/party.component';
import { UnitsComponent } from '../units/units.component';
import { FooterComponent } from '../footer/footer.component';
import { ButtonWppComponent } from '../button-wpp/button-wpp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicosComponent,
    PartyComponent,
    UnitsComponent,
    FooterComponent,
    ButtonWppComponent    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
