const url = "maps.json"; // fichier json
const url2 = "agent.json"; // fichier json
let fetchOptions = { method: 'GET' }; // les options de fetch


// Charger le fichier maps.json
fetch(url, fetchOptions)
  .then(response => response.json())
  .then(dataJSON => {
    // Traitement des données de maps.json
    console.log('Données de maps.json:', dataJSON);

    // Charger le fichier agent.json
    return fetch(url2, fetchOptions);
  })
  .then((response) => { return response.json(); })
  .then((dataJSON) => {
    // Traitement des données de agent.json
    console.log('Données de agent.json:', dataJSON);

    let results = dataJSON.data;
        let txt = '';

        for (map of results) {
            txt += `<div class="${map.saison.join(' ')}">
                <h2 class="text-center py-3">${map.displayName}</h3>
                <img class="img-fluid" src="${map.splash}">
            </div>`;
        }
    document.getElementById('maps').innerHTML = txt;

    const button9 = document.getElementById('all');
    const button8 = document.getElementById('s8');
    const button7 = document.getElementById('s7');
    const button6 = document.getElementById('s6');
    const button5 = document.getElementById('s5');
    const button4 = document.getElementById('s4');
    const button3 = document.getElementById('s3');
    const button2 = document.getElementById('s2');
    const button = document.getElementById('s1');
  })
  .catch(error => {
    console.error('Erreur lors du chargement des fichiers JSON', error);
  });


fetch(url, fetchOptions)
    .then((response) => { return response.json(); })
    .then((dataJSON) => {
        let results = dataJSON.data;
        let txt = '';

        for (map of results) {
            txt += `
            <div class="${map.saison.join(' ')} col-md-4">
                <h2 class="text-center py-3">${map.displayName}</h3>
                <img class="img-fluid" src="${map.splash}">
            </div>`;}
        

        document.getElementById('maps').innerHTML = txt;

        const input9 = document.getElementById('all');
        const input8 = document.getElementById('s8');
        const input7 = document.getElementById('s7');
        const input6 = document.getElementById('s6');
        const input5 = document.getElementById('s5');
        const input4 = document.getElementById('s4');
        const input3 = document.getElementById('s3');
        const input2 = document.getElementById('s2');
        const input = document.getElementById('s1');

        const trie = document.querySelectorAll(`#maps div`);

        input.addEventListener('click', function (event) {
            console.log(trie)
            console.log(input)
            for (const div of trie) {

                const classes = div.classList;

                if (classes.contains('acte1')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input2.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte2')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input3.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte3')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input4.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte4')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input5.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte5')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input6.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte6')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input7.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte7')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input8.addEventListener('click', function (event) {
            for (const div of trie) {
                const classes = div.classList;

                if (classes.contains('acte8')) {
                    div.style.display = 'block';
                    console.log("hidden");
                }
                else { div.style.display = 'none'; }
            }
        });

        input9.addEventListener('click', function (event) {
            for (const div of trie) {
                div.style.display = 'block';
            }
        });

    })
    .catch((error) => {
        console.log(error);
    });

//filtre ouverture

const ouvrir = document.getElementById('filter-button');
const filtres = document.getElementById('filter-container');
const filter = document.querySelector('.filters');

ouvrir.addEventListener('click', function (e) {
    filter.classList.toggle('filters--active');
    console.log(filter);
    e.stopPropagation();
});

window.onclick = function () {
    filter.classList.remove("filters--active");
};


