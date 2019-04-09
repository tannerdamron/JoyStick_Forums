import { Injectable } from '@angular/core';
import { UserComment } from './models/user-comment.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CommentsService {
  comments: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.comments = database.list('comments');
  }

  getComments() {
    return this.comments;
  }

  addCommentToThread(newComment: UserComment) {
    this.comments.push(newComment);
  }
}
