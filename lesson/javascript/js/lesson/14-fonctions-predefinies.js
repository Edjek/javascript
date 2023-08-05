/* --------------------------- 14 - FONCTIONS PREDEFINIES --------------------------- */

const message = 'je suis un bout de texte';

console.log(message.length);

// Transformer du texte en majuscule
console.log(message.toUpperCase());

// Attention la variable d'origine n'est pas modifié
const messageUppercase = message.toUpperCase();

// Transformer du texte en minuscule
console.log(messageUppercase.toLowerCase());

// Convertir une chaîne de caractères en un nombre entier.
const entier = parseInt('42', 10);
console.log(entier); // affiche 42 dans la console

// Convertir une chaîne de caractères en un nombre décimal.
const prix = parseFloat('3.99');
console.log(prix); // affiche 3.99 dans la console
