import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserForumComponent } from './user-forum/user-forum.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudiosForumsComponent } from './studios-forums/studios-forums.component';
import { GamesForumsComponent } from './games-forums/games-forums.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserForumComponent,
    HomePageComponent,
    StudiosForumsComponent,
    GamesForumsComponent,
    ForumDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
