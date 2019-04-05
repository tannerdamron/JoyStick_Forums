import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-off-topic-forums',
  templateUrl: './off-topic-forums.component.html',
  styleUrls: ['./off-topic-forums.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class OffTopicForumsComponent implements OnInit {
  offTopicForums: UserForum[] = [];
  firebaseOffTopicForums: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userOffTopicForumsService: UserForumsService, private database: AngularFireDatabase) {
    this.firebaseOffTopicForums = database.list('OFFTOPICFORUMS');
  }

  ngOnInit() {
    this.offTopicForums = this.userOffTopicForumsService.getOffTopicForums();
  }

  goToOffTopicDetailPage(clickedForum: UserForum) {
    this.router.navigate(['offTopicForums', clickedForum.subject]);
  }

}
