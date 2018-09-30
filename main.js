'use strict';
//Store Objects For Sale Page
var Store = function(name, minCust, maxCust, avgCookiePerSale){
  this.name = name;
  this.min = minCust;
  this.max = maxCust;
  this.avgCookiesPerSale = avgCookiePerSale;
  this.cookiesSoldEachHour = [];
  this.dailyTotal = 0;
  storeArray.push(this);
};
var storeArray = [];
var storehours = ['Stores'];

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
    this.cookiesSoldEachHour.push(saleTime);
  }
};

Store.prototype.totalSales = function(){
  this.calculateCookies();
  var total = 0;
  for(var i = 0; i < 15; i++){
    total += this.cookiesSoldEachHour[i];
  }
  this.dailyTotal = total;
};

//Table Rendering
var storeTableEL = document.getElementById('store-table');

var renderAsATableHeader = function(){
  calculatehours();
  var trowEl = document.createElement('tr');
  for(var h = 0; h < storehours.length; h++){
    var tdEl = document.createElement('td');
    tdEl.textContent = storehours[h];
    trowEl.appendChild(tdEl);
  };
  storeTableEL.appendChild(trowEl);
};

var renderAsATableRow = function(){
  for(var i = 0; i < storeArray.length; i++) {
    storeArray[i].totalSales();
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = storeArray[i].name;
    trEl.appendChild(thEl);
    for(var c = 0; c < storeArray[i].cookiesSoldEachHour.length; c++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = storeArray[i].cookiesSoldEachHour[c];
      trEl.appendChild(tdEl);
    };
    thEl = document.createElement('td');
    thEl.textContent = storeArray[i].dailyTotal;
    trEl.appendChild(thEl);
    storeTableEL.appendChild(trEl);
  };
};

var renderAsATableFooter = function(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var grandTotal = 0;
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  for(var i = 1; i < storehours.length; i++) {
    var hourlytotal = 0;
    for(var t = 0; t < storeArray.length; t++) {
      var tdEl = document.createElement('td');
      hourlytotal += storeArray[t].cookiesSoldEachHour[i - 1];
    };
    tdEl.textContent = hourlytotal;
    trEl.appendChild(tdEl);
  };
  for(var g = 0; g < storeArray.length; g++) {
    grandTotal += storeArray[g].dailyTotal;
  };
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  storeTableEL.appendChild(trEl);
};

var storeGeneration = document.getElementById('forms');
document.getElementById("forms").addEventListener("click", );
function formvalidate(){

};

//Store Variables
var store1 = new Store('1st and Pike', 23, 65, 6.3, []);
var store2 = new Store('Seatac Airport', 3, 24, 1.2, []);
var store3 = new Store('Seattle Center', 11, 38, 3.7, []);
var store4 = new Store('Capitol Hill', 20, 38, 2.3, []);
var store5 = new Store('Alki', 2, 16, 4.6, []);
// var newStore = new Store();

//Rendering for Stores
renderAsATableHeader();
renderAsATableRow();
renderAsATableFooter();