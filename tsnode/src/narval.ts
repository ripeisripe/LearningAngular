import {double} from "./hello"; // because we put export to the function double

class Animal {
    constructor(public name:string, public weight:number) {

    }
}

const lulu = new Animal("Cat", 7);

console.log(lulu);

class Narval extends Animal {
    constructor(public length: number) {
        super('Gerard', 400);
    }

    detect(object:any) {
        console.log(object);
    }
}

const gerard = new Narval(30);
gerard.name = "Toto";
console.log(gerard);
gerard.detect(lulu);

// Observable patter
// T is generic: see anything
// Generics: we make a paramater T for the type: the type can change
class Viewer <T>{

    viewable:T;

    view(thing:T) {
        this.viewable = thing;
    }
}

let viewer = new Viewer();
viewer.view(lulu);
console.log(viewer);
//viewer.view(42) no
viewer.view(gerard);


gerard.length = double(40);
console.log(gerard);
console.log("Here from narval.ts");

// backtick, for jump line without lost quote
// ${} interpolation
const lorem = `This
is 
on multiline
<html>
    <div>${gerard.name}</div>
</html> 
`; // write to navigator who will show it as HTML

console.log(lorem);

// quick shortcut for interface
// we define a new type which is a function
type Operation =  (x:number, y:number) => number;
// add is a function of type operation
let add:Operation = (x,y) => x + y;

console.log(add(12,15));

let div = (x:number, y:number) => x / y;

// Duck typing works for any Type, including functions
let myOperation:Operation = div;

// Splat operator
const people = ["Jim", "John", "Jack"];
const morePeople = people.push("Jules"); // push is mutative, not concat
const morePeople2 = people.concat("Jasmine");
console.log("People:", people);
console.log(morePeople);
console.log(morePeople2);
const morePeopleSexy = [...people, 'Jack', 'Joseph'];
console.log(morePeopleSexy); // work the same in ES2015



// With object: Only ES 2017
const house = {
    size:50,
    price:500000
};
let palace = {
    ...house, // house with employees 5, ... add employees
    employees:5
};
//same as:
// let samePalace = Object.assign({employee:5}, house);
console.log(palace);

const rental = {
    people, // shortcut for people:people,
    palace:palace, // could make the shortcut too here as people
    price:10000,
    days:7
};

// the word location is the location of the page, don't use it as name for a const or variable

console.log(rental);

// easy to create an annotation in js, real name is decoration, from python

