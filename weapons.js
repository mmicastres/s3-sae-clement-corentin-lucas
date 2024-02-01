let currentChart;

document.addEventListener('DOMContentLoaded', () => {
    // Attendez que le DOM soit complètement chargé avant d'ajouter des écouteurs d'événements.

    let currentChart; // Nous allons stocker le graphique actuel pour pouvoir le détruire avant d'en créer un nouveau

    // Ajoutez des écouteurs d'événements à tous les boutons avec la catégorie correspondante
    document.getElementById('poing').addEventListener('click', () => loadWeaponsByCategory('EEquippableCategory::Sidearm'));
    document.getElementById('mitrailleur').addEventListener('click', () => loadWeaponsByCategory('EEquippableCategory::SMG'));
    document.getElementById('pompe').addEventListener('click', () => loadWeaponsByCategory('EEquippableCategory::Shotgun'));
    document.getElementById('standard').addEventListener('click', () => loadWeaponsByCategory('EEquippableCategory::Rifle'));
    document.getElementById('sniper').addEventListener('click', () => loadWeaponsByCategory('EEquippableCategory::Sniper'));
    document.getElementById('lourd').addEventListener('click', () => loadWeaponsByCategory('EEquippableCategory::Heavy'));
});

function loadWeaponsByCategory(category) {
    const url = "weapons.json"; // l’URL de la ressource de l’API
    let fetchOptions = { method: 'GET' }; // les options de fetch

    fetch(url, fetchOptions)
        .then(response => response.json())
        .then(dataJSON => {
            let armes = dataJSON.data.filter(arme => arme.category === category); // Filtrez les armes par catégorie

            let datasets = armes.map(arme => {
                let couleur = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.3)`;

                return {
                    label: arme.displayName,
                    data: [
                        arme.weaponStats.fireRate || 0,
                        arme.weaponStats.magazineSize || 0,
                        arme.weaponStats.reloadTimeSeconds || 0,
                        arme.weaponStats.equipTimeSeconds || 0,
                        arme.weaponStats.firstBulletAccuracy || 0
                    ],
                    fill: true,
                    backgroundColor: couleur,
                    borderColor: couleur,
                    pointBackgroundColor: couleur,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: couleur
                };
            });

            // Créez le graphique radar avec les données filtrées
            const data = {
                labels: [
                    'Cadence de tir',
                    'Balles dans le chargeur',
                    'Temps de rechargement',
                    `Temps d'équipement`,
                    'Précision de la première balle'
                ],
                datasets: datasets
            };

            const config = {
                type: 'radar',
                data: data,
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0
                        }
                    },
                    responsive: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Comparaison des armes par catégorie'
                        }
                    }
                },
            };

            // Détruire le graphique actuel s'il existe
            if (currentChart) {
                currentChart.destroy();
            }

            // Créer un nouveau graphique
            const canvas = document.getElementById('visu');
            const ctx = canvas.getContext('2d');
            currentChart = new Chart(ctx, config);
        })
        .catch(error => {
            console.error('Error loading the weapons data:', error);
        });
}
