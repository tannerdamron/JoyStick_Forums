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
import { OffTopicForumsComponent } from './off-topic-forums/off-topic-forums.component';
import { GameSpecificForumsDetailsComponent } from './game-specific-forums-details/game-specific-forums-details.component';
import { OffTopicForumsDetailsComponent } from './off-topic-forums-details/off-topic-forums-details.component';
import { StudioForumsDetailsComponent } from './studio-forums-details/studio-forums-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserForumComponent,
    HomePageComponent,
    StudiosForumsComponent,
    GamesForumsComponent,
    ForumDetailsComponent,
    NavbarComponent,
    OffTopicForumsComponent,
    GameSpecificForumsDetailsComponent,
    OffTopicForumsDetailsComponent,
    StudioForumsDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
