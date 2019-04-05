import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserForumsService]
})
export class AdminComponent implements OnInit {

  constructor(private adminForumService: UserForumsService) { }

  ngOnInit() {
  }

  submitForum(title: string, subject: string, body: string) {
    const currentTime = new Date();
    const date = (currentTime.toString()).substr(0, 15);
    const newForum = new UserForum(title, subject, body, date);
    this.adminForumService.addAdminForum(newForum);
  }
}
