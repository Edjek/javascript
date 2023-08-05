/* --------------------------- TABLEAUX --------------------------- */

/*
    Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utilisant des crochets [] et en y insérant les éléments séparés par des virgules.
*/

let week = [
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    'dimanche',
];

console.log(week);

// On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log(week[0]);

// De même pour modifier la valeur d'un tableau, je précise l'indice
week[1] = "on m'a modifie";
console.log(week);

// Pour connaitre la longueur d'un tableau nous pouvons utiliser la propriété .length
console.log(week.length);

// declarer un tableau de fruits banane, pomme, fraise, kiwi
let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];

// Pour itérer sur les valeurs d'un tableau nous pouvons utiliser la boucle for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Rendre parametrable une fonction acceptant un tableau en parametre et affichant chaque case du tableau
function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
displayArray(fruits);

// Les tableaux peuvent contenir des tableaux
// Ils peuvent être multidimensionnels
let notes = [
    [12, 19, 10],
    [9, 6, 5],
    [19, 100, 19],
];
// Pour acceder à un valeur bien penser à cibler l'index dans l'index
console.log(notes[0][1]);
