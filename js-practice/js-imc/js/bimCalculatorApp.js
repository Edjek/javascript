import { bmiCalculate } from './bmiCalculator.js';
import { displayBMIDescriptionById, displayBMIMessage, removeDescription } from './bmiDisplay.js';
import { isFormValid, getCleanedFormValues } from './bmiValidation.js';
import { removeMessage } from './messageUtils.js';

const form = document.forms.bmicalculation;

const handleFormSubmit = (e) => {
    e.preventDefault();

    removeDescription()
    removeMessage('.description');

    const { weight, height } = getCleanedFormValues(form);

    if (isFormValid({ weight, height })) {
        const bmi = bmiCalculate({ weight, height });
        displayBMIMessage(bmi);
        displayBMIDescriptionById(bmi);
    }
}

export const init = () => {
    form.addEventListener("submit", handleFormSubmit);
};
