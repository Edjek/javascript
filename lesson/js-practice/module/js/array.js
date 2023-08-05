/*
    ES6 (ECMAScript 2015) est une version importante de JavaScript 
    introduisant de nouvelles fonctionnalités et améliorations du langage.

    map(), reduce(), filter(), find(), et every() sont des méthodes de tableaux 
    qui permettent de transformer, filtrer et rechercher des données.
    
    - map() permet de transformer chaque élément d'un tableau en un nouvel élément.
    - reduce() permet de réduire les éléments d'un tableau en une seule valeur.
    - filter() permet de sélectionner les éléments d'un tableau qui répondent à un critère.
    - find() permet de rechercher le premier élément d'un tableau qui répond à un critère.
    - every() permet de vérifier si tous les éléments d'un tableau répondent à un critère.
*/

let numbers = [1, 2, 3, 4, 5];

// `forEach()` : Cette méthode permet d'itérer sur chaque élément d'un tableau et d'exécuter une fonction pour chaque élément. 
numbers.forEach((number) => {
    console.log(number += 5);
});
console.log(numbers);

// `map()` : Cette méthode permet de créer un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.
let squares = numbers.map((number) => {
    return number * number;
});
console.log(squares);

// `filter()` : Cette méthode permet de créer un nouveau tableau en ne conservant que les éléments du tableau d'origine qui satisfont une condition spécifiée dans une fonction.
let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers);

// `reduce()` : Cette méthode permet de réduire un tableau à une seule valeur en appliquant une fonction à chaque élément du tableau.
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum);

// `find()` : Cette méthode permet de trouver le premier élément du tableau qui satisfait une condition spécifiée dans une fonction.
let firstEvenNumber = numbers.find((number) => {
    return number % 2 === 0;
});
console.log(firstEvenNumber);

// `every()` : Cette méthode renvoie `true` si tous les éléments du tableau satisfont une condition spécifiée dans une fonction. Sinon, elle renvoie `false`.
let allEvenNumbers = numbers.every((number) => {
    return number % 2 === 0;
});
console.log(allEvenNumbers);