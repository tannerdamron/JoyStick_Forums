import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserForumsService } from '../user-forums.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [UserForumsService]
})
export class SearchResultsComponent implements OnInit {
  posts;
  startAt = new Subject();
  endAt = new Subject();
  allPosts: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  private isLoggedIn: Boolean;
  private userName: String;
  open = false;

  constructor(public afAuth: AngularFireAuth, public authService: AuthenticationService, private formsService: UserForumsService) {
    this.user = afAuth.authState;
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
    this.allPosts = this.formsService.getAllPosts();
    this.formsService.search(this.startAt, this.endAt).subscribe(posts => this.posts = posts)
  }

  search($event) {
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q+"\uf8ff");
  }

}
