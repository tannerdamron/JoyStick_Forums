import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserForum } from '../models/user-forum.model';
import { UserForumsService } from '../user-forums.service';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-off-topic-forums-details',
  templateUrl: './off-topic-forums-details.component.html',
  styleUrls: ['./off-topic-forums-details.component.css'],
  providers: [UserForumsService]
})
export class OffTopicForumsDetailsComponent implements OnInit {
  userForumSubject: string;
  userForumToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userForumsService: UserForumsService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userForumSubject = urlParameters['subject'];
    });
    this.userForumToDisplay = this.userForumsService.getUserOffTopicForumBySubject(this.userForumSubject);
  }

}
