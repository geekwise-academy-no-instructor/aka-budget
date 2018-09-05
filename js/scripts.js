//Test Object
var budget = {
   totalBudget : 1100,
   rent : 500,
   rentSpent : 500,
   bills : 200,
   billsSpent : 75,
   entertainment : 200,
   entertainmentSpent : 150,
   groceries : 100,
   groceriesSpent : 25,
   personalCare : 50,
   personalCareSpent : 20,
   misc : 50,
   miscSpent : 40
};

var labels = document.querySelectorAll('label');
var saveLabels = [];
var i = 0;

//click event calls drawChart(index for click)
var totalLabel = document.querySelector('.legend-total');
var rentLabel = document.querySelector('.legend-rent');
var billsLabel = document.querySelector('.legend-bills');
var entertainmentLabel = document.querySelector('.legend-entertainment');
var groceriesLabel = document.querySelector('.legend-groceries');
var personalCareLabel = document.querySelector('.legend-personal-care');
var miscLabel = document.querySelector('.legend-misc');

totalLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(0);})
};
rentLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(1);})
};
billsLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(2);})
};
entertainmentLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(3);})
};
groceriesLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(4);})
};
personalCareLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(5);})
};
miscLabel.onclick = function changeChart(){
      google.charts.setOnLoadCallback(function () {drawChart(6);})
};


labels.forEach(function(element) {
  saveLabels[i] = element.innerText;
  i++;
});

legendValues();
//give legend values
function legendValues(){
   i = 0;
   labels.forEach(function(element) {
     element.innerText = saveLabels[i];
     i++;
   });
   labels[0].innerText += ' $' + getRemaining() + ' / $' + budget.totalBudget;
   labels[1].innerText += ' $' + getDifference(budget.rent, budget.rentSpent) + ' / $' + budget.rent;
   labels[2].innerText += ' $' + getDifference(budget.bills, budget.billsSpent) + ' / $' + budget.bills;
   labels[3].innerText += ' $' + getDifference(budget.entertainment, budget.entertainmentSpent) + ' / $' + budget.entertainment;
   labels[4].innerText += ' $' + getDifference(budget.groceries, budget.groceriesSpent) + ' / $' + budget.groceries;
   labels[5].innerText += ' $' + getDifference(budget.personalCare, budget.personalCareSpent) + ' / $' + budget.personalCare;
   labels[6].innerText += ' $' + getDifference(budget.misc, budget.miscSpent) + ' / $' + budget.misc;
   //change text color if low on money
   if(getRemaining()/budget.totalBudget <=.2){
      labels[0].style.color = "red";
   }
   else {
      labels[0].style.color = "black";
   }

   if(getDifference(budget.rent, budget.rentSpent)/budget.rent <=.2){
      labels[1].style.color = "red";
   }
   else {
      labels[1].style.color = "black";
   }

   if(getDifference(budget.bills, budget.billsSpent)/budget.bills <=.2){
      labels[2].style.color = "red";
   }
   else {
      labels[2].style.color = "black";
   }

   if(getDifference(budget.entertainment, budget.entertainmentSpent)/budget.entertainment <=.2){
      labels[3].style.color = "red";
   }
   else {
      labels[3].style.color = "black";
   }

   if(getDifference(budget.groceries, budget.groceriesSpent)/budget.groceries <=.2){
      labels[4].style.color = "red";
   }
   else {
      labels[4].style.color = "black";
   }

   if(getDifference(budget.personalCare, budget.personalCareSpent)/budget.personalCare <=.2){
      labels[5].style.color = "red";
   }
   else {
      labels[5].style.color = "black";
   }

   if(getDifference(budget.misc, budget.miscSpent)/budget.misc <=.2){
      labels[6].style.color = "red";
   }
   else {
      labels[6].style.color = "black";
   }
}

// Get budget remaining for individual categories
function getDifference(x, y){
   return x-y;
}

