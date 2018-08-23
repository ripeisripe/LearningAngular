import { Component, OnInit } from '@angular/core';
import {MoodService} from "../mood.service";

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {

  constructor(public service:MoodService) { }

  ngOnInit() {
  }
  happy() {

    this.service.updateMood('happy');
  }

  soso() {

    this.service.updateMood('soso');
  }

  angry() {
    this.service.updateMood('angry');
  }
}
