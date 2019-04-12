import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserForum } from '../models/user-forum.model';
import { UserComment } from '../models/user-comment.model';
import { UserForumsService } from '../user-forums.service';
import { CommentsService } from '../comments.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication/authentication.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-off-topic-forums-details',
  templateUrl: './off-topic-forums-details.component.html',
  styleUrls: ['./off-topic-forums-details.component.css'],
  providers: [UserForumsService, CommentsService]
})
export class OffTopicForumsDetailsComponent implements OnInit {
  offTopicForums: FirebaseListObservable<any[]>;
  private userName: String;
  private isLoggedIn: Boolean;
  userForumSubject: string;
  userForumToDisplay;
  userCommentsToDisplay;
  comments = [];
  showCommentForum = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userForumsService: UserForumsService,
    private userCommentsService: CommentsService,
    private database: AngularFireDatabase,
    public authService: AuthenticationService
  ) {
    this.offTopicForums = database.list('generalForums/comments');
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
    this.userForumToDisplay = this.userForumsService.getUserOffTopicForumBySubject(this.userForumSubject);
    this.userCommentsToDisplay = this.userCommentsService.getOffTopicForumComments(this.userForumSubject);
    this.userCommentsToDisplay.subscribe(currentComments => {
      this.comments = currentComments;
    });
  }

  addComment(comment) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 25);
    const currentUserName = this.userName;
    const currentComment: UserComment = new UserComment(comment, date, currentUserName);
    const threadKey = this.userForumSubject;
    const commentsRef = firebase.database().ref(`offTopicForums/${threadKey}/comments/`);
    commentsRef.push(currentComment);
    this.showCommentForum = null;
  }

  showCommentForm() {
    this.showCommentForum = true;
  }

  hideCommentForm() {
    this.showCommentForum = null;
  }

}
