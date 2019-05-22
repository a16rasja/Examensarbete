// ==UserScript==
// @name         reload timmeeeeeee
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.64.2/Examensarbete/
// @grant        none
// ==/UserScript==
var start;
var b = false;
var diffArray = (localStorage.getItem('timeDiff') != null) ? JSON.parse(localStorage.getItem('timeDiff')) : [];

$("body").ready(function(){
    setTimeout(function(){
        $("#button").click();
    },300);
})

$(document).ajaxComplete(function(){
    window.setTimeout(function(){
        if(diffArray.length < 1000){
            var stop = localStorage.getItem('stopTime');
            var diff = stop - start;
            diffArray.push(diff);
            var timeString = JSON.stringify(diffArray);
            localStorage.setItem("timeDiff", timeString);
            location.reload();
        }
        else {
            console.log(diffArray);
            var text = "";
            for(var i = 0; i < diffArray.length; i++){
                text += diffArray[i] + "\n";
            }
            console.log(text);
            localStorage.clear();
        }
    },600);
});

$("#button").click(function(){
    start = new Date().getTime();
});
