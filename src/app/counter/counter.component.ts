import { Component, OnInit } from '@angular/core';
import {
  faCertificate,
  faCalendar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}
  badge_icon = faCertificate;
  calendar_icon = faCalendar;
  users_icon = faUsers;
  ngOnInit(): void {
    let counter = document.querySelectorAll('.counter');
    let arr = Array.from(counter);
    arr.map((item: any) => {
      let count: any = item.innerHTML;
      item.innerHTML = 0;
      let countNumber: any = 0;

      function counterUp() {
        item.innerHTML = countNumber++;
        if (countNumber > count) {
          clearInterval(stop);
        }
      }

      let stop = setInterval(() => {
        counterUp();
      }, item.dataset.speed / count);
    });
  }
}
