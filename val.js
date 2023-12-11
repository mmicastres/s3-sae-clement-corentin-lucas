fetch('agent.json')
    .then(response => response.json())
    .then(data => {
     
      console.log(data);
    })
    .catch(error => console.error('Erreur lors de la récupération du fichier JSON:', error));