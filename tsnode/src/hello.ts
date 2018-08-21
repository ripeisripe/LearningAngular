console.log("Hello World!!");

let text:string = "Hello"; // forcer le typage
// let text = "Hello"; ici typescript comprend que c'est un string
// text = 44; marche pas car pas un string

// text = 44 as string; tres moche

// function must declare types of its inputs
export function double(x:number) {
    return 2 * x;
}

const result = double(text.length);

console.log(result);

// Arrays are typed already

function maxReducer(max:number, next:number) {
   return next > max ? next : max;
}
let max = [2, 10, -10, 13, 56].reduce(maxReducer); // find the max

// max = "toto"; pas possible car max forcement un nombre
console.log(max);

let array:string[] = []; // quand tableau vide il faut dire ce qu'il va prendre comme type

array.push("12", "15");
console.log(array);

// array.reduce(maxReducer); passe pas car c'est un string
// creation d'une classe
export class User {
    name:string;
    age:number = 18;
    city:City;

    eat() {
        console.log("Miam");
    }
}

class City {
    name:string;
}
// memoire modifier avec new
let peter = new User();
peter.name = "Peter";
let london = new City();
london.name = "London";
peter.city = london;

// creation d'un objet
let julia = {
    name: "Julia",
    age:24,
    city:{
        name: "Toulouse"
    },
    eat() {/* vite casse-pied, annoying...*/}
};
// declaration avec , et execution avec ;

peter = julia; // This is Duck Typing, if something say coincoin so its a Duck
// because julia has name, age, city, like to peter

console.log(peter);

