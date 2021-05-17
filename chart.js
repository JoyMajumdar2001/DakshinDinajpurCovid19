var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Purple', 'Orange'],
        datasets: [{
            label: 'Active Cases',
            data: [0, 4, 7, 8, 6, 2, 7, 11],
            backgroundColor: 'transparent',
            borderColor: 'red',
            borderWidth: 2,
            pointRadius: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
              display: false
            },
            y: {
              display: false
            },
          },
        elements:{
            line:{
                tension:0.4
            }
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Purple', 'Orange'],
        datasets: [{
            label: 'Active Cases',
            data: [0, 4, 8, 4, 6, 1, 9, 14],
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderWidth: 2,
            pointRadius: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
              display: false
            },
            y: {
              display: false
            },
          },
        elements:{
            line:{
                tension:0.4
            }
        }
    }
});

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Purple', 'Orange'],
        datasets: [{
            label: 'Active Cases',
            data: [0, 4, 10, 6, 11, 8, 9, 8],
            backgroundColor: 'transparent',
            borderColor: '#f0ad4e',
            borderWidth: 2,
            pointRadius: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
              display: false
            },
            y: {
              display: false
            },
          },
        elements:{
            line:{
                tension:0.4
            }
        }
    }
});