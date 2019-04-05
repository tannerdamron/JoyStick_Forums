import { Injectable } from '@angular/core';
import { UserForum } from './models/user-forum.model';
import { USERFORUMS, USERGAMEFORUMS, OFFTOPICFORUMS, STUDIOFORUMS } from './mock-userForums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserForumsService {
  adminForums: FirebaseListObservable<any[]>;
  offTopicForums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.adminForums = database.list('adminForums');
    this.offTopicForums = database.list('offTopicForums');
  }

  getOffTopicForums() {
    return this.offTopicForums;
  }

  addOffTopicForum(newForum: UserForum) {
    this.offTopicForums.push(newForum);
  }

  getUserOffTopicForumBySubject(userGameForumSubject: string) {
    for (let i = 0; i <= OFFTOPICFORUMS.length - 1; i++) {
      if (OFFTOPICFORUMS[i].subject === userGameForumSubject) {
        return OFFTOPICFORUMS[i];
      }
    }
  }

  getAdminForums() {
    return this.adminForums;
  }

  addAdminForum(newForum: UserForum) {
    this.adminForums.push(newForum);
  }

  getUserForums() {
    return USERFORUMS;
  }

  getUserForumBySubject(userForumSubject: string) {
    for (let i = 0; i <= USERFORUMS.length - 1; i++) {
      if (USERFORUMS[i].subject === userForumSubject) {
        return USERFORUMS[i];
      }
    }
  }

  getUserGameForums() {
    return USERGAMEFORUMS;
  }

  getUserGameForumBySubject(userGameForumSubject: string) {
    for (let i = 0; i <= USERGAMEFORUMS.length - 1; i++) {
      if (USERGAMEFORUMS[i].subject === userGameForumSubject) {
        return USERGAMEFORUMS[i];
      }
    }
  }

  getStudioForums() {
    return STUDIOFORUMS;
  }

  getUserStudioForumBySubject(userGameForumSubject: string) {
    for (let i = 0; i <= STUDIOFORUMS.length - 1; i++) {
      if (STUDIOFORUMS[i].subject === userGameForumSubject) {
        return STUDIOFORUMS[i];
      }
    }
  }

}
