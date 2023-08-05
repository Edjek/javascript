// Voici les principaux événements que vous pouvez écouter avec la méthode addEventListener() en  :

// click : se déclenche lorsqu'un élément est cliqué avec la souris ou le doigt sur un écran tactile
element.addEventListener('click', function () {
  // action à effectuer lors du clic
});

// mouseover : se déclenche lorsqu'un élément est survolé par la souris.
element.addEventListener('mouseover', function () {
  // action à effectuer lors du survol
});

// mouseout : se déclenche lorsqu'un élément n'est plus survolé par la souris.
element.addEventListener('mouseout', function () {
  // action à effectuer lorsque le survol se termine
});

// keydown : se déclenche lorsqu'une touche du clavier est enfoncée.
element.addEventListener('keydown', function (e) {
  // action à effectuer lors de l'appui sur une touche
  // pour connaître la touche enfoncée, on peut utiliser la propriété key de l'objet event
  console.log(e.key);
});

// submit : se déclenche lorsqu'un formulaire est soumis (par exemple, en cliquant sur le bouton "envoyer").
form.addEventListener('submit', function (e) {
  // action à effectuer lors de la soumission du formulaire
  e.preventDefault(); // pour éviter l'envoi du formulaire
});

// load : se déclenche lorsque la page ou une image est complètement chargée.
window.addEventListener('load', function () {
  // action à effectuer après le chargement complet de la page
});

// scroll : se déclenche lorsqu'un élément est fait défiler (par exemple, une page Web).
window.addEventListener('scroll', function () {
  // action à effectuer lors du défilement
});

// resize : se déclenche lorsque la taille de la fenêtre du navigateur est modifiée.
window.addEventListener('resize', function () {
  // action à effectuer lors du changement de taille de la fenêtre
});

