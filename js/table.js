var ctx = document.getElementById("myChart").getContext('2d');
var yLabels = {
    0 : 'newb', 2 : 'codecademy', 4 : 'code-school', 6 : 'bootcamp', 8 : 'junior-dev',
    10 : 'mid-level', 12 : 'senior-dev', 14 : 'full-stack-dev', 16 : 'famous-speaker',
    18 : 'unicorn', 20 : 'harambe'
}
var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["AutoCAD", "Revit", "SAFIR", "FDS", "Pyrosim", "Pathfinder", "Microsoft Excel", "Microsoft Word", "Python", "English", "Chinese", "Indonesian"],
datasets: [{
label: 'Skills',
data: [12, 19, 3, 5, 2, 3],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(255, 159, 64, 0.2)',
'rgba(255, 159, 64, 0.2)'
],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)',
'rgba(255, 159, 64, 1)',
'rgba(255, 159, 64, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)',
'rgba(255, 159, 64, 1)',
'rgba(255, 159, 64, 1)'
],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true,
callback: function(value, index, values) {
                    // for a value (tick) equals to 8
                    return yLabels[value];
}
}
}]
}
}
});
