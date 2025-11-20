const apiKey = '20dde9fb225b2fa6bfd9f6989f437ba3';
const ville = 'Niort';  const pays = 'FR';      


const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville},${pays}&appid=${apiKey}&units=metric&lang=fr`;


fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de récupération des données');
    }
    return response.json();  
  })
  .then(data => {
    
    const temperature = data.main.temp;  
    const humidite = data.main.humidity; 
    const vent = data.wind.speed;        
    const date = new Date(data.dt * 1000); 

    
    document.getElementById('temperature').textContent = `Température : ${temperature} °C`;
    document.getElementById('humidite').textContent = `Humidité : ${humidite}%`;
    document.getElementById('vent').textContent = `Vent : ${vent} km/h`;
    document.getElementById('date').textContent = `Dernière mise à jour : ${date.toLocaleString()}`;
  })
  .catch(error => {
    
    console.error('Erreur :', error);
    document.getElementById('temperature').textContent = "Erreur de récupération des données.";
    document.getElementById('humidite').textContent = "";
    document.getElementById('vent').textContent = "";
    document.getElementById('date').textContent = "";
  });
