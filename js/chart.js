'use strict';

var DEFAULT_COLORS = ['#8E5EA2', '#FF4A60', '#FF9E5E', '#696969', '#C0C0C0'];

var ctx = document.getElementById('sintomas-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [90],
			backgroundColor: DEFAULT_COLORS[0],
			label: 'Dataset 1'
		}],
		labels: ['Sintomas Manejados']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		cutoutPercentage: 80,
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: '90',
						font: {
							size: '25'
						},
						color: 'grey'
					}
				]
			},
		}
	}
});

var ctx = document.getElementById('encaminhados-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [10],
			backgroundColor: DEFAULT_COLORS[1],
			label: 'Dataset 1'
		}],
		labels: ['Encaminhados']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		cutoutPercentage: 80,
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: '10',
						font: {
							size: '25',
						},
						color: 'grey'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('total-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [100],
			backgroundColor: DEFAULT_COLORS[3],
			label: 'Dataset 1'
		}],
		labels: ['Total']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false,
			fontSize: 20,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		cutoutPercentage: 70,
		aspectRatio: 1,
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: 'Total',
						font: {
							size: '60'
						}
					},
					{
						text: '100',
						font: {
							size: '50'
						},
						color: 'grey'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('sucesso-chart').getContext('2d');
new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [90,10],
			backgroundColor: [DEFAULT_COLORS[0], DEFAULT_COLORS[3]],
			label: 'Dataset 1'
		}],
		labels: ['Taxa de sucesso', 'Outros']
	},
	options: {
		responsive: true, 
		maintainAspectRatio: false,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: false,
			fontSize: 20,
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		cutoutPercentage: 70,		
		aspectRatio: 1,
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: 'Taxa de',
						font: {
							size: '60'
						}
					},
					{
						text: 'sucesso',
						font: {
							size: '50'
						},
						color: 'grey'
					},
					{
						text: '90 %',
						font: {
							size: '50'
						},
						color: 'grey'
					}
				]
			}
		}
	}
});

var ctx = document.getElementById('visao-chart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["10", "11", "12", "13", "14", "15", "16"],
      datasets: [
        {
          label: "DOR",
          backgroundColor: DEFAULT_COLORS[4],
          data: [100,100,100,100,100,100,100]
        }, {
          label: "Mucosite",
          backgroundColor: DEFAULT_COLORS[4],
          data: [150,150,150,150,150,150,150]
        }, {
          label: "Diarreia",
          backgroundColor: DEFAULT_COLORS[4],
          data: [50,50,50,50,50,50,50]
        }
      ]
    },
    options: {
			responsive: true, 
			maintainAspectRatio: false,
      title: {
        display: false
			},
			scales: {				
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
    }
});

// new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//     datasets: [{ 
//         data: [10,2,30,40,50,60,70,80,90,100,110,125,136,148,159,167,17,189,109,200,211,222,233,244,255,266,279,298,329,330],
//         label: "DOR",
//         borderColor: DEFAULT_COLORS[4],
//         fill: false
//       }, { 
//         data: [11,21,31,41,51,61,7,8,9,100,101,120,139,144,145,146,170,181,191,210,212,223,234,245,250,256,257,258,259,350],
//         label: "Mucosite",
//         borderColor: DEFAULT_COLORS[3],
//         fill: false
//       }, { 
//         data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
//         label: "Diarreia",
//         borderColor: DEFAULT_COLORS[2],
//         fill: false
//       }
//     ]
//   },
//   options: {
// 		responsive: true, 
// 		maintainAspectRatio: false,
//     title: {
//       display: false
// 		},
// 		scales: {				
// 							yAxes: [{
// 								ticks: {
// 									beginAtZero: true
// 								}
// 							}]
// 						}
//   }
// });