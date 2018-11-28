const M = require('materialize-css');
const Chart = require('chart.js');

const totalProfit = document.getElementById('totalProfit').getContext('2d');

// document.getElementById('totalProfit').style.background = 'linear-gradient(208.81deg, #35B2F9 -0.02%, rgba(53, 178, 249, 0.69) 83.34%, rgba(53, 178, 249, 0.2) 129.92%)';

const whiteGradient = totalProfit.createLinearGradient(0, 0, 0, 180);
whiteGradient.addColorStop(0, 'rgba(189, 95, 190, 0.33)');
whiteGradient.addColorStop(1, 'rgba(189, 95, 190, 0.33)');

const totalChart = new Chart(totalProfit, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [30000, 19000, 3000, 8000, 14000, 5000, 23000, 1000, 12000, 9000, 38000, 2000],
      backgroundColor: whiteGradient,
      hoverBackgroundColor: whiteGradient,
      borderColor: '#BD5FBE',
      pointBorderColor: 'rgba(255,255,255,0.62)',
      pointBackgroundColor: 'rgba(255,255,255,0.62)',
      pointHoverBackgroundColor: 'rgba(255,255,255,0.62)',
      pointHoverBorderColor: 'rgba(255,255,255,0.62)',
      pointBorderWidth: 4,
      hoverBorderWidth: 6,
      borderWidth: 4,
    }],
  },
  options: {
    responsive: false,
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false,
          beginAtZero: true,
        },
        gridLines: {
          tickMarkLength: 1,
          color: 'rgba(255,255,255,0.22)',
          zeroLineColor: 'transparent',
        },
      }],
      yAxes: [{
        display: false,
        scaleLabel: {
          display: true,
        },
      }],
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems, {});
});
