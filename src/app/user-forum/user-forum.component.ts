import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../authentication/authentication.service';


@Component({
  selector: 'app-user-forum',
  templateUrl: './user-forum.component.html',
  styleUrls: ['./user-forum.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class UserForumComponent implements OnInit {
  private isLoggedIn: Boolean;
  user: Observable<firebase.User>;
  private userName: String;
  generalForums: FirebaseListObservable<any[]>;
  showAddForum = null;

// tslint:disable-next-line: max-line-length
  constructor(private router: Router, private generalForumService: UserForumsService, private database: AngularFireDatabase, public afAuth: AngularFireAuth, public authService: AuthenticationService) {
    this.generalForums = database.list('generalForums');
    this.user = afAuth.authState;
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        console.log(this.userName);
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
    const newForum = new UserForum(title, subject, body, date);
    this.generalForumService.addToGeneralForums(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
