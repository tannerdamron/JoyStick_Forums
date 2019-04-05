import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';
import { UserForumsService } from '../user-forums.service';

@Component({
  selector: 'app-games-forums',
  templateUrl: './games-forums.component.html',
  styleUrls: ['./games-forums.component.css'],
  providers: [UserForumsService]
})
export class GamesForumsComponent implements OnInit {
  gameForums: UserForum[] = [];

  constructor(private router: Router, private userGameForumsService: UserForumsService) {}

  ngOnInit() {
    this.gameForums = this.userGameForumsService.getUserGameForums();
  }


  goToGameSpecificDetailPage(clickedForum: UserForum) {
    this.router.navigate(['gameForums', clickedForum.subject]);
  }
}
