import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  backedField = "";
  user = "Nicolas";
  checked = false;
  options = [2, 50, 56, 89, 2.56, "Deux", "c"];
  formData={
    age:12,
    email:"jo@radis.com"
  }

 ingredients = [
    {name:"flour", good:false},
    {name:"eggs", good:true},
    {name:"milk", good:true},
    {name:"sugar", good:false},
    {name:"salt", good:false},
    {name:"rum", good:true},
    {name:"butter", good:false}
];
 selectedOption = 50;
 selectedIngredient = undefined;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formData);
    console.log("Sending super REST request");
  }
  isNicolas() {
    return this.user == "Nicolas"? "checked" : "";
  }

  getTypeof() {
    return typeof this.selectedOption;
  }

  onChange(){
    alert("You have change the ingredient: "
    + this.selectedIngredient.name);
  }

  isValid() {
    return this.formData.age > 0
      && this.formData.age <= 18
        && this.formData.email.includes('@');
  }

}
