import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-off-topic-forums',
  templateUrl: './off-topic-forums.component.html',
  styleUrls: ['./off-topic-forums.component.css'],
  providers: [UserForumsService]
})
export class OffTopicForumsComponent implements OnInit {
  offTopicForums: UserForum[] = [];

  constructor(private router: Router, private userOffTopicForumsService: UserForumsService) { }

  ngOnInit() {
    this.offTopicForums = this.userOffTopicForumsService.getOffTopicForums();
  }

  goToOffTopicDetailPage(clickedForum: UserForum) {
    this.router.navigate(['offTopicForums', clickedForum.subject]);
  }

}
