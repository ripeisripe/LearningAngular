import { Component, OnInit } from '@angular/core';
import {MoodService} from "../mood.service";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor(public service:MoodService) { }

  ngOnInit() {
  }

  isHappy() {
    return this.service.mood === 'happy';
  }

  isSoso() {
    return this.service.mood === 'soso';
  }

  isAngry() {
    return this.service.mood === 'angry'
  }
}
