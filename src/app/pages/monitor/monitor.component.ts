import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [NzListModule, CommonModule],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent implements OnInit {
  ngOnInit(): void {
  }

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

}
