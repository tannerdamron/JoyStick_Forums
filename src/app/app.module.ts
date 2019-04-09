import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

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

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
