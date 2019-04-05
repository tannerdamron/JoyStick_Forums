import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesForumsComponent } from './games-forums/games-forums.component';
import { StudiosForumsComponent } from './studios-forums/studios-forums.component';
import { UserForumComponent } from './user-forum/user-forum.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'forums',
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
    path: 'forums/:title',
    component: ForumDetailsComponent
  },
  {
    path: 'studioForums/:title',
    component: ForumDetailsComponent
  },
  {
    path: 'gameForums/:title',
    component: ForumDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
