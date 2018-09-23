'use strict';

//Store Objects For Sale Page
var store1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  method: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  },
};
var store2 = {
  name: 'Seatac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  method: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  },
};
var store3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  method: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  },
};
var store4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  method: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  },
};
var store5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  method: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.maxCust);
  },
};
