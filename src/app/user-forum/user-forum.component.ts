import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-user-forum',
  templateUrl: './user-forum.component.html',
  styleUrls: ['./user-forum.component.css'],
  providers: [UserForumsService]
})
export class UserForumComponent implements OnInit {
  forums: UserForum[];

  constructor(private router: Router, private userForumService: UserForumsService) { }

  ngOnInit() {
    this.forums = this.userForumService.getUserForums();
  }

  goToDetailPage(clickedForum: UserForum) {
    this.router.navigate(['forums', clickedForum.subject]);
  }
}
