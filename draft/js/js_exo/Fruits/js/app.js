let listLiens = document.querySelectorAll('a'),
    select = document.querySelector('select'),
    afficherPriceByKilo = document.getElementById('afficherPrixKilo');

//* Je créer et je rempli les champs OPTIONS du SELECT à partir des fruits existants dans la liste ul li
for (let lien of listLiens) {
    let opt = document.createElement('option');

    opt.value = lien.getAttribute('value');
    opt.text = lien.innerText;
    select.add(opt);

    //* J'affiche le prix au kilo quand un Fruit est selectionné
    lien.addEventListener('click', function (e) {
        e.preventDefault();
        afficherPriceByKilo.value = lien.getAttribute('value') + ` euros/kilo (${lien.innerHTML})`;
    });
}

let prixFruit = listLiens[0].getAttribute('value');

//* Je recupére le prix du Fruit quand on le selectionne dans la liste deroulante
select.addEventListener('change', function (e) {
    prixFruit = e.target.value;
    return prixFruit;
});

let calculer = document.getElementById('calculer'),
    choixPoids = document.getElementById('choixPoids'),
    afficher = document.getElementById('divMessage');

//* Je procède au calcul quand on appuye sur le bouton Calculer , j'affiche un message si le kilo n'est pas selectionné
calculer.addEventListener('click', function (e) {
    e.preventDefault();
    if (isNaN(choixPoids.value) || choixPoids.value == '') {
        afficher.innerHTML = 'Selectionnez un poids';
    } else {
        let prix = choixPoids.value * prixFruit;
        afficher.innerHTML = prix.toFixed(2);
    }
});
