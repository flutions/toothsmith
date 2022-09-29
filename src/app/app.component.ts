import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toothsmith';
  width = window.screen.width;
  ngOnInit() {
    console.log('test');
  }
}
