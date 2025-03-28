import { createMessageNode } from './messageUtils.js';

export const displayBMIMessage = (bmi) => {
    const messageText = `Votre IMC est de <strong>${bmi}</strong>`;
    createMessageNode({ selector: '#bmi-calculation', elem: 'output', text: messageText, className: 'message', position: 'beforeend' });

};

export const displayBMIDescriptionById = (bmi) => {
    const id = findDescription(bmi);
    displayBMIDescription(id);
}

const findDescription = (bmi) => {
    let id;
    if (bmi < 16.5) {
        id = 1;
    } else if (bmi < 18.5) {
        id = 2;
    } else if (bmi < 25) {
        id = 3;
    } else if (bmi < 30) {
        id = 4;
    } else if (bmi < 35) {
        id = 5;
    } else if (bmi < 40) {
        id = 6;
    } else {
        id = 7;
    }
    return id
}

const displayBMIDescription = (id) => {
    removeDescription();
    const description = document.querySelector(`.info-table tbody tr:nth-child(${id})`);
    description.style.color = BMIclassificationScale[id].color;
    description.classList.add('selected');
    createMessageNode({ selector: '.message', elem: 'span', text: `<span class="description-title">${BMIclassificationScale[id].name} :</span><br> ${BMIclassificationScale[id].description}`, className: 'description', position: 'beforeend' })
    const elem = document.querySelector('.description');
    animate(elem, 'fade-out');
}

export const removeDescription = () => {
    const descriptions = document.querySelectorAll(`.info-table tbody tr`);
    descriptions.forEach((description) => {
        description.classList.remove('selected');
        description.style.color = 'rgb(244, 244, 244)';
    })
}

const animate = (elem, className) => {
    if (elem.classList.contains(className)) {
        return; // l'animation est déjà en cours, ne rien faire
    }
    elem.classList.add(className);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            elem.classList.remove(className);
        });
    });
};

const BMIclassificationScale = {
    1: {

        name: "insuffisance pondérale sevère",
        description: "L'insuffisance pondérale est un indice de masse corporelle inférieur à 16 kg/m2. Elle peut être le signe d'une malnutrition, d'une anorexie mentale, d'une boulimie ou d'une maladie chronique.",
        color: "#487bb2"

    },
    2: {

        name: "insuffisance pondérale",
        description: "Votre poids est faible par rapport à votre taille. Discutez-en avec votre médecin traitant afin de vérifier l'absence de problème de santé.",
        color: "#44a5af"

    },
    3: {

        name: "poids normal",
        description: "Votre poids est « normal ». Il n'y a pas d'indication médicale à perdre du poids. La pratique d'une activité physique régulière et une alimentation équilibrée vous aideront à maintenir votre poids et votre santé.",
        color: "#44b8a7"

    },
    4: {

        name: "surpoids",
        description: "Vous êtes en surpoids. Afin d'éviter les problèmes de santé, votre principal objectif est de ne pas prendre de poids, en équilibrant votre alimentation et en augmentant votre activité physique au quotidien. Vous pouvez être aidé(e) par votre médecin traitant ou par une diététicienne agréée. Mais attention aux régimes trop restrictifs qui risquent, à terme, d'entraîner une reprise de poids plus importante (effet yoyo).",
        color: "#ecc44a"

    },
    5: {

        name: "obésité modérée",
        description: "Votre excès de poids correspond à une obésité de stade 1. Cet état peut avoir des conséquences sur votre santé. Il est important de faire un bilan de santé et d'être aidé(e) pour engager une perte de poids progressive. Votre médecin traitant et/ou l'équipe spécialisée du Centre Hospitalier de votre département pourra vous aider. Mais attention aux régimes trop restrictifs qui risquent, à terme, d'entraîner une reprise de poids plus importante (effet yoyo).",
        color: "#ed7364"

    },
    6: {

        name: "obésité sévère",
        description: "Votre excès de poids correspond à une obésité de stade 2. Cet état peut avoir des conséquences sur votre santé. Il est important de faire un bilan de santé et d'être aidé(e) pour engager une perte de poids progressive. Votre médecin traitant et/ou l'équipe spécialisée du Centre Hospitalier de votre département pourra vous aider. Mais attention aux régimes trop restrictifs qui risquent, à terme, d'entraîner une reprise de poids plus importante (effet yoyo).",
        color: "#d9584c"

    },
    7: {

        name: "obésité morbide ou massive",
        description: "Votre excès de poids correspond à une obésité de stade 3. Cet état peut avoir des conséquences sur votre santé. Il est important de faire un bilan de santé et d'être aidé(e) pour engager une perte de poids progressive. Votre médecin traitant et/ou l'équipe spécialisée du Centre Hospitalier de votre département pourra vous aider. Mais attention aux régimes trop restrictifs qui risquent, à terme, d'entraîner une reprise de poids plus importante (effet yoyo).",
        color: "#b84445"

    }
}
