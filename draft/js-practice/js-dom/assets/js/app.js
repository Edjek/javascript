// SELECTEURS
// document.querySelector('body').style.background = 'green';

// Click Event
const response = document.querySelector('#response');
const box = document.querySelector('.box');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');

btn1.addEventListener('click', () => {
    response.classList.add('visible');
    response.style.background = 'red';
});

btn2.addEventListener('click', () => {
    response.classList.add('visible');
    response.style.background = 'red';
});

btn3.addEventListener('click', () => {
    response.classList.add('visible');
    response.style.background = 'green';
});

// -----------------------------------------------------------------
// Mouse Event
// -----------------------------------------------------------------
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.top = e.pageY + 'px';
    mousemove.style.left = e.pageX + 'px';
});

window.addEventListener('mousedown', () => {
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});

window.addEventListener('mouseup', () => {
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
});

box.addEventListener('mouseenter', () => {
    box.style.background = 'rgb(0, 0, 0, 0.6)';
});

box.addEventListener('mouseout', () => {
    box.style.background = 'pink';
});

response.addEventListener('mouseover', () => {
    response.style.transform = 'rotate(-5deg)';
});

// -----------------------------------------------------------------
// Keypress Event
// -----------------------------------------------------------------
const keypressContainer = document.querySelector('.keypress-container');
const key = document.getElementById('key');

const play = (key) => {
    const audio = new Audio();
    audio.src = `assets/audio/${key}.mp3`;
    audio.play();
};

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if (e.key == 'b') {
        keypressContainer.style.background = 'black';
    } else if (e.key == 'p') {
        keypressContainer.style.background = 'pink';
    } else if (e.key == 's') {
        play(e.key);
    } else {
        keypressContainer.style.background = '#333';
    }
});

// -----------------------------------------------------------------
// Scroll Event
// -----------------------------------------------------------------
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.style.top = 0;
    } else {
        nav.style.top = '-50px';
    }
});

// -----------------------------------------------------------------
// Form Event
// -----------------------------------------------------------------
const inputName = document.getElementById('name');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cgv.checked) {
        console.log(pseudo, language);
        document.getElementById('accept-cgv').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Votre language informatique préféré : ${language}</h4>`;
    } else {
        document.getElementById('accept-cgv').textContent = 'Veuillez accepter les CGV !';
    }
});

// -----------------------------------------------------------------
// Load Event
// -----------------------------------------------------------------
window.addEventListener('load', () => {
    console.log('une fois que la page est chargé (load)');
});

// -----------------------------------------------------------------
// Foreach Event
// -----------------------------------------------------------------

const boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.style.background = '#999';
    });
});

// Avec getElementsByClassName on ne pas utiliser forEach sans transformer en array le selecteur
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

// [...boxes].forEach((box) => {
//     box.addEventListener('click', () => {
//         box.style.background = '#999';
//     });
// });

// -----------------------------------------------------------------
// addEventListener vs onClick (déconseillé)
// -----------------------------------------------------------------
document.body.onclick = () => {
    console.log('salut');
};
document.body.onclick = () => {
    console.log('onclick() le dernier efface les autres');
};

// -----------------------------------------------------------------
// Bubbling => fin (par defaut le mode est sur Bubling)
// -----------------------------------------------------------------
document.body.addEventListener(
    'click',
    () => {
        console.log('click 1');
    },
    false
);

// -----------------------------------------------------------------
// Usecapture =>
// -----------------------------------------------------------------
document.body.addEventListener(
    'click',
    () => {
        console.log('click 2');
    },
    true
);

// -----------------------------------------------------------------
// Stop Propagation
// -----------------------------------------------------------------
const clickEvent = document.querySelector('.click-event');

// clickEvent.addEventListener('click', (e) => {
//     alert('test');
//     e.stopPropagation();
// });

// -----------------------------------------------------------------
// BOM (Browser Object Model)
// -----------------------------------------------------------------
// window.open('http://google.com', 'cours', 'height=300', 'width=400');
// window.close();
// window.alert('hello');
// prompt('hello');
// confirm('hello');
// setTimeout(()=>{}, 2000);
// setInterval(()=>{}, 2000);
// location;
// onload;

// -----------------------------------------------------------------
// Confirm
btn2.addEventListener('click', () => {
    let answer = prompt('Qui est tu ?');
    clickEvent.innerHTML += `<h3>${answer}</h3>`;
    console.log(answer);
});

// -----------------------------------------------------------------
// setTimeout(() => {
//     let answer = prompt('Qui est tu ?');
// }, 5000);

// -----------------------------------------------------------------
// setInterval(() => {
//     document.body.innerHTML += `<div class="box"><h2>Une nouvelle box</h2></div>`;
// }, 5000);

// let interval = setInterval(() => {
//     document.body.innerHTML += `<div class="box"><h2>Une nouvelle box</h2></div>`;
// }, 5000);

// document.body;
// addEventListener('click', (e) => {
//     clearInterval(interval);
//     console.log('interval stoppé!');
//     // e.target.remove();
// });

// -----------------------------------------------------------------
// Location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
// location.replace('http://lequipe.fr');

// -----------------------------------------------------------------
// Navigator
console.log(navigator.userAgent);

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 18,
};

function success(pos) {
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

// -----------------------------------------------------------------
// History
// history.back()
// history.go(-2);

// -----------------------------------------------------------------
window.addEventListener('mousemove', (e) => {
    nav.style.setProperty('--x', e.layerX + 'px');
    nav.style.setProperty('--y', e.layerY + 'px');
});

// -----------------------------------------------------------------
// Console
// -----------------------------------------------------------------
// https://www.commentcoder.com/console-log/

const lang = ['php', 'js', 'html'];
const utilisateur = {
    id: 1,
    nom: 'Jean Duboix',
};

console.time('test1');
setTimeout(() => {
    console.clear();

    console.groupCollapsed('console');
    console.log('un log');
    console.info('une info');
    console.warn('un warning');
    console.error('une erreur');
    console.groupEnd;

    console.group('console.count');
    for (let i = 0; i < 4; i++) {
        console.count('boucle ' + i);
    }
    console.groupEnd;

    console.group('console.dir, console.table');
    console.table(lang);
    console.table({ utilisateur });
    console.dir(utilisateur);
    console.groupEnd;

    console.timeEnd('test1');
}, 3000);
