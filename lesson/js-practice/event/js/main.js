/*  ---------------------------------------------
    Evénements en JavaScript
    ---------------------------------------------   
    La méthode addEventListener() permet de définir un écouteur d'événement sur un élément HTML.
    Cet écouteur est appelé chaque fois que l'événement spécifié se produit sur l'élément.
    ---------------------------------------------
    La methode addEventListener() prend 2 paramètres:
    1. Le nom de l'événement (click, mouseover, mouseout, keyup, keydown, keypress, submit, change, ...)
    2. Une fonction callback qui sera appelée à chaque fois que l'événement se produit
*/

// Exécute la fonction lorsqu'il y a un événement de chargement sur la fenêtre 
// lorsque tous les éléments de la page sont chargés.
window.addEventListener('load', function () {
    const inputChange = document.querySelector('#input-change')
    const inputInput = document.querySelector('#input-input')
    const spanChange = document.querySelector('#span-change')
    const spanInput = document.querySelector('#span-input')

    // L'événement "change" en JavaScript est déclenché 
    // lorsqu'un élément de formulaire change de valeur. 
    inputChange.addEventListener('change', function () {
        spanChange.textContent = inputChange.value
    })
    // L'événement "input" en JavaScript est déclenché 
    // lorsqu'un élément de formulaire reçoit une entrée de l'utilisateur. 
    inputInput.addEventListener('input', function () {
        spanInput.textContent = inputInput.value
    })
})

// L'événement "DOMContentLoaded" en JavaScript est déclenché 
// lorsque la page HTML a été complètement chargée et analysée,
// Mais sans attendre que les feuilles de style, images et sous-documents aient fini de charger.
window.addEventListener('DOMContentLoaded ', function () {
})

// Nous agrandissons la fenêtre pour pouvoir visualiser le défilement.
const body = document.querySelector('body')
body.style.height = '1200px'

// L'événement "scroll" en JavaScript est déclenché chaque fois que l'utilisateur fait défiler la page web.
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        body.style.backgroundColor = 'pink'
    }
})

