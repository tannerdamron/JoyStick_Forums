import { Component } from '@angular/core';
import { UserForum } from '../models/user-forum.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-forum',
  templateUrl: './user-forum.component.html',
  styleUrls: ['./user-forum.component.css']
})
export class UserForumComponent {
  constructor(private router: Router) { }

  forums: UserForum[] = [
    new UserForum('New Sword & Shield sucks???', 'Pokemon', 'Mannnnnn, are they really gonna do this?!', '3-5-2019'),
    new UserForum('3D Hit Boxes in Smash', 'Super Smash Bros.', 'What\'s the deal with all the misses due to 3D hitboxes', '2-12-2018'),
    new UserForum('Cheat Codes in 2019?!', 'Cheat Codes', 'Like do they exist anymore, all this anti-cheat client is boring. I guess we have mods now but still....', '4-4-2019')
  ];

  goToDetailPage(clickedForum: UserForum) {
    this.router.navigate(['forums', clickedForum.subject]);
  }
}
