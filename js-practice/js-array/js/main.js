let objets = [
    { nom: "Montre intelligente", puissance: 250, prix: 3500 },
    { nom: "Aspirateur robot", puissance: 500, prix: 5500 },
    { nom: "Enceinte intelligente", puissance: 100, prix: 3000 },
    { nom: "Smartphone haut de gamme", puissance: 800, prix: 9000 },
    { nom: "Ordinateur portable gaming", puissance: 950, prix: 8500 },
    { nom: "Drone avec caméra", puissance: 400, prix: 6500 },
    { nom: "Caméra de surveillance", puissance: 200, prix: 4000 },
    { nom: "Console de jeux vidéo", puissance: 600, prix: 5500 },
    { nom: "Machine à expresso automatique", puissance: 150, prix: 4000 },
    { nom: "Tondeuse à gazon électrique", puissance: 800, prix: 7000 },
    { nom: "Pistolet à peinture électrique", puissance: 300, prix: 4500 },
    { nom: "Casque de réalité virtuelle", puissance: 200, prix: 6000 },
    { nom: "Imprimante 3D", puissance: 500, prix: 8000 },
    { nom: "Tablette graphique", puissance: 100, prix: 3500 },
    { nom: "Système de surveillance de la qualité de l'air", puissance: 50, prix: 5000 },
    { nom: "Haut-parleur Bluetooth portable", puissance: 30, prix: 3000 },
    { nom: "Lecteur de livre électronique", puissance: 5, prix: 3500 },
    { nom: "Machine à pop-corn automatique", puissance: 20, prix: 3000 },
    { nom: "Jumelles avec caméra intégrée", puissance: 50, prix: 4500 },
    { nom: "Robot de cuisine multifonction", puissance: 400, prix: 9000 }
];

// foreach : pour chaque élément du tableau, on exécute une fonction
objets.forEach(function (objet) {
    console.log(objet.nom + " : " + objet.puissance + " W");
});

// map : pour chaque élément du tableau, on exécute une fonction et on retourne un nouveau tableau
const res = objets.map(function (objet) {
    return objet.prix * 0.8;
});
// console.log(res);

// filter : pour chaque élément du tableau, on exécute une fonction et on retourne un nouveau tableau avec les éléments qui correspondent à la condition
const resultat = objets.filter(function (objet) {
    return objet.puissance < 100;
});
// resultat.forEach(function (objet) { console.log(objet.nom); });

// find : pour chaque élément du tableau, on exécute une fonction et on retourne le premier élément qui correspond à la condition
const resu = objets.find(function (objet) {
    return objet.puissance > 500;
});
console.log(resu);

// some : pour chaque élément du tableau, on exécute une fonction et on retourne true si au moins un élément correspond à la condition
const isOne = objets.some(function (objet) {
    return objet.puissance > 500;
});
console.log(isOne);

// every : pour chaque élément du tableau, on exécute une fonction et on retourne true si tous les éléments correspondent à la condition
const isAll = objets.every(function (objet) {
    return objet.puissance > 1;
});
console.log(isAll);

// reduce : pour chaque élément du tableau, on exécute une fonction et on retourne un résultat
const result = objets.reduce(function (total, objet) {
    return total + objet.prix;
}, 0);
console.log(result);

// includes : pour chaque élément du tableau, on exécute une fonction et on retourne true si l'élément est présent
const isPresent = objets.map(function (objet) {
    return objet.nom.includes("Montre");
});
console.log(isPresent);

let userList = [
    { nom: "Joe", gender: 'M', salary: 3500 },
    { nom: "Zack", gender: 'M', salary: 5500 },
    { nom: "Luck", gender: 'F', salary: 3000 },
    { nom: "Paul", gender: 'F', salary: 3000 }
];

const salaryMen = userList.filter(function (user) {
    return user.gender === 'M';
}).map(function (user) {
    return user.salary + 1000;
}).reduce(function (total, salary) {
    return total + salary;
}, 0);
console.log(salaryMen);
