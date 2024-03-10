const applyJob = document.querySelector('#btn-job');
const candidat = {
    isProgrammer: true,
    isCool: true,
};

applyJob.addEventListener('click', async function () {
    console.log('la decision est en cours...');
    try {
        const result = await startDecisionProcess();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
});

function startDecisionProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (candidat.isProgrammer && candidat.isCool) {
                resolve('Recruteur - Bienvenue dans notre entreprise');
            } else {
                reject('Recruteur - désolé vous avez échoué');
            }
        }, 2000);
        console.log("Recruteur - je reçois d'autres candidats");
    });
}

console.log('Après la function applyToJob');

// Github API
const gitHubForm = document.querySelector('#github-form');
const gitHubResult = document.querySelector('#github-result');

gitHubForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const account = document.querySelector('#account').value;
    fetch(`https://api.github.com/users/${account}`)
        .then((data) => data.json())
        .then(
            (jsonData) =>
                (gitHubResult.innerHTML = `<pre><code>${JSON.stringify(
                    jsonData,
                    null,
                    4
                )}</pre></code>`)
        )
        .catch((err) => console.log(err));
});
