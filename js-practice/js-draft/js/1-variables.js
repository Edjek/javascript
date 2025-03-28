// string (chaine de caractère)
const first_name = 'Rachid';

let last_name = 'Edjekouane';
last_name = 'coucou';

var old_variable = 'je suis une variable';

console.log(first_name, last_name, old_variable);
console.log(firs);

// number (nombre)
const numeric = 20;
const numeric2 = 20;

console.log(numeric + numeric2);

const message = `Salut
quoi de neuf ?`;

console.log(message);

// boolean (booleen)
const vrai = true;
const faux = false;
const vide = null;

// array (tableau)
const notes = [13, 12, 9, 0];
console.log(notes[1]);

// object (objet)
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 39,
    note: [12, 14, 18],
    job: {
        name: 'Informaticien',
        hours: 35,
    },
    [first_name]: 'Doux',
};

console.log(person.firstname, person.note[2], person.Rachid);
console.log(person.firstname.length);
console.log(typeof first_name);
console.log(typeof numeric);
console.log(typeof notes);
console.log(typeof person);

// let greet_one = "Hello"
// let greet_two = "World!!!"
// console.log(greet_one)
// for(let i=0;i<1000000000;i++){
// }
// console.log(greet_two);

let greet_one = 'Hello';
let greet_two = 'World!!!';
console.log(greet_one);
setTimeout(function () {
    console.log('Asynchronous');
}, 10000);
console.log(greet_two);
