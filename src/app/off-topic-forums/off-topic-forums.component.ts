import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';

@Component({
  selector: 'app-off-topic-forums',
  templateUrl: './off-topic-forums.component.html',
  styleUrls: ['./off-topic-forums.component.css']
})
export class OffTopicForumsComponent implements OnInit {
  offTopicForums: UserForum[] = [];
  constructor() { }

  ngOnInit() {
  }

}
