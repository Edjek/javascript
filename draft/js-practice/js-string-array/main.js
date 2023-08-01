let fruits = ['banane', 'pomme', 'cerise', 'ananas'];
let animals = ['cat', 'dog', 'wolf', 'fish'];
let notes = [12, 2, 15, 18];
let id = 'rachid-edjekouane';
let objet = {
    name: 'rachid',
    age: 39,
};

console.log(fruits.slice(0, 2));
console.log('id: ', id.split('-'));
console.log(fruits.join('-'));
console.log(fruits);
console.log(fruits.splice(0, 2));
console.log(fruits);

function somme(a, b) {
    return a + b;
}
console.log('somme(2, 3): ', somme(2, 3));

const add = (a, b) => {
    return a + b;
};
console.log('add(5,5): ', add(5, 5));

const sum = (a, b) => a + b;
console.log('sum(5,5): ', sum(5, 5));

const ajout = (a) => ++a;
console.log('ajout(5): ', ajout(5));

for (let key in objet) {
    console.log(key);
}

let { name, age } = objet;
console.log(name, age);

const a = 1;
const obj = { a };
console.log(obj);

// animals.map((animal) => console.log(animal));
// console.log(animals);

// animals.forEach((animal, index, tab) => console.log(animal, index, tab));

const animalO = animals.filter((animal) => animal.includes('o'));
console.log(animalO);

const result = notes.reduce((acc, note) => acc + note);
console.log('moyenne: ', result / notes.length);

console.log('tri: ', animals.sort());
console.log('animals.reverse(): ', animals.reverse());

console.log(notes.sort((a, b) => b - a));

const body = document.querySelector('body');
const div = document.createElement('div');
div.style.color = 'pink';
div.classList.add('test');
div.innerHTML = '<h2>Salut</h2>';
body.appendChild(div);

const getURL = async (URL) => await fetch('cat.jpg').then((result) => result);

console.log(getURL);
