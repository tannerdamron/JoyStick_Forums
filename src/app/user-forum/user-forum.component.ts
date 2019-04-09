import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-forum',
  templateUrl: './user-forum.component.html',
  styleUrls: ['./user-forum.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class UserForumComponent implements OnInit {
  generalForums: FirebaseListObservable<any[]>;
  showAddForum = null;

  constructor(private router: Router, private generalForumService: UserForumsService, private database: AngularFireDatabase) {
    this.generalForums = database.list('generalForums');
  }

  ngOnInit() {
    this.generalForums = this.generalForumService.getGeneralForums();
  }

  goToDetailPage(clickedForum) {
    this.router.navigate(['generalForums', clickedForum.$key]);
  }

  addForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const newForum = new UserForum(title, subject, body, date);
    this.generalForumService.addToGeneralForums(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
