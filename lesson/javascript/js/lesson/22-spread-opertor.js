/* --------------------------- SPREAD OPERATOR --------------------------- */

/*
    Le spread operator est un opérateur de décomposition qui permet de décomposer un objet ou un tableau en plusieurs éléments
    Il est utilisé pour étendre un objet ou un tableau en plusieurs éléments
*/

// ? Exemple avec un tableau
const fruits = ['pomme', 'banane', 'orange'];
console.log(fruits);
console.log(...fruits);

// ? Exemple avec un objet
const pokemon = {
    name: 'pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'Sacha',
        city: 'Bourg Palette',
    },
};
console.log(pokemon);
console.log({ ...pokemon });

// ? Exemple avec un tableau
const fruits1 = ['pomme', 'banane', 'orange'];
const fruits2 = ['fraise', 'kiwi'];
const allFruits = [...fruits1, ...fruits2];
console.log(allFruits);

// ? Exemple avec un objet
const pokemon1 = {
    name: 'pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'Sacha',
        city: 'Bourg Palette',
    },
};
const pokemon2 = {
    name: 'bulbizarre',
    type: 'plante',
    level: 20,
    trainer: {
        name: 'Sacha',
        city: 'Bourg Palette',
    },
};
const allPokemons = { ...pokemon1, ...pokemon2 };
console.log(allPokemons);

// ? Exemple avec un tableau

const fruits3 = ['pomme', 'banane', 'orange'];
const [fruit1, ...otherFruits] = fruits3;
console.log(fruit1);
console.log(otherFruits);

// ? Exemple avec un objet
const pokemon3 = {
    name: 'pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'Sacha',
        city: 'Bourg Palette',
    },
};
const { name, ...otherPokemon } = pokemon3;
console.log(name);
console.log(otherPokemon);

// ? Exemple avec une fonction
function displayFruits(fruit1, fruit2, fruit3) {
    console.log(fruit1, fruit2, fruit3);
}
const fruits4 = ['pomme', 'banane', 'orange'];
displayFruits(...fruits4);

// ? Exemple avec une fonction
function displayPokemon({ name, type, level }) {
    console.log(name, type, level);
}
const pokemon4 = { name: 'pikachu', type: 'electric', level: 25 };
displayPokemon(pokemon4);

const [fruit3, fruit2, ...otherFruits2] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(otherFruits);
