import { Injectable } from '@angular/core';
import { UserForum } from './models/user-forum.model';
import { USERFORUMS, USERGAMEFORUMS, OFFTOPICFORUMS, STUDIOFORUMS } from './mock-userForums';

@Injectable()
export class UserForumsService {

  constructor() { }

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

  getOffTopicForums() {
    return OFFTOPICFORUMS;
  }

  getUserOffTopicForumBySubject(userGameForumSubject: string) {
    for (let i = 0; i <= OFFTOPICFORUMS.length - 1; i++) {
      if (OFFTOPICFORUMS[i].subject === userGameForumSubject) {
        return OFFTOPICFORUMS[i];
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
