
let fetchOptions = { method: 'GET' } // les options de fetch
// executer la req AJAX
fetch('agent.json', fetchOptions)
    .then((response) => { return response.json() })
    .then((dataJSON) => {
        console.log(dataJSON)
      let agents = dataJSON.data
                let texteHTML = ""

                for (let agent of agents){
                    texteHTML += `<li><a class="dropdown-item" href="agent.html/#${agent.displayName}">${agent.displayName}</a></li>`
                    
                }
                document.getElementById("agentmenu").innerHTML = texteHTML;

    })
  
    .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));