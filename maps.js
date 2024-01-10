const url = "maps.json" // l’url de la ressource de l’API
let fetchOptions = { method: 'GET' } // les options de fetch
// executer la req AJAX
fetch(url, fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => { // dataJSON = les données renvoyées
        console.log(dataJSON)
        let results = dataJSON.data;
        let txt = ''
        for (map of results) {
            txt += `<section id="${map.displayName}">
            <div id="left">
            <h2 class="text-center py-3"> ${map.displayName}</h3>
            <img class="img-fluid" src="${map.splash
                }"> 
                </div></section>`
            //Afficher agents
            document.getElementById('maps').innerHTML = txt
        }
    })
    .catch((error) => {
        console.log(error) // gestion des erreurs
    })

    fetch(url, fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => {
        console.log(dataJSON)
      let maps = dataJSON.data
                let texteHTML = ""

                for (let map of maps){
                    texteHTML += `<li><a class="dropdown-item" href="#${map.displayName}">${map.displayName}</a></li>`
                    
                }
                document.getElementById("mapsmenu").innerHTML = texteHTML;

    })
  
    .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));
