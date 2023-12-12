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
            txt += `<section id="${agent.displayName}"><p> ${agent.displayName}</p>
            <img src="${agent.fullPortrait
                }"></section>`
            //Afficher agents
            document.getElementById('agents').innerHTML = txt
        }
    })
    .catch((error) => {
        console.log(error) // gestion des erreurs
    })
