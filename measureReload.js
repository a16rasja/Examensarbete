// ==UserScript==
// @name         Measure reload Time
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.64.2/Examensarbete/
// @require      http://192.168.64.2/Examensarbete/jquery/jquery-3.3.1.js
// @grant        none
// ==/UserScript==
//
//
//
console.log("helllllo");
$(document).ready(function(){
$("#button").click();
});

var start = (localStorage.getItem('startTime') != null) ? localStorage.getItem('startTime') : new Date().getTime();
var i  = (localStorage.getItem('count') != null) ? JSON.parse(localStorage.getItem('count')) : 0;
var timeArray = (localStorage.getItem('timeArray') != null) ? JSON.parse(localStorage.getItem('timeArray')) : [];

$(document).ajaxComplete(function(event, XMLHttpRequest, ajaxOptions) {
  //check XMLHttpRequest and do stuff
    console.log("ajax done");
    var stop = new Date().getTime();
    var diff = stop - start;
    console.log("The diff is: " + diff);
    timeArray.push(diff)
    timeArray = JSON.stringify(timeArray);
    localStorage.setItem('timeArray', timeArray);
    $('#reloadButton').click();
});
