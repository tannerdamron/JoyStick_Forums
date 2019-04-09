import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-off-topic-forums',
  templateUrl: './off-topic-forums.component.html',
  styleUrls: ['./off-topic-forums.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class OffTopicForumsComponent implements OnInit {
  private userName: String;
  private isLoggedIn: Boolean;
  offTopicForums: FirebaseListObservable<any[]>;
  showAddForum = null;

  constructor(private router: Router, private userOffTopicForumsService: UserForumsService, private database: AngularFireDatabase, public authService: AuthenticationService) {
    this.offTopicForums = database.list('offTopicForums');
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
    this.offTopicForums = this.userOffTopicForumsService.getOffTopicForums();
  }

  goToOffTopicDetailPage(clickedForum) {
    this.router.navigate(['offTopicForums', clickedForum.$key]);
  }

  addForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const currentUserName = this.userName;
    const comments = [];
    const newForum = new UserForum(title, subject, body, date, currentUserName, comments);
    this.userOffTopicForumsService.addOffTopicForum(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
