import { Injectable } from '@angular/core';
import { UserComment } from './models/user-comment.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CommentsService {
  generalForumComments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.generalForumComments = database.list('generalForums/comments');
  }

  getGeneralForumComments(userGameForumSubject: string) {
    return this.database.object('generalForums/' + userGameForumSubject + '/comments');
  }
}
