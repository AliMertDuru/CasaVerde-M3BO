const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['licht', 'verwarming', 'overige stroom'],
    datasets: [{
      label: 'Energie verbruik',
      data: [12, 19, 3],  // Zorg ervoor dat het aantal data overeenkomt met de labels
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
