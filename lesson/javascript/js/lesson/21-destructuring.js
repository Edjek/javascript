/* --------------------------- DESTRUCTURING --------------------------- */

/*
    Déstructuration un tableau ou un objet signifie extraire des valeurs et les stocker dans des variables distinctes
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
        city: 'Bourg Palette',
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
