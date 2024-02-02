const url = "maps.json";
const url2 = "agent.json"; // fichier json
let fetchOptions = { method: 'GET' }; // les options de fetch

document.addEventListener('DOMContentLoaded', () => {
    // Attendez que le DOM soit complètement chargé avant d'ajouter des écouteurs d'événements.
    // Ajoutez des écouteurs d'événements à tous les boutons avec la catégorie correspondante
    document.getElementById('Haven').addEventListener('click', () => loadMaps('Haven'));
    document.getElementById('Icebox').addEventListener('click', () => loadMaps('Icebox'));
    document.getElementById('Pearl').addEventListener('click', () => loadMaps('Pearl'));
    document.getElementById('Sunset').addEventListener('click', () => loadMaps('Sunset'));
    document.getElementById('Lotus').addEventListener('click', () => loadMaps('Lotus'));
    document.getElementById('Breeze').addEventListener('click', () => loadMaps('Breeze'));
    document.getElementById('Bind').addEventListener('click', () => loadMaps('Bind'));
    document.getElementById('Fracture').addEventListener('click', () => loadMaps('Fracture'));
    document.getElementById('Split').addEventListener('click', () => loadMaps('Split'));
    document.getElementById('Ascent').addEventListener('click', () => loadMaps('Ascent'));
});



async function loadAgent() {
    try {
        const response = await fetch(url2);
        const dataJSON = await response.json();

        // Utilisation de la méthode map pour extraire displayName et displayIcon
        const agentsInfo = dataJSON.data.map(agent => ({
            displayName: agent.displayName,
            displayIcon: agent.displayIcon
        }));

        return agentsInfo;
    } catch (error) {
        console.error('Error loading the agent data:', error);
    }
}


function loadMaps(displayName) {
    fetch(url, fetchOptions)
        .then(response => response.json())
        .then(dataJSON => {
            // Récupérer les cartes avec le displayName spécifié
            let maps = dataJSON.data.filter(map => map.displayName === displayName);

            // Résoudre la promesse loadAgent
            loadAgent().then(agentsInfo => {
                console.log(agentsInfo);
                let txt = '';

                maps.forEach(map => {
                    // Utilisez une boucle pour itérer sur les saisons si c'est un tableau
                    txt += `<div class="${map.Agents.join(' ')} col-md-2">
                    <h2 class="text-center py-3">${map.displayName}</h2>
                    <img class="img-fluid" src="${map.splash}">
                </div>`;

                    // Vérifie si les noms des agents existent dans le tableau Agents du fichier maps.json
                    map.Agents.forEach(agentDisplayName => {
                        const matchingAgent = agentsInfo.find(agent => agent.displayName === agentDisplayName);
                        if (matchingAgent) {
                            txt += `<div class="col-md-2 d-flex flex-column justify-content-center align-items-center">
                                        <h4 class="text-center">${agentDisplayName}</h4>
                                        <img class="img-fluid w-50 text-center" src="${matchingAgent.displayIcon}">
                                    </div>`;
                        }
                    });


                });

                document.getElementById('agentmaps').innerHTML = txt;
            });

        })
        .catch(error => {
            console.error('Error loading the maps data:', error);
        });
}





fetch(url, fetchOptions)
    .then((response) => { return response.json(); })
    .then((dataJSON) => {
        let results = dataJSON.data;
        let txt = '';

        for (map of results) {
            txt += `
            <div class="${map.saison.join(' ')} col-md-4">
                <h2 id="${map.displayName}" class="text-center py-3">${map.displayName}</h2>
                <img class="img-fluid" src="${map.splash}">
            </div>`;
        }


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

