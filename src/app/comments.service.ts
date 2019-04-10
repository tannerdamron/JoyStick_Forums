import { Injectable } from '@angular/core';
import { UserComment } from './models/user-comment.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CommentsService {
  generalForumComments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    
  }

  getGeneralForumComments(threadKey: string) {
    return this.database.list(`generalForums/` + threadKey + `/comments`);
  }
}
