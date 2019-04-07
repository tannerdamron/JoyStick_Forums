import { Component, OnInit, Injectable } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-studios-forums',
  templateUrl: './studios-forums.component.html',
  styleUrls: ['./studios-forums.component.css'],
  providers: [UserForumsService]
})
@Injectable()

export class StudiosForumsComponent implements OnInit {
  studioSpecificForums: FirebaseListObservable<any[]>;
  showAddForum = null;

  constructor(private router: Router, private studioSpecificForumsService: UserForumsService, private database: AngularFireDatabase) {
    this.studioSpecificForums = database.list('studioSpecificForums');
  }

  ngOnInit() {
    this.studioSpecificForums = this.studioSpecificForumsService.getStudioSpecificForums();
  }


  goToDetailPage(clickedForum) {
    this.router.navigate(['studioSpecificForums', clickedForum.$key]);
  }

  addForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const newForum = new UserForum(title, subject, body, date);
    this.studioSpecificForumsService.addToStudioSpecificForum(newForum);
    this.showAddForum = null;
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }
}
