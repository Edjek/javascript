/* --------------------------- FONCTIONS TABLEAUX --------------------------- */

// ? Attention la plupart des methodes modifient le tableau de départ

let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];

// Ajouter un ou plusieurs éléments à la fin du tableau
// Renvoie la nouvelle longueur du tableau
fruits.push('orange', 'cerise');
// Supprimer le dernier élément du tableau
// Renvoie l'élément supprimé.
fruits.pop();

// Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
fruits.unshift('abricot');
// Supprimer le premier élément du tableau
// Renvoie l'élément supprimé
fruits.shift();

// Renvoie une copie d'une partie du tableau
let newFruits = fruits.slice(1, 3);
console.log(newFruits);

// Modifier ou Ajouter  ou Supprimer un element dans le tableau
// Renvoie les éléments supprimés
// Ajouter
fruits.splice(1, 0, 'Mangue');
//Modifier
fruits.splice(2, 1, 'Melon');
// Supprimer
fruits.splice(2, 1);

// Réorganise le tableau de la fin vers le début
fruits.reverse();
console.log(fruits);

// Renvoie une copie du tableau sous forme string chainé par le caractère choisi
console.log(fruits.join(''));

// divise une chaîne de caractères dans un tableau et retourne le tableau.
let id    = 'rachid-edjekouane';
let array = id.split('-');
console.log(array);

// On peut concaténer deux tableaux (retourne un nouveau tableaux)
let   vegetables = ['patate douce', 'carotte', 'celeri'];
const food       = fruits.concat(vegetables);
console.log(`2 tableaux concaténés : ${food}`);
