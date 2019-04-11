import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable()
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  private isLoggedIn: Boolean;
  private userName: String;
  open = false;
  lastKeypress: number = 0;
  constructor(public afAuth: AngularFireAuth, public authService: AuthenticationService) {
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

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
