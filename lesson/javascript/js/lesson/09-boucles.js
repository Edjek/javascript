/* --------------------------- BOUCLES --------------------------- */

//Les boucles sont des structures permettant d'executer plusieurs fois  des instructions.

/*
    la principale différence entre "for" et "while" est que :
    "for" est généralement utilisé lorsque le nombre d'itérations est connu à l'avance,
    "while" est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique.
*/

// BOUCLE while(){...} (tant que)
let boucle = 5;

while (boucle <= 10) {
    console.log(boucle);
    boucle = boucle + 1;

    // SUCRE SYNTAXIQUE (version raccourci de boucle = boucle + 1)
    // boucle++;
    // boucle += 2;
}

// BOUCLE do{...}while() execute toujours une fois l'instruction avant de vérifier la condition

do {
    boucle++;
    console.log(boucle);
} while (boucle <= 10);

// Boucle for(){...} (pour
let combien = 9;

for (let i = 0; i < 10; i++) {
    let res = i * combien;
    console.log(
        `${res} la table de multiplication de ${combien} : ${combien} * ${i} = ${res}`
    );
}

console.log(res);
