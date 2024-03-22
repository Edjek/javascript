/* --------------------------- AJAX --------------------------- */

/*
    AJAX (Asynchronous JavaScript And XML) est une technique de développement web qui permet de récupérer des données depuis un serveur sans avoir à recharger la page.
    Cette technique est utilisée pour créer des applications web plus dynamiques et plus réactives.
    AJAX utilise les technologies suivantes :
        - HTML et CSS pour la présentation
        - JavaScript pour la logique
        - XML ou JSON pour le format de données
        - XMLHttpRequest pour échanger des données avec le serveur
*/

/*
    JSON (JavaScript Object Notation) est un format de données textuelles qui est facile à lire et à écrire pour les humains.
*/

// 1. Créer une requête AJAX avec XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('get', '/lesson/js-practice/ajax/js/data.json');
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    if (xhr.status >= 400 && xhr.status < 600) {
        console.log('Vous avez une erreur');
    }
};
xhr.send();

// 2. Créer une requête AJAX avec fetch
fetch('/lesson/js-practice/ajax/js/data.json')
    .then((response) => response.json()) // Convertir la réponse en JSON
    .then((data) => {
        data.forEach((element) => {
            console.log(element.id);
        });
    })
    .catch((error) => {
        console.error("Une erreur s'est produite :", error);
    });
