// import { Component, OnInit } from '@angular/core';
// import { UserComment } from '../models/user-comment.model';
// import { UserForumsService } from '../user-forums.service';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AuthenticationService } from '../authentication/authentication.service';

// @Component({
//   selector: 'app-general-forum-comments',
//   templateUrl: './general-forum-comments.component.html',
//   styleUrls: ['./general-forum-comments.component.css'],
//   providers: [UserForumsService]
// })
// export class GeneralForumCommentsComponent implements OnInit {
//   private userName: String;
//   private isLoggedIn: Boolean;
//   showCommentForum = null;
//   userCommentToDisplay;

//   constructor(private generalForumCommentsService: UserForumsService, private database: AngularFireDatabase, public authService: AuthenticationService, private userForumsService: UserForumsService) {
//     this.authService.user.subscribe(user => {
//       if (user == null) {
//         this.isLoggedIn = false;
//       } else {
//         this.isLoggedIn = true;
//         this.userName = user.displayName;
//       }
//     });
//   }

//   ngOnInit() {
//     // this.userCommentToDisplay = this.userForumsService.getThreadComments();
//   }

//   addComment(comment: string) {
//     const currentTime = new Date();
//     const date = (currentTime.toString()).substr(0, 15);
//     const currentUserName = this.userName;
//     const newComment = new UserComment(comment, date, currentUserName);
//     this.generalForumCommentsService.addCommentToThread(newComment);
//     this.showCommentForum = null;
//   }

//   showAddCommentForm() {
//     this.showCommentForum = true;
//   }

//   hideAddCommentForm() {
//     this.showCommentForum = null;
//   }

// }
