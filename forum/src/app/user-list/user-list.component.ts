import { Component, OnInit } from '@angular/core';
import {User, UserListService} from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  loggedUser:string = undefined;
  constructor(public service: UserListService) {
    this.service.fetchUserList();
  } // pour lier au service

  ngOnInit() {
  }

}
