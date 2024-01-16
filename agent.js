const url = "agent.json"; // l’URL de la ressource de l’API
let fetchOptions = { method: 'GET' }; // les options de fetch

// executer la req AJAX
fetch(url, fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => { // dataJSON = les données renvoyées
        console.log(dataJSON)
        let results = dataJSON.data;
        let txt = '';
        for (let i = 0; i < results.length; i++) {
            const agent = results[i];

            // Utiliser une classe pour inverser l'ordre des éléments "left" et "right" alternativement
            const orderClass = i % 2 === 0 ? 'order-left' : 'order-right';

            txt += `<section id="${agent.sexe}"class="agent visible"><section class="d-flex ${orderClass}" id="${agent.displayName}">
            <div class="bg-primary text-white col-3" id="left">
            <h3 class="d-flex justify-content-center"><strong>${agent.displayName}</strong></h3>
            <img class="img-fluid" id="portrait" src="${agent.fullPortrait}"> </div>
            <div class="col-5 d-flex align-items-center" id="middle"><div class="d-flex flex-column">
                <p id="description" class="text-start mb-4 condensed-description"> ${agent.description}</p>
                <p id="role_agent" class="mb-4"><strong> ${agent.role.displayName}</strong></p>
                <div id="abilitie" class="d-flex flex-row">
                    <img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[0].displayIcon}" title="${agent.abilities[0].displayName}">
                    <img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[1].displayIcon}" title="${agent.abilities[1].displayName}">
                    <img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[2].displayIcon}" title="${agent.abilities[2].displayName}">
                    <img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[3].displayIcon}" title="${agent.abilities[3].displayName}">
                </div></div> 
            <div class="col-4" id="right"></div>
                </section></section>`;

            // Afficher agents
            document.getElementById('agents').innerHTML = txt;
        }
    })
    .catch((error) => {
        console.log(error); // gestion des erreurs
    });
// executer la req AJAX
fetch(url, fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => {
        console.log(dataJSON)
        let agents = dataJSON.data
        let texteHTML = ""

        for (let agent of agents) {
            texteHTML += `<li><a class="dropdown-item" href="#${agent.displayName}">${agent.displayName}</a></li>`

        }
        document.getElementById("agentmenu").innerHTML = texteHTML;

    })

    .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));

//filtrage par sexe et/ou role
function filterAgents(sexeFilter) {
    const agents = document.getElementById('agents').children;

    for (let i = 0; i < agents.length; i++) {
        const agent = agents[i];

        // Vérifiez si le sexe de l'agent correspond au filtre
        if (sexeFilter === 'Tous' || agent.id === sexeFilter) {
            agent.classList.remove('hidden');
            agent.classList.add('visible');
        } else {
            agent.classList.remove('visible');
            agent.classList.add('hidden');
        }
    }
}

// Appel initial pour afficher tous les agents
filterAgents('Tous');

