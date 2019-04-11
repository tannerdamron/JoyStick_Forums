import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../authentication/authentication.service';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [UserForumsService]
})
export class SearchResultsComponent implements OnInit {
  gameSpecificForums: FirebaseListObservable<any[]>;
  offTopicForums: FirebaseListObservable<any[]>;
  studioSpecificForums: FirebaseListObservable<any[]>;
  generalForums: FirebaseListObservable<any[]>;
  allForums: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  private isLoggedIn: Boolean;
  private userName: String;
  open = false;

  constructor(public afAuth: AngularFireAuth, public authService: AuthenticationService, private forumsService: UserForumsService, private database: AngularFireDatabase, private router: Router) {
    this.generalForums = database.list('generalForums');
    this.offTopicForums = database.list('offTopicForums');
    this.gameSpecificForums = database.list('gameSpecificForums');
    this.studioSpecificForums = database.list('studioSpecificForums');
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
    this.gameSpecificForums = this.forumsService.getUserGameForums();
    this.offTopicForums = this.forumsService.getOffTopicForums();
    this.studioSpecificForums = this.forumsService.getStudioSpecificForums();
    this.generalForums = this.forumsService.getGeneralForums();
  }

  goToGeneralDetailPage(clickedForum) {
    this.router.navigate(['generalForums', clickedForum.$key]);
  }

  goToOffTopicDetailPage(clickedForum) {
    this.router.navigate(['offTopicForums', clickedForum.$key]);
  }

  goToGameSpecificDetailPage(clickedForum) {
    this.router.navigate(['gameSpecificForums', clickedForum.$key]);
  }

  goToStudioSpecificDetailPage(clickedForum) {
    this.router.navigate(['studioSpecificForums', clickedForum.$key]);
  }

}
