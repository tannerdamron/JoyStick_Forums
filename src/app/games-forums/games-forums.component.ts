import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-forums',
  templateUrl: './games-forums.component.html',
  styleUrls: ['./games-forums.component.css']
})
export class GamesForumsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gameForums: UserForum[] = [
    new UserForum('My theory on if Call of Duty is ever gonna live again', 'Call Of Duty', 'Probably not', '3-5-2016'),
    new UserForum('RuneScape General Discussion', 'Runescape', 'wack wack wack wack wack', '1-12-2018'),
    new UserForum('Halo Online General Discussion', 'Halo', 'Let\'s play a match today? Anyone? Leave a comment with your gamertag', '4-4-2019')
  ];

  goToDetailPage(clickedForum: UserForum) {
    this.router.navigate(['gameForums', clickedForum.subject]);
  }
}
