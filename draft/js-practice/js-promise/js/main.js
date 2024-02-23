const btnJob = document.getElementById('btn-job');
const gitHubForm = document.getElementById('github-form');
const gitHubResult = document.getElementById('github-result');
const candidat = {
    isProgrammer: false,
    isCool: true,
};

btnJob.addEventListener('click', applyToJob);

async function applyToJob() {
    console.log('la decision est en cours...');
    try {
        const result = await startDecisionProcess();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

function startDecisionProcess() {
    return new Promise((resolve, reject) => {
        console.log("Recruteur - je reçois d'autres candidats");
        setTimeout(() => {
            if (candidat.isProgrammer && candidat.isCool) {
                resolve('Recruteur - Bienvenue dans notre entreprise');
            } else {
                reject('Recruteur - désolé vous avez échoué');
            }
        }, 2000);
    });
}

console.log('Après la function applyToJob');

gitHubForm.addEventListener('submit', searchGithub);

function searchGithub(e) {
    e.preventDefault();
    const account = gitHubForm.elements[0].value;
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
}
