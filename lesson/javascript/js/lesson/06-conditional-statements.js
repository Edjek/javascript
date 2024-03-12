/* --------------------------- CONDITIONAL STATEMENTS --------------------------- */

//  Les opérateurs de comparaison (==, === ,!=, !==, >, >=, <, <=)

// Le type booléen correspond à la valeur renvoyée lorsque l'on effectue un test sur des variables
// Si la condition est vraie (truthy), le bloc d'instruction est éxécuté
// Si la condition est fausse (falsy), le bloc est ignoré
const condition = 18;

if (condition >= 18) {
    console.log('Vous êtes majeur');
}

// Les opérateurs logiques OU (||) et ET (&&)

// Déclarer une variable qui contient un nombre (demandez à l'utilisateur)
// let response = prompt('Donnez-moi un nombre !');

// if (response % 3 == 0 && response % 5 == 0) {
//     console.log('Fizz');
// } else if (response % 5 == 0) {
//     console.log('buzz');
// } else if (response % 3 == 0) {
//     console.log('fizzbuzz');
// } else {
//     console.log(response);
// }

// response = prompt('donne moi un nombre');
console.log(typeof response);
// === vérifie à la fois la valeur et le type des valeurs comparées (opérandes)
// if (response === '12') {
//     console.log('bravo');
// } else {
//     console.log('faux');
// }

const animal = prompt('Quel est votre animal préféré?');

// if (animal == 'chien') {
//     console.log("vous etes quelqu'un de bien");
// } else if (animal == 'chat') {
//     console.log("Quelle drole d'idée");
// } else if (animal == 'poisson rouge') {
//     console.log('Je ne veux plus parler avec toi');
// } else {
//     console.log("je n'ai pas compris la reponse");
// }

switch (animal) {
    case 'chien':
        console.log("vous etes quelqu'un de bien");
        break;
    case 'chat':
        console.log("Quelle drole d'idée");
        break;
    case 'poisson rouge':
        console.log('Je ne veux plus parler avec toi');
        break;
    default:
        console.log("je n'ai pas compris la reponse");
}
