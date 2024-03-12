/* --------------------------- ARRAYS --------------------------- */

/*
    Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
    On peut créer un tableau en utlisant des crochets [] et en y insérants les éléments séparés par des virgules
*/

// Déclaration d'un tableau vide
const emptyArray = [];

const monthsInFrench = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
];

console.log(monthsInFrench);

// On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log(monthsInFrench[0]);
console.log(monthsInFrench[2]);

// Pour connaitre la longueur d'un element nous pouvons utiliser la propriété .length
console.log(monthsInFrench.length);

function displayMonthsInFrench() {
    for (let i = 0; i < monthsInFrench.length; i++) {
        console.log(monthsInFrench[i]);
    }
}
displayMonthsInFrench();
