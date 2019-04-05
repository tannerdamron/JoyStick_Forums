import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-studios-forums',
  templateUrl: './studios-forums.component.html',
  styleUrls: ['./studios-forums.component.css'],
  providers: [UserForumsService]
})
export class StudiosForumsComponent implements OnInit {
  studioForums: UserForum[];

  constructor(private router: Router, private userOffTopicForumService: UserForumsService) { }

  ngOnInit() {
    this.studioForums = this.userOffTopicForumService.getStudioForums();
  }


  goToDetailPage(clickedForum: UserForum) {
    this.router.navigate(['studioForums', clickedForum.subject]);
  }
}
