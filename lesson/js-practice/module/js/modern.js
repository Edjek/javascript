/*
    ES6 (ECMAScript 2015) est une version importante de JavaScript 
    introduisant de nouvelles fonctionnalités et améliorations du langage.

    - const et let sont des nouveaux mots-clés pour déclarer des variables qui remplacent var.
    - map(), reduce() et filter() sont des méthodes de tableaux qui permettent de transformer et de filtrer les données.
    - Les fonctions fléchées (() => {}) sont une nouvelle syntaxe pour définir des fonctions courtes et anonymes.
    - Les modules sont une nouvelle syntaxe pour organiser et importer/exporter des fonctions et des variables entre fichiers JavaScript.
    - class est une nouvelle syntaxe pour définir des classes et des objets avec des propriétés et des méthodes.
*/

const userList = [
    { gender: 'M', name: 'John', salary: 35000 },
    { name: 'Jade', gender: 'F', salary: 42000 },
    { name: 'Joe', gender: 'M', salary: 32000 },
    { name: 'Jacky', gender: 'F', salary: 38000 },
    { gender: 'F', name: 'Jane', salary: 45000 },
    { gender: 'M', name: 'Michael', salary: 40000 },
    { name: 'Jennifer', gender: 'F', salary: 50000 },
    { name: 'James', gender: 'M', salary: 37000 }
];

// `for()`
for (let i = 0; i < userList.length; i++) {
    // console.log(userList[i].name);
}

// `for(...of...)`
for (let user of userList) {
    for (let key in user) {
        // console.log(key + ' ' + user[key]);
    }
}

// `forEach()` : Cette méthode permet d'itérer sur chaque élément d'un tableau
// Et d'exécuter une fonction pour chaque élément. 
userList.forEach((user) => {
    // console.log(user.name);
})

// `filter()` : Cette méthode permet de créer un nouveau tableau 
// En ne conservant que les éléments du tableau d'origine qui satisfont une condition spécifiée dans une fonction.
export const userGender = userList.filter((user) => {
    return user.gender === 'M'
})

export const userSalary = userList.filter((user) => {
    return user.salary >= 35000 && user.gender === 'M'
})

// `map()` : Cette méthode permet de créer un nouveau tableau
// En appliquant une fonction à chaque élément du tableau d'origine.
export const userAugmentation = userList.map((user) => {
    return user.salary + 2000
})

// `reduce()` : Cette méthode permet de réduire un tableau 
// A une seule valeur en appliquant une fonction à chaque élément du tableau.
export const totalSalary = userList.reduce((acc, user) => {
    return acc + user.name
}, 0)
