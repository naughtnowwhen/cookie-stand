'use strict';

//Store Objects For Sale Page
var store1 = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSalePerSale: 6.3,
  cookiesSoldEachHour: [],
};
store1.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round(randomAmount * this.avgCookieSalePerSale);
};

store1.calculateCookiesSoldPerHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

store1.renderHours = function(){
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
store1.renderHours();

var store2 = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSalePerSale: 1.2,
  cookiesSoldEachHour: [],
};
store2.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round(randomAmount * this.avgCookieSalePerSale);
};

store2.calculateCookiesSoldPerHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

store2.renderHours = function(){
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
store2.renderHours();

var store3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSalePerSale: 3.7,
  cookiesSoldEachHour: [],
};
store3.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round(randomAmount * this.avgCookieSalePerSale);
};

store3.calculateCookiesSoldPerHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

store3.renderHours = function(){
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
store3.renderHours();

var store4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSalePerSale: 2.3,
  cookiesSoldEachHour: [],

};
store4.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round(randomAmount * this.avgCookieSalePerSale);
};

store4.calculateCookiesSoldPerHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

store4.renderHours = function(){
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
store4.renderHours();

var store5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSalePerSale: 4.6,
  cookiesSoldEachHour: [],
};
store5.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return Math.round(randomAmount * this.avgCookieSalePerSale);
};

store5.calculateCookiesSoldPerHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

store5.renderHours = function(){
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
store5.renderHours();
