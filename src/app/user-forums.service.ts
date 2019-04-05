import { Injectable } from '@angular/core';
import { UserForum } from './models/user-forum.model';
import { USERFORUMS } from './mock-userForums';

@Injectable()
export class UserForumsService {

  constructor() { }

  getUserForums() {
    return USERFORUMS;
  }

}
