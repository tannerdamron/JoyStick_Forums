import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserForum } from '../models/user-forum.model';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-game-specific-forums-details',
  templateUrl: './game-specific-forums-details.component.html',
  styleUrls: ['./game-specific-forums-details.component.css'],
  providers: [UserForumsService]
})
export class GameSpecificForumsDetailsComponent implements OnInit {
  userForumSubject: string;
  userForumToDisplay: UserForum;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userForumsService: UserForumsService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userForumSubject = urlParameters['subject'];
    });
    // this.userForumToDisplay = this.userForumsService.getUserGameForumBySubject(this.userForumSubject);
  }

}
