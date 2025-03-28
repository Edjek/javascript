import { createMessageNode } from './messageUtils.js';

export const isFormValid = ({ height, weight }) => {
    const isHeightNaN = Number.isNaN(height);
    const isWeightNaN = Number.isNaN(weight);
    let message;

    if (height === '' || weight === '' || height === 0 || weight === 0) {
        message = 'Merci de rentrer votre poids et votre taille';
    }

    if (isHeightNaN || isWeightNaN) {
        message = 'Merci de rentrer une taille et un poids corrects';
    }

    if (message) {
        createMessageNode({ selector: '.bmi-calculation', elem: 'output', text: message, className: 'message', position: 'beforeend' });
        return false;
    }

    return true;
}

export const getCleanedFormValues = (form) => {
    form.height.value = form.height.value.replace(',', '.');
    form.weight.value = form.weight.value.replace(',', '.');
    const height = Number(form.height.value);
    const weight = Number(form.weight.value);

    return {
        height,
        weight
    }
}
