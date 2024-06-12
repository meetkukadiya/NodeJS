var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log("Host :" + q.host); //returns 'localhost:8080'
console.log("Path Name: " + q.pathname); //returns '/default.htm'
console.log("Search : " + q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata);
console.log(qdata.month); //returns 'february'