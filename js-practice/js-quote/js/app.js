import { quotes } from './quotes.js';

const btn = document.querySelector('.btn');

function getQuote() {
    const quote = document.querySelector('#quote');
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = `<blockquote>${quotes[random].phrase}</blockquote> <span>'${quotes[random].rappeur}'</span>`;
}

getQuote();

btn.addEventListener('click', () => {
    getQuote()
});