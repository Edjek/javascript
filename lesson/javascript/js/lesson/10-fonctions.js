/* --------------------------- FONCTIONS --------------------------- */

/*
    Une fonction en JavaScript est un bloc de code réutilisable
    qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus faciles à gérer,
    et elles vous permettent également de réutiliser le même code plusieurs fois sans avoir à le copier et le coller.
*/

// Déclaration de fonction
function afficherMessage() {
    console.log('Bonjour, tout le monde !');
}

// Une fonction n'est executée que lorsqu'elle est appelée
afficherMessage();

// Déclaration de fonction avec 2 parametres
function add(x, y) {
    return x + y;
}

let resultat = add(7, 3);
console.log(resultat);

// Il est possible de sauvegarder une fonction dans une variable
// On les appelles des fonctions anonymes
const divide = function (x) {
    return x / 2;
};
divide(2);

// Il existe une nouvelle syntaxe (les fonctions fléchées)
// Elles permettent d'écrire plus simplement des fonctions anonymes
const multiply1 = (x) => {
    return x * x;
};
const multiply2 = (x) => x * x;
const multiply3 = x => x * x;
console.log(multiply3(12));

/*
    Créer une fonction
    Afficher 'Bonjour je m'appelle Rachid EDJEKOUANE
    Executer la fonction
*/
function helloUser() {
    console.log("Bonjour, je m'appelle Rachid EDJEKOUANE");
}
helloUser();

/*
    Créer une fonction qui prends 2 parametre
    Afficher 'Bonjour je m'appelle (Rachid) (EDJEKOUANE)
    Executer la fonction
*/
function helloUserWithParameterInConsole(firstName, lastName) {
    console.log(`Bonjour, je m'appelle ${firstName} ${lastName} `);
}
helloUserWithParameterInConsole('Benoit', 'Assam');

/*
    Créer une fonction qui prends 2 parametre
    Retourner 'Bonjour je m'appelle (Rachid) (EDJEKOUANE)
    Afficher dans la console ET afficher document.write()
*/
function helloUserWithParameter(firstName, lastName) {
    return `Bonjour, je m'appelle ${firstName} ${lastName} `;
}

let firstName = 'rachid';
let lastName = 'edjekouane';
let message = helloUserWithParameter(firstName, lastName);

console.log(message);
document.write(helloUserWithParameter(firstName, lastName));
