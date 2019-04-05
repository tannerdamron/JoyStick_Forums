import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { UserForumComponent } from './user-forum/user-forum.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudiosForumsComponent } from './studios-forums/studios-forums.component';
import { GamesForumsComponent } from './games-forums/games-forums.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    UserForumComponent,
    HomePageComponent,
    StudiosForumsComponent,
    GamesForumsComponent,
    ForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
