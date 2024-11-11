// Créer la carte
const latitude = -21.463271535483727; // Coordonnée pour un point à Madagascar
const longitude = 47.10869726724957;
const zoomLevel = 17;

const map = L.map('map').setView([latitude, longitude], zoomLevel);

// Ajouter une couche de fond (par exemple, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

fetch('hopitalManarapenitra.geojson')
  .then(response => response.json())
  .then(data => {
    console.log('Données GeoJSON:', data); // Vérifie le contenu des données
    const geojsonLayer = L.geoJSON(data).addTo(map);
    map.fitBounds(geojsonLayer.getBounds()); // Ajuste la carte aux limites du GeoJSON
  })
  .catch(error => console.error('Erreur lors du chargement du GeoJSON:', error));


