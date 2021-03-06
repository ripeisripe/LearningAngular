import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export type User = {
  name: string,
  email:string,
  admin:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(public http: HttpClient) { }

  users: User[] = []; // tableau vide
  loggedUser:string = undefined;

  fetchUserList() {
    this.http.get<any[]>('http://localhost:8000/api/users')
      .subscribe((result: any[]) => {
        this.users = result;
      });
  }
  onClick(user:User) {
   console.log("You are logged: " + user.name + ".");
   this.loggedUser = user.name;
  }


}
