import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesForumsComponent } from './games-forums/games-forums.component';
import { StudiosForumsComponent } from './studios-forums/studios-forums.component';
import { UserForumComponent } from './user-forum/user-forum.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';
import { GameSpecificForumsDetailsComponent } from './game-specific-forums-details/game-specific-forums-details.component';
import { OffTopicForumsComponent } from './off-topic-forums/off-topic-forums.component';
import { OffTopicForumsDetailsComponent } from './off-topic-forums-details/off-topic-forums-details.component';
import { StudioForumsDetailsComponent } from './studio-forums-details/studio-forums-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
// import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'games',
    component: GamesForumsComponent
  },
  {
    path: 'studios',
    component: StudiosForumsComponent
  },
  {
    path: 'general',
    component: UserForumComponent
  },
  {
    path: 'offtopic',
    component: OffTopicForumsComponent
  },
  {
    path: 'generalForums/:subject',
    component: ForumDetailsComponent
  },
  {
    path: 'studioSpecificForums/:subject',
    component: StudioForumsDetailsComponent
  },
  {
    path: 'gameSpecificForums/:subject',
    component: GameSpecificForumsDetailsComponent
  },
  {
    path: 'offTopicForums/:subject',
    component: OffTopicForumsDetailsComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  }
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
