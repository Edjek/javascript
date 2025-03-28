export const createMessageNode = ({ selector, elem, text, className, position }) => {
    removeMessage(`.${className}`);
    const parentElement = document.querySelector(selector);
    const message = document.createElement(elem);
    message.classList.add(className);
    message.innerHTML = text;
    parentElement.insertAdjacentElement(position, message);
}

export const removeMessage = (elem) => {
    const clearElem = document.querySelector(elem);
    if (clearElem) {
        clearElem.remove();
    }
}
