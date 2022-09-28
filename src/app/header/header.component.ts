import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentTab = 'home';
  viewTab = false;
  sticky = false;
  header: any = document.getElementById('header');
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.currentTab = window.location.pathname.split('/')[1];
    // this.sticky = window.pageYOffset > this.header.offsetTop;
  }

  // Open Close Navbar Menu on Click Burger
}