// Get total budget remaining
function getRemaining(){
   return budget.totalBudget - (budget.rentSpent + budget.billsSpent + budget.entertainmentSpent + budget.groceriesSpent + budget.personalCareSpent + budget.miscSpent);
}

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(function() {drawChart(0);});

// Draw the chart and set the chart values
function drawChart(x) {
   if(x == 1){
      var data = google.visualization.arrayToDataTable([
      ['Category', 'Budget'],
      ['Rent Budget Remaining', getDifference(budget.rent, budget.rentSpent)],
      ['Rent Budget Spent', budget.rentSpent]
      ]);
   }
   else if(x == 2){
      var data = google.visualization.arrayToDataTable([
      ['Category', 'Budget'],
      ['Bills Budget Remaining', getDifference(budget.bills, budget.billsSpent)],
      ['Bills Budget Spent', budget.billsSpent]
      ]);
   }
   else if(x == 3){
      var data = google.visualization.arrayToDataTable([
      ['Category', 'Budget'],
      ['Entertainment Budget Remaining', getDifference(budget.entertainment, budget.entertainmentSpent)],
      ['Entertainment Budget Spent', budget.entertainmentSpent]
      ]);
   }
   else if(x == 4){
      var data = google.visualization.arrayToDataTable([
      ['Category', 'Budget'],
      ['Groceries Budget Remaining', getDifference(budget.groceries, budget.groceriesSpent)],
      ['Groceries Budget Spent', budget.groceriesSpent]
      ]);
   }
   else if(x == 5){
      var data = google.visualization.arrayToDataTable([
      ['Category', 'Budget'],
      ['Personal Care Budget Remaining', getDifference(budget.personalCare, budget.personalCareSpent)],
      ['Persoanl Care Budget Spent', budget.personalCareSpent]
      ]);
   }
   else if(x == 6){
      var data = google.visualization.arrayToDataTable([
      ['Category', 'Budget'],
      ['Misc Budget Remaining', getDifference(budget.misc, budget.miscSpent)],
      ['Misc Budget Spent', budget.miscSpent]
      ]);
   }
   else{
     var data = google.visualization.arrayToDataTable([
     ['Category', 'Budget'],
     ['Total Budget Remaining $' + getRemaining() + '/$' + budget.totalBudget, getRemaining()],
     ['Rent $' + getDifference(budget.rent, budget.rentSpent) + '/$' + budget.rent, budget.rentSpent],
     ['Bills $' + getDifference(budget.bills, budget.billsSpent) + '/$' + budget.bills, budget.billsSpent],
     ['Entertainment $' + getDifference(budget.entertainment, budget.entertainmentSpent) + '/$' + budget.entertainment, budget.entertainmentSpent],
     ['Groceries $' + getDifference(budget.groceries, budget.groceriesSpent) + '/$' + budget.groceries, budget.groceriesSpent],
     ['Personal Care $' + getDifference(budget.personalCare, budget.personalCareSpent) + '/$' + budget.personalCare, budget.personalCareSpent],
     ['Misc $' + getDifference(budget.misc, budget.miscSpent) + '/$' + budget.misc, budget.miscSpent]
   ]);
   }
  // Optional; add a title and set the width and height of the chart
  var options = {
               legend: 'none',
                vAxis: {maxValue: 10},
                chartArea: {width: '100%'},
                backgroundColor: { fill:'transparent' }
   };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

var btnIncrease = document.querySelector('button');

// Test to adjust graph by changing billsSpent
btnIncrease.onclick = function increaseBills(){
   if(budget.billsSpent == 150){
      budget.billsSpent = 75;
   }
   else{
      budget.billsSpent = 150;
   }
   legendValues();
   google.charts.setOnLoadCallback(function() {drawChart(0);});
}

$(window).resize(function(){
  google.charts.setOnLoadCallback(function () {drawChart(0);});
});
