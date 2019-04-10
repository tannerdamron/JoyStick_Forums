import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-games-forums',
  templateUrl: './games-forums.component.html',
  styleUrls: ['./games-forums.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class GamesForumsComponent implements OnInit {
  private userName: String;
  private isLoggedIn: Boolean;
  gameSpecificForums: FirebaseListObservable<any[]>;
  showAddForum = null;

  constructor(private router: Router, private userGameForumsService: UserForumsService, private database: AngularFireDatabase, public authService: AuthenticationService) {
    this.gameSpecificForums = database.list('gameSpecificForums');
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {
    this.gameSpecificForums = this.userGameForumsService.getUserGameForums();
  }


  goToGameSpecificDetailPage(clickedForum) {
    this.router.navigate(['gameSpecificForums', clickedForum.$key]);
  }

  addForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const currentUserName = this.userName;
    const comments = [];
    const newForum = new UserForum(title, subject, body, date, currentUserName, comments);
    this.userGameForumsService.addToGameSpecificForum(newForum);
    this.userGameForumsService.addToAllPosts(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
