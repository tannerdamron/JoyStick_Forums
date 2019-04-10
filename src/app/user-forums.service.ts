import { Injectable } from '@angular/core';
import { UserForum } from './models/user-forum.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserForumsService {
  adminForums: FirebaseListObservable<any[]>;
  offTopicForums: FirebaseListObservable<any[]>;
  generalForums: FirebaseListObservable<any[]>;
  gameSpecificForums: FirebaseListObservable<any[]>;
  studioSpecificForums: FirebaseListObservable<any[]>;
  allPosts: FirebaseListObservable<any[]>;
  allPostsRef = firebase.database().ref(`allPosts`);

  constructor(private database: AngularFireDatabase) {
    this.adminForums = database.list('adminForums');
    this.offTopicForums = database.list('offTopicForums');
    this.generalForums = database.list('generalForums');
    this.gameSpecificForums = database.list('gameSpecificForums');
    this.studioSpecificForums = database.list('studioSpecificForums');
    this.allPosts = database.list('allPosts');
  }

  search(start, end): FirebaseListObservable<any> {
    return this.database.list('/allPosts', {
      query: {
        orderByChild: 'title',
        limitToFirst: 100,
        startAt: start,
        endAt: end
      }
    });
  }

  getAllPosts() {
    return this.allPosts;
  }

  addToAllPosts(newForum: UserForum) {
    this.allPosts.push(newForum);
  }
  getStudioSpecificForums() {
    return this.studioSpecificForums;
  }

  getUserStudioForumBySubject(userGameForumSubject: string) {
    return this.database.object('studioSpecificForums/' + userGameForumSubject);
  }

  addToStudioSpecificForum(newForum: UserForum) {
    this.studioSpecificForums.push(newForum);
  }

  getUserGameForums() {
    return this.gameSpecificForums;
  }

  getUserGameForumBySubject(userGameForumSubject: string) {
    return this.database.object('gameSpecificForums/' + userGameForumSubject);
  }

  addToGameSpecificForum(newForum: UserForum) {
    this.gameSpecificForums.push(newForum);
  }

  getGeneralForums() {
    return this.generalForums;
  }

  addToGeneralForums(newForum: UserForum) {
    this.generalForums.push(newForum);
  }

  getGeneralForumBySubject(userForumSubject: string) {
    return this.database.object('generalForums/' + userForumSubject)
  }

  getOffTopicForums() {
    return this.offTopicForums;
  }

  addOffTopicForum(newForum: UserForum) {
    this.offTopicForums.push(newForum);
  }

  getUserOffTopicForumBySubject(userGameForumSubject: string) {
    return this.database.object('offTopicForums/' + userGameForumSubject);
  }

  getAdminForums() {
    return this.adminForums;
  }

  addAdminForum(newForum: UserForum) {
    this.adminForums.push(newForum);
  }

}
