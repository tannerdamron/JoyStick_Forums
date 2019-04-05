import { Injectable } from '@angular/core';
import { UserForum } from './models/user-forum.model';
import { USERFORUMS } from './mock-userForums';

@Injectable()
export class UserForumsService {

  constructor() { }

  getUserForums() {
    return USERFORUMS;
  }

  getUserForumBySubject(userForumSubject: string){
    for (let i = 0; i <= USERFORUMS.length - 1; i++) {
      if (USERFORUMS[i].subject === userForumSubject) {
        return USERFORUMS[i];
      }
    }
  }

}
