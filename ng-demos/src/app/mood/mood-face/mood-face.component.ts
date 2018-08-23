import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mood-face',
  templateUrl: './mood-face.component.html',
  styleUrls: ['./mood-face.component.css']
})
export class MoodFaceComponent implements OnInit {

  @Input() mood: string

  constructor() {
  }

  ngOnInit() {
  }

  isHappy() {
    return this.mood === 'happy';
  }

  isAngry() {
    return this.mood === 'angry';
  }

  isSoso() {
    return this.mood === 'soso';
  }

}
