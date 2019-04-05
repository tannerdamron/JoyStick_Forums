import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    if (this.open === false) {
    document.getElementById('mySidenav').style.width = '250px';
    this.open = true;
    } else {
      document.getElementById('mySidenav').style.width = '0';
      this.open = false;
    }
  }
}
