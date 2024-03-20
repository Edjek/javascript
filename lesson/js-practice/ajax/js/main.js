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
