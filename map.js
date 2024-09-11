// Initialisation de la carte
var map = L.map('map').setView([43.3047, -1.464], 13);

// Ajout de tuiles de fond de carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fonction pour récupérer les données OSM et afficher les marqueurs
function fetchAndDisplayData(overpassQuery) {
  // ... (votre code pour effectuer la requête et afficher les résultats)
}

// Appel de la fonction avec une requête Overpass exemple
fetchAndDisplayData('[out:json];node["amenity"="drinking_water"](around:1000,43.3047,-1.464);out;');
