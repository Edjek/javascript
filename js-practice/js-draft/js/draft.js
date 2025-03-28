// Déclaration de variables
let tab = [
    ['pomme', 'banane', 'orange'],
    ['patate douce', 'carotte', 'poivron'],
    ['quiche', 'steack', 'poisson'],
];
let error;
let test = null;

// Boucle for (itération d'un tableau à 2 dimensions)
for (let i = 0; i < tab.length; i++) {
    let menu = `menu ${i} : `;
    for (let j = 0; j < tab.length; j++) {
        console.log(menu + tab[i][j]);
    }
}

tab.forEach((fruits) => {
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
});

// Empty string
let b = 0;
console.log(b);
if (b === 0) console.log("c'est nul");
else console.log("c'est bon");

// True, 0, ''
let vrai = '';
if (vrai == null) {
    console.log("c'est nul");
} else {
    console.log("c'est bon");
}

// Object in javascript
const person = {
    firstname: 'rachid',
    lastname: 'EDJEKOUANE',
    notes: [12, 11, 9, 14, 18],
    job: {
        name: 'Informaticien',
        hour: 35,
    },
    'les gens': 23,
};
console.log('Objet person lastname : ' + person['lastname']);
person.job.name = 'developpeur';
console.log('Objet person job.name : ' + person.job.name);
console.log('Objet person notes : ' + person.notes);
let key = 'firstname';
console.log('Objet person key firstname: ' + person[key]);
console.log('Objet person : ' + person['les gens']);

// Tous les types sont des objets en JS
console.log(typeof person.firstname);
console.log('object'.length);

function add(a, b) {
    return 2 * 20;
}

console.log('type : ' + typeof add);
console.log('type : ' + typeof key);
console.log('type : ' + typeof person);
console.log('type : ' + typeof tab);
console.log('type : ' + typeof vrai);
console.log('type : ' + typeof test);
console.log(tab.length);
console.log(243 % 2);

// Operateur ternaire
let age;
age == null ? console.log("c'est bon") : console.log('object');

let vide = 0;
let response = vide == false ? 'ok' : 'error';
console.log(response);

let ternaire = false;
let response2 = ternaire == 0 && 'ok';
console.log(response2);

// Concatenation ``
const greetHuman = (name = 'human', money) => `Hello ${name}, we come in peace! Do, you have ${money} euros`;
let nom;
console.log(greetHuman(nom, 23));

// Array Methods
const { notes } = person;
console.log(notes);
console.log('map ' + notes.map((el) => el + ' euros'));
console.log(
    'reduce : ' +
        notes.reduce((acc, curr) => {
            return acc + curr;
        })
);
console.log('filter : ' + notes.filter((el) => el >= 12));
console.log('normal : ' + notes);
console.log('sort : ' + notes.sort((a, b) => b - a));

// Function Arrow (this)
const person2 = {
    first: 'James',
    last: 'Quick',
    getName: () => {
        return console.log(`this : ${this}`);
    },
};
console.log(person2.getName());

// Event listener
document.querySelector('.container').addEventListener(
    'click',
    function (event) {
        console.log(event);
        // event.currentTarget.style.background ='red';
        event.target.style.background = 'red';
    },
    true
);

let group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],

    showList() {
        this.students.forEach((student) => console.log(this.title + ': ' + student));
    },
};

group.showList();
