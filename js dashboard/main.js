const barCtx = document.getElementById('myChart').getContext('2d');
const pieCtx = document.getElementById('myPieChart').getContext('2d');

new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['licht', 'verwarming', 'overige stroom'],
    datasets: [{
      label: 'Energie verbruik',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
//button
const button = document.getElementById("js--button");
 
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
 
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
});


//chartjs

new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['30% paneel 1', '50%paneel2', '20%paneel3'],
    datasets: [{
      data: [30, 50, 20],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF4364', '#2592DB', '#E6B456']
    }]
  }
});



// lamp
const toggleLicht = document.getElementById("js--toggle");

toggleLicht.addEventListener("click", function() {
  if (toggleLicht.innerText === "aan") {
      toggleLicht.innerText = "uit";

  } else {
      toggleLicht.innerText = "aan";

  } 
});



let array = [];








const elements = document.getElementsByClassName("graden");


// huisje

const huisje = document.getElementById("js--huisje");

fetch("https://39059.hosts2.ma-cloud.nl/CasaVerde-M3BO/post.php")
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Netwerkfout: ' + response.status);
    }
    return response.json();
  })
  .then(function(data) {
    // Werk met de data die je hebt ontvangen
    console.log(data);
    // Bijvoorbeeld: doe iets met de data om het huisje element te wijzigen
    huisje.textContent = "Lamp status: " + data.status; // Bijvoorbeeld als je 'status' ontvangt
  })




// api
const apiElement = document.getElementById("js--api");
const dagElement = document.getElementById("js--dag");

let weerData = []; 

async function getWeather() {
  try {
    const response = await fetch("https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam");
    const data = await response.json();

    weerData = data.wk_verw;
    console.log(weerData);

    if (apiElement && weerData.length > 0) {
      apiElement.textContent = weerData[0].max_temp + "°";
    }

    if (dagElement && weerData.length > 0) {
      dagElement.textContent = weerData[0].dag;
    }

  } catch (error) {
    console.error("Fout bij ophalen van weerdata:", error);
  }
}
function getTempForDay(date) {
  const dag = weerData.find(d => d.dag === date);
  return dag ? dag.max_temp : "Datum niet gevonden";
}

getWeather();


//dag
const tempElement2 = document.getElementById("js--dag");

async function fetchData() {
  try {
    const response = await fetch("https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam");
    const data = await response.json();
    console.log(data);

    const apiData = data;
    const dag1 = getTempForDay("01-04-2025", apiData);

    console.log("De temperatuur op 01-04-2025 is: " + dag1);
    tempElement2.textContent = "De datum is: " + dag1;

  } catch (error) {
    console.error("Fout bij ophalen van de API:", error);
  }
}

function getTempForDay(date, apiData) {
  const dayData = apiData.wk_verw.find(day => day.dag === date);
  if (dayData) {
    return dayData.temp || "Geen temperatuur beschikbaar";
  } else {
    return "Datum niet gevonden";
  }
}

fetchData();
