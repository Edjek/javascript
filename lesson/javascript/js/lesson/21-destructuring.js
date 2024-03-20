/* --------------------------- DESTRUCTURING --------------------------- */

/*
    Déstructurater un tableau ou un objet signifie extraire des valeurs et les stocker dans des variables distinctes.
*/

// Déstructuration d'un tableau
const fruits = ['pomme', 'banane', 'orange', 'fraise', 'kiwi'];
const [fruit1, fruit2, fruit3, fruit4, fruit5] = fruits;
console.log(fruit1, fruit2, fruit3, fruit4, fruit5);

// Déstructuration d'un objet
const pokemon = {
    name: 'pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'Sacha',
        city: 'paris',
    },
};

const {
    name,
    type,
    level,
    trainer: { name: trainer },
} = pokemon;
console.log(name, type, level, trainer);

// Déstructuration d'un tableau dans une fonction
function displayFruits([fruit1, fruit2, fruit3, fruit4, fruit5]) {
    console.log(fruit1, fruit2, fruit3, fruit4, fruit5);
}
displayFruits(fruits);

// Déstructuration d'un objet dans une fonction
function displayPokemon({ name, type, level, trainer }) {
    console.log(name, type, level, trainer);
}

displayPokemon(pokemon);

// Exercices
// Déstructuration d'un tableau
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1, num2, num3, num4, num5);

// Déstructuration d'un objet
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'Paris',
    brothers: {
        brother1: 'Jack',
        brother2: 'James',
    },
};

// Exercice
const colors = ['rouge', 'vert', 'bleu'];
const [, , blue] = colors;
console.log(blue);

const user = {
    name: 'Alice',
    age: 30,
    country: 'France',
};

// Exercice
const { name: userAlice, age, country } = user;
console.log(userAlice, age, country);

// Exercice
const ironMan = {
    name: 'Tony Stark',
    alias: 'Iron Man',
    age: 40,
    powers: ['Powered Armor', 'Genius-Level Intellect', 'Wealth'],
    team: 'Avengers',
    isAlive: true,
    sayHello: function () {
        console.log(`I am ${this.alias}!`);
    },
};

// Accéder aux propriétés de l'objet Iron Man
console.log(ironMan.name); // Output: Tony Stark
console.log(ironMan.alias); // Output: Iron Man
console.log(ironMan.age); // Output: 40
console.log(ironMan.powers); // Output: ["Powered Armor", "Genius-Level Intellect", "Wealth"]
console.log(ironMan.powers[0]); // Output: Powered Armor
console.log(ironMan.team); // Output: Avengers
console.log(ironMan.isAlive); // Output: true

// Appeler la méthode sayHello
ironMan.sayHello(); // Output: I am Iron Man!

const {
    name: ironManName,
    alias,
    age: ironManAge,
    powers,
    team,
    isAlive,
} = ironMan;

function displayIronMan({ name, alias, powers, team, isAlive }) {
    if (isAlive) {
        console.log(
            `${name} alias : (${alias})  est expert en : ${powers.join()} et fait partie de l'équipe : ${team}`
        );
    }
}

displayIronMan(ironMan);

// Exercice
const avengers = [
    {
        name: 'Tony Stark',
        alias: 'Iron Man',
        age: 40,
        powers: ['Powered Armor', 'Genius-Level Intellect', 'Wealth'],
        team: 'Avengers',
        isAlive: true,
    },
    {
        name: 'Steve Rogers',
        alias: 'Captain America',
        age: 100,
        powers: ['Peak Human Strength', 'Master Tactician', 'Shield Mastery'],
        team: 'Avengers',
        isAlive: false,
    },
    {
        name: 'Bruce Banner',
        alias: 'Hulk',
        age: 45,
        powers: ['Superhuman Strength', 'Regenerative Healing Factor'],
        team: 'Avengers',
        isAlive: true,
    },
    {
        name: 'Natasha Romanoff',
        alias: 'Black Widow',
        age: 35,
        powers: ['Expert Spy', 'Martial Artist'],
        team: 'Avengers',
        isAlive: false,
    },
];

// Afficher les avengers vivants avec leurs alias, leurs pouvoirs et leur équipe
for (const avenger of avengers) {
    const { name, alias, powers, team, isAlive } = avenger;
    if (isAlive) {
        console.log(
            `${name} alias : (${alias})  est expert en : ${powers.join()} et fait partie de l'équipe : ${team}`
        );
    }
}

console.log(powers);
