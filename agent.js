const url = "agent.json" // l’url de la ressource de l’API
let fetchOptions = { method: 'GET' } // les options de fetch
// executer la req AJAX
fetch(url, fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => { // dataJSON = les données renvoyées
        console.log(dataJSON)
        let results = dataJSON.data;
        let txt = ''
        for (agent of results) {
            txt += `<section class="d-flex flex-row" id="${agent.displayName}">
            <div class="bg-primary text-white col-4" id="left">
            <h3 class="d-flex justify-content-center"><strong>${agent.displayName}</strong></h3>
            <img class="img-fluid" id="portrait" src="${agent.fullPortrait
                }"> </div> <div class="col-8 d-flex align-items-center" id="right">
                <div class="d-flex flex-column">
                <p class="text-start mb-3"> ${agent.description}</p>
                <p class="mb-3"><strong> ${agent.role.displayName}</strong></p>
                <div id="abilitie" class="d-flex flex-row"><img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[0].displayIcon}"><img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[1].displayIcon}"><img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[2].displayIcon}"><img class="img-fluid filter mx-4" id="abilitie" src="${agent.abilities[3].displayIcon}"></div>
                <div></div></section>`
            //Afficher agents
            document.getElementById('agents').innerHTML = txt
        }
    })
    .catch((error) => {
        console.log(error) // gestion des erreurs
    })

// executer la req AJAX
fetch(url, fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => {
        console.log(dataJSON)
      let agents = dataJSON.data
                let texteHTML = ""

                for (let agent of agents){
                    texteHTML += `<li><a class="dropdown-item" href="#${agent.displayName}">${agent.displayName}</a></li>`
                    
                }
                document.getElementById("agentmenu").innerHTML = texteHTML;

    })
  
    .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));
