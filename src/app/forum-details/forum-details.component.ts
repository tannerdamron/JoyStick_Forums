import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserForum } from '../models/user-forum.model';
import { UserComment } from '../models/user-comment.model';
import { UserForumsService } from '../user-forums.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css'],
  providers: [UserForumsService]
})
export class ForumDetailsComponent implements OnInit {
  generalForums: FirebaseListObservable<any[]>;
  private userName: String;
  private isLoggedIn: Boolean;
  userForumSubject: string;
  userForumToDisplay;
  showCommentForum = null;
  threadComments = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userForumsService: UserForumsService,
    private database: AngularFireDatabase,
    public authService: AuthenticationService
  ) {
    this.generalForums = database.list('generalForums');
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
    this.route.params.forEach((urlParameters) => {
      this.userForumSubject = urlParameters['subject'];
  });
    this.userForumToDisplay = this.userForumsService.getGeneralForumBySubject(this.userForumSubject);
  }

  addComment(comment) {
    
  }

  showCommentForm() {
    this.showCommentForum = true;
  }

  hideCommentForm() {
    this.showCommentForum = null;
  }
}
