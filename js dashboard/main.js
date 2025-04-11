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

//const huisje = document.getElementById("js--huisje");

//fetch("https://39059.hosts2.ma-cloud.nl/CasaVerde-M3BO/post.php")
  //.then(function(response) {
    //if (!response.ok) {
      //throw new Error('Netwerkfout: ' + response.status);
    //}
  //  return response.json();
//  })
 // .then(function(data) {
   // // Werk met de data die je hebt ontvangen
    //console.log(data);
    // Bijvoorbeeld: doe iets met de data om het huisje element te wijzigen
   // huisje.textContent = "Lamp status: " + data.status; // Bijvoorbeeld als je 'status' ontvangt
  //})




// api


//dag
