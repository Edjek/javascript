/* --------------------------- FONCTIONS --------------------------- */

/*
    Une fonction est bloc de code réutilisable
    qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus facile à gérer,
    elles permettent de réutiliser le même code plusieurs fois sans avoir à le copier coller
*/

// Déclaration de fonction
function greeting(firstName, lastName) {
    console.log('Bonjour ' + firstName + ' ' + lastName);
}

// Une fonction n'est executée que lorsqu'elle est appelée
greeting('rachid', 'edjekouane');

// Il est possible de sauvegarder une fonction dans une variable
// Fonction Anonyme
const multiplyNumbers = function (x, y) {
    return x * y;
};

const res = multiplyNumbers(12, 89);
console.log(res);

// Arrow function (fonction fléché)
// Nouvelle syntaxe introduite avec ES6 (2015)
const divideNumbers = (x, y) => {
    return x / y;
};

const result = divideNumbers(23, 90);
console.log(result);

// Il existe des façons encore plus concise d'écrire les fonctions fléchés
const doubleValue = (x) => x * 2;
result = doubleValue(45);
console.log(result);

// Exercices

// Fonction qui vérifie si un nombre est pair ou impair
const userInput = prompt('Quel est votre nombre ?');

const checkEvenOdd = (x) => {
    if (x % 2 == 0) {
        console.log('le nombre est pair');
    } else {
        console.log('le nombre est impair');
    }
};

checkEvenOdd(userInput);

// FizzBuzz Challenge
let userNumber = prompt('Donnez-moi un nombre !');

const fizzBuzzCheck = (x) => {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log('FizzBuzz');
    } else if (x % 5 == 0) {
        console.log('Buzz');
    } else if (x % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
};

fizzBuzzCheck(userNumber);
