'use strict';
//Store Objects For Sale Page
var Store = function(name, minCust, maxCust, avgCookiePerSale){
  this.name = name;
  this.min = minCust;
  this.max = maxCust;
  this.avgCookiesPerSale = avgCookiePerSale;
  this.hourlySales = [];
  this.dailyTotal = 0;
  storeArray.push(this);
};
var storeArray = [];
var storehours = ['Stores'];
var storeGenerator = document.getElementById('forms');

//Store Functions
var calculatehours = function(){
  for(var i = 0; i < 15; i++){
    var openingTime = i + 6;
    if(openingTime > 12) {
      openingTime -= 12;
      openingTime += 'pm';
    } else if(openingTime < 12) {
      openingTime += 'am';
    } else {
      openingTime += 'pm';
    }
    storehours.push(openingTime);
  };
  storehours.push('Grand Totals');
};

//Store Construction
Store.prototype.calculateCookiesPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookies = function(){
  for(var i = 0; i < 15; i++){
    var saleTime = this.calculateCookiesPerHour();
    this.hourlySales.push(saleTime);
  }
};

Store.prototype.totalSales = function(){
  this.calculateCookies();
  var total = 0;
  for(var i = 0; i < 15; i++){
    total += this.hourlySales[i];
  }
  this.dailyTotal = total;
};

//Table Rendering
var storeTableEL = document.getElementById('store-table');

var renderAsATableHeader = function(){
  calculatehours();
  var theadEl = document.createElement('thead');
  for(var h = 0; h < storehours.length; h++){
    var tdEl = document.createElement('td');
    tdEl.textContent = storehours[h];
    theadEl.appendChild(tdEl);
  };
  storeTableEL.appendChild(theadEl);
};



// so the two separate chunks are all relating to the rows, the first is just the name, the second iterating through daily totals at i. 
var renderAsATableRow = function(){
  for(var i = 0; i < storeArray.length; i++) {
    //
    storeArray[i].totalSales();
    var tbEl = document.createElement('tbody');
    var thEl = document.createElement('th');
    thEl.textContent = storeArray[i].name;
    tbEl.appendChild(thEl);
    for(var c = 0; c < storeArray[i].hourlySales.length; c++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = storeArray[i].hourlySales[c];
      tbEl.appendChild(tdEl);
    };
    thEl = document.createElement('td');
    thEl.textContent = storeArray[i].dailyTotal;
    tbEl.appendChild(thEl);
    storeTableEL.appendChild(tbEl);
  };
};

var renderAsATableFooter = function(){
  var tfootEl = document.createElement('tfoot');
  var thEl = document.createElement('th');
  var grandTotal = 0;
  thEl.textContent = 'Totals';
  tfootEl.appendChild(thEl);
  for(var i = 1; i < storehours.length; i++) {
    var hourlytotal = 0;
    for(var t = 0; t < storeArray.length; t++) {
      var tdEl = document.createElement('td');
      hourlytotal += storeArray[t].hourlySales[i - 1];
    };
    tdEl.textContent = hourlytotal;
    tfootEl.appendChild(tdEl);
  };
  for(var g = 0; g < storeArray.length; g++) {
    grandTotal += storeArray[g].dailyTotal;
  };
  tdEl.textContent = grandTotal;
  tfootEl.appendChild(tdEl);
  storeTableEL.appendChild(tfootEl);
};

//Form Connection
var storeGeneration = function(submit){
  submit.preventDefault();
  var storeName = submit.target.name.value;
  var storeMinCust = parseInt(submit.target.minCust.value);
  var storeMaxCust = parseInt(submit.target.maxCust.value);
  var storeAvgCookies = parseInt(submit.target.avgCookiePerSale.value);
  var clearTable = function(){
    document.getElementById('tbody').innerHTML = '';
    document.getElementById('tfoot').innerHTML = '';
  };
  clearTable();
  // debugger;
  new Store(storeName, storeMinCust, storeMaxCust, storeAvgCookies);
  renderAsATableRow();
  renderAsATableFooter();
};
var clearTable = function(){
  document.getElementById('tbody').innerHTML = '';
  document.getElementById('tfoot').innerHTML = '';
};
// clearTable();
console.log(storeArray);

//Store Variables
var store1 = new Store('1st and Pike', 23, 65, 6.3, []);
var store2 = new Store('Seatac Airport', 3, 24, 1.2, []);
var store3 = new Store('Seattle Center', 11, 38, 3.7, []);
var store4 = new Store('Capitol Hill', 20, 38, 2.3, []);
var store5 = new Store('Alki', 2, 16, 4.6, []);
// var newStore = new Store();

//Rendering for Stores
renderAsATableHeader();
storeGenerator.addEventListener('submit', storeGeneration);
renderAsATableRow();
renderAsATableFooter();

