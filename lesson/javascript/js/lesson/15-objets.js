/* --------------------------- Objets --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
    firstName   : 'rachid',
    lastName    : 'edjekouane',
    notes       : [10, 12, 19, 20],
    getFirstName: function () {
        return this.firstName;
    },
    job: {
        name: 'Informaticien',
        hour: 35,
    },
    brother: {
        firstName: 'malik',
        lastName : 'edjekouane',
    },
};

// Pour acceder à la une propriété d'un objet
person.job.name = 'developpeur';

let message = `Bonjour je m'appelle ${person.firstName} j'ai eu ${person.notes[2]} à mon dernier devoir,
mon plus jeune frère s'appelle ${person.brother.firstName}`;
console.log(message);

// Ajoute la propriete adress à l'objet OU modifie sa valeur si elle existe déjà
person.adress = '2 rue guy de maupassant';
person.sport = 'climbing';

person.notes.push(123);
console.log(person.notes);

// Autre façon d'afficher la propriété d'un objet
let key = 'firstName';
console.log(person[key]);

const sangoku = {
    firstName   : 'san',
    lastName    : 'goku',
    children    : ['gohan', 'goten'],
    age         : 39,
    presentation: function () {
        return `Bonjour je m'appelle ${this.firstName} ${this.lastName} et jai ${this.children.length} enfants `;
    },
};

message = `${sangoku.presentation()} Ils s'appellent ${sangoku.children[0].toUpperCase()} et ${sangoku.children[1].toUpperCase()}`;
console.log(message);

for (let key in sangoku) {
    console.log(`${key} : ${sangoku[key]}`);
}
