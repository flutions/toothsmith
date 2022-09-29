import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  constructor() {}
  visible = false;
  ngOnInit(): void {}

  view(data: any) {
    this.visible = data.visible;
  }
}
