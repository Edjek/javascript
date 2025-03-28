const button = document.querySelector('button');
const message = document.getElementById('fortune');
// The fortune responses
let responses = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
];
// Loading messages
let loading = ['Consulting the spirits...', 'Gazing into the depths of the future...', 'BRB, jumping into my time machine...', 'I see... I see...'];

// button.addEventListener('click', () => {
//     randomIndex = Math.floor(Math.random() * (responses.length - 1));
//     setTimeout(() => (message.textContent += responses[randomIndex]), 2000);
// });

let timeout;

const randomMessage = () => {
    randomIndex = Math.floor(Math.random() * (loading.length - 1));
    clearTimeout(timeout);
    timeout = setTimeout(() => (message.textContent = loading[randomIndex]), 2000);
};

button.addEventListener('click', randomMessage);

const toc = document.querySelector('#table-of-contents');
const headings = document.querySelectorAll('h2');
let html = '';

for (const heading of headings) {
    html += `<li><a href="#${heading.id}">${heading.textContent}</a></li>`;
}
console.log(html);
toc.innerHTML = `<p><strong>Table of Contents</strong></p>
                <ol>${html}</ol>`;
