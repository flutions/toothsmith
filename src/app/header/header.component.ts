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
  checked = false;
  header: any = document.getElementById('header');
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.currentTab = window.location.pathname.split('/')[1];
    // this.sticky = window.pageYOffset > this.header.offsetTop;
  }
  nav(data: any) {
    const height: any = document.getElementById(data)?.offsetHeight;
    console.log(height);

    document.getElementById('menu-btn')?.click();
    this.checked = false;
    document.getElementById(data)?.scrollIntoView();
    // window.scrollTo(0, height + 100);
  }

  // Open Close Navbar Menu on Click Burger
}
