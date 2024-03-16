/*
    ------------------------------------
    Découverte de la manipulation du DOM
    ------------------------------------
*/

/*
    En JavaScript, il existe plusieurs propriétés
    pour accéder et modifier les éléments HTML sélectionnés dans le DOM.
    Voici quelques-unes des propriétés les plus couramment utilisées :
*/

// -------------------------- Selecteurs --------------------------

const container = document.querySelector('#container');
const title = document.querySelector('h1');
const paragraphes = document.querySelectorAll('p');

// -------------------------- Propriétés CSS --------------------------

container.style.width = '50%';
container.style.margin = '50px auto';
container.style.padding = '30px';
container.style.boxShadow = '4px 8px 8px #0003';
container.style.borderRadius = '5px';
title.style.color = '#333';
title.style.textAlign = 'center';
title.style.textTransform = 'uppercase';
title.innerHTML = 'Le javascript en pratique <em>modifié par le js</em>';

// -------------------------- Attributs --------------------------

title.setAttribute('title', 'Je suis un title');
console.log(title.getAttribute('title'));
title.removeAttribute('title');
// title.setAttribute('class', 'title-css')

// -------------------------- Class --------------------------

title.classList.add('title', 'txt-red');
title.classList.remove('toto');
title.classList.toggle('super-titre');

// Retourne true si l'element possède la classe
// Sinon false
console.log(title.classList.contains('tutu'));

// En plus de `SetAttribut()` on peut manipuler certains attributs
// Avec des propriétés et des méthodes spécifiques
const image = document.querySelector('img');
image.src = 'img/chaton.jpg';

const link = document.querySelector('a');
link.setAttribute('target', '_blank');
link.href = 'https://www.google.com';

const input = document.querySelector('input');
input.value = 'js =>input.value';

// -------------------------- Creation d'element --------------------------

const span = document.createElement('span');
span.textContent = 'coucou, je suis une span crée par mon utilisateur';
span.classList.add('txt-red');
// Ajoute l'élément à la fin
container.append(span);
// Ajoute l'élément au début
container.prepend(span);
// Supprime l'élément
span.remove();

const p = container.querySelector('p');
// Ajoute l'élément parent avant l'élément enfant
console.log(p.parentElement);

// -------------------------- Evenements --------------------------

// e.target = l'élément html sur lequel on a reellement cliqué
container.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'pink';
    console.log(e.screenX);
});
