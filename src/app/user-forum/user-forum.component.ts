import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserComment } from '../models/user-comment.model';

@Component({
  selector: 'app-user-forum',
  templateUrl: './user-forum.component.html',
  styleUrls: ['./user-forum.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class UserForumComponent implements OnInit {
  private userName: String;
  private isLoggedIn: Boolean;
  generalForums: FirebaseListObservable<any[]>;
  showAddForum = null;

  constructor(private router: Router, private generalForumService: UserForumsService, private database: AngularFireDatabase, public authService: AuthenticationService) {
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
    this.generalForums = this.generalForumService.getGeneralForums();
  }

  goToDetailPage(clickedForum) {
    this.router.navigate(['generalForums', clickedForum.$key]);
  }

  addForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const currentUserName = this.userName;
    const newForum = new UserForum(title, subject, body, date, currentUserName, []);
    this.generalForumService.addToGeneralForums(newForum);
    this.generalForumService.addToAllPosts(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
