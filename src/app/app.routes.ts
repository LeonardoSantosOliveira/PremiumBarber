import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full",
    },
    {
        path: 'home',
        title: "Premium Barber",
        component: HomeComponent,
    },
    {
        path: 'modal',
        component: ModalComponent,
    },
];
