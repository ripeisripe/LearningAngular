import { Component, OnInit } from '@angular/core';

type Ingredient = {
  name:string,
  done:boolean
}
@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  ingredients:Ingredient[] = [
    {name:"flour", done:false},
    {name:"eggs", done:false},
    {name:"milk", done:false},
    {name:"sugar", done:false},
    {name:"salt", done:false},
    {name:"rum", done:false},
    {name:"butter", done:false}
];
    Done = [];

  constructor() { }

  toggle(i:Ingredient) {
    i.done = !i.done;
  }

  isDone(i:Ingredient) {
    return i.done;
  }
  ngOnInit() {
  }

}
