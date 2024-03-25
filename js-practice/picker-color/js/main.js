const select = document.querySelector('select')

//  Modifier la couleur de fond
select.addEventListener('change', function (e) {
    document.body.style.backgroundColor = e.target.value;
});

