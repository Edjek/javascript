/* --------------------------- CONDITION SWITCH --------------------------- */

/*
    L'instruction switch permet de réaliser des instructions 
    en fonction des differentes valeurs prises par une variable
    L’instruction switch représente une alternative à l’utilisation d’un if…else if…else
 */

let expr = 'banane';

switch (expr) {
    case 'orange':
        console.log("c'est plein de vitamines C");
        break;
    case 'pomme':
        console.log("c'est plein de peptides");
        break;
    case 'banane':
        console.log("c'est plein de potassium");
        break;
    case 'kiwi':
    case 'papaye':
        console.log("c'est un fruit exotique");
        break;
    default:
        console.log('je ne connais pas ce fruit');
        break;
}
