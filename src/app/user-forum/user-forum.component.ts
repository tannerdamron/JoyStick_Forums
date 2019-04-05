import { Component } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-user-forum',
  templateUrl: './user-forum.component.html',
  styleUrls: ['./user-forum.component.css'],
  providers: [UserForumsService]
})
export class UserForumComponent {
  constructor(private router: Router, private userForumService: UserForumsService) { }

  forums: UserForum[];

  goToDetailPage(clickedForum: UserForum) {
    this.router.navigate(['forums', clickedForum.subject]);
  }
}
