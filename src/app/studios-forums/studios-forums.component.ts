import { Component, OnInit } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studios-forums',
  templateUrl: './studios-forums.component.html',
  styleUrls: ['./studios-forums.component.css']
})
export class StudiosForumsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  studioForums: UserForum[] = [
    new UserForum('Valve releases Half Life 3?', 'Valve', 'haha nope', '3-5-2017'),
    new UserForum('BorderLands 3 soon', '2K Games', 'This looks so goooood!', '4-4-2018')
  ];
}
