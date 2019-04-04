import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { FormsModule } from '@angular/forms'
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service'
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    FeedComponent,
    MessageComponent,
    LoginComponent,
    SignComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.),
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
