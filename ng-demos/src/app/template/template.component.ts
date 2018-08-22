import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  users = ["Jack", "Jim", "Jane", "John"];

  constructor() { }

  getName() {
    return "Nicolas";
  }

  getContent() {
    return "No quote quote needed";
  }

  condition() {
    return this.users.length > 2;
  }

  getImpressiveStyle() {
    return 'impressive';
  }
  
  clearUsers() {
    this.users = [];
  }

  ngOnInit() {
  }

}
