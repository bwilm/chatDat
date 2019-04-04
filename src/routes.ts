import { Routes } from '@angular/router';
import { SignComponent } from './app/sign/sign.component';
import { LoginComponent } from './app/login/login.component';
import { ChatFormComponent } from './app/chat-form/chat-form.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignComponent },
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatFormComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
