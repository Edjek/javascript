/* --------------------------- OBJECTS --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
    firstName: 'Rachid',
    lastName: 'EDJEKOUANE',
    age: 40,
    education: ['algorithmique', 'html', 'git', 'javascript'],
    occupation: {
        name: 'formateur',
        hour: 35,
    },
    getIdentification: function () {
        return `Je m'appelle ${this.firstName} ${this.lastName} `;
    },
};

// Pour acceder à la propriété d'un objet
console.log(person.firstName);
console.log(person.occupation.name);
console.log(person.getIdentification());

// Pour modifier la valeur d'une propriété d'un objet
person.age = 41;

// Objet car
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    features: ['Air Conditioning', 'Power Windows', 'Bluetooth'],
    owner: {
        name: 'John Doe',
        age: 30,
    },
    start: function () {
        console.log('The car is starting.');
    },
    drive: function () {
        console.log('The car is in motion.');
    },
    honk: function () {
        console.log('Beep beep!');
    },
};

// Objet sangoku
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

// Utilisation de l'objet car
console.log(`Owner: ${car.owner.name}`);
console.log(`Year: ${car.year}`);
console.log('Features:', car.features);

car.start();
car.drive();
car.honk();

// On peut également acceder à une propriété d'un objet grace aux crochet et à sa clé en guise de valeur
console.log(car['model']);

// Boucle `for(...in..){}` car les objets sont des énumérables
for (let key in car) {
    console.log(car[key]);
}
