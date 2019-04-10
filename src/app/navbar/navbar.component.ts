import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserForumsService } from '../user-forums.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserForumsService]
})
@Injectable()
export class NavbarComponent implements OnInit {
  posts;
  startAt = new Subject();
  endAt = new Subject();
  allPosts: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  private isLoggedIn: Boolean;
  private userName: String;
  open = false;
  lastKeypress: number = 0;
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

  toggleNav() {
    if (this.open === false) {
    document.getElementById('mySidenav').style.width = '250px';
    this.open = true;
    } else {
      document.getElementById('mySidenav').style.width = '0';
      this.open = false;
    }
  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 200) {
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q+"\uf8ff");
    }
    this.lastKeypress = $event.timeStamp;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
