import { Component, OnInit, Input } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { USERFORUMS } from '../mock-userForums';

@Component({
  selector: 'app-add-forum',
  templateUrl: './add-forum.component.html',
  styleUrls: ['./add-forum.component.css']
})
export class AddForumComponent implements OnInit {
  @Input() USERFORUMS: UserForum[];
  showAddForum = null;
  addForum(title: string, subject: string, body: string) {
    let currentTime = new Date();
    let date = (currentTime.toString()).substr(0, 25);
    let newForum = new UserForum(title, subject, body, date);
    this.USERFORUMS.push(newForum);
  }

  showAddForumForm() {
    this.showAddForum = true;
  }

  hideAddForumForm() {
    this.showAddForum = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
