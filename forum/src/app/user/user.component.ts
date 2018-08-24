import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() name :string
  @Input() admin:string
  @Input() email:string
  @Input() user:User

  constructor() { }

  ngOnInit() {
  }

}
