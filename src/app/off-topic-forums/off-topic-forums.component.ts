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
  offTopicForums: FirebaseListObservable<any[]>;
  showAddForum = null;

  constructor(private router: Router, private userOffTopicForumsService: UserForumsService, private database: AngularFireDatabase) {
    this.offTopicForums = database.list('offTopicForums');
  }

  ngOnInit() {
    this.offTopicForums = this.userOffTopicForumsService.getOffTopicForums();
  }

  goToOffTopicDetailPage(clickedForum) {
    this.router.navigate(['offTopicForums', clickedForum.$key]);
  }

  addForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const newForum = new UserForum(title, subject, body, date);
    this.userOffTopicForumsService.addOffTopicForum(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
