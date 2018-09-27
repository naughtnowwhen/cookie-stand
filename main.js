'use strict';

//Store Objects For Sale Page

var Store = function(name, minCust, maxCust, avgCookiePerSale){
  this.name = name;
  this.min = minCust;
  this.max = maxCust;
  this.avgCookiesPerSale = avgCookiePerSale;
  this.cookiesSoldEachHour = [];
};

Store.prototype.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldPerHour = function(){
  for(var i = 0; i < 15; i++){
    var openingTime = i + 6;
    if(openingTime > 12) {
      openingTime -= 12;
      openingTime += 'pm:';
    } else if(openingTime < 12) {
      openingTime += 'am:';
    } else {
      openingTime += 'pm:';
    }
    var saleTime = `${openingTime} ${this.calculateCustomersPerHour()} cookies`;
    this.cookiesSoldEachHour.push(saleTime);
  }
};

Store.prototype.renderHours = function(){
  this.calculateCookiesSoldPerHour();
  var storesContainer = document.getElementById('stores');
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul');
  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};

var store1 = new Store('1st and Pike', 23, 65, 6.3, []);
var store2 = new Store('Seatac Airport', 3, 24, 1.2, []);
var store3 = new Store('Seattle Center', 11, 38, 3.7, []);
var store4 = new Store('Capitol Hill', 20, 38, 2.3, []);
var store5 = new Store('Alki', 2, 16, 4.6, []);

store1.renderHours();
store2.renderHours();
store3.renderHours();
store4.renderHours();
store5.renderHours();