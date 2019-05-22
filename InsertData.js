// ==UserScript==
// @name         Insert Data
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.64.2/Examensarbete/insert.html
// @require      http://192.168.64.2/Examensarbete/jquery/jquery-3.3.1.js
// @grant        none
// ==/UserScript==

// create table data (id int not null auto_increment, data text, primary key(id));
$( document ).ready(function(){
    var jsonData;
    var start;
    var timeArray = [];
    var i = 0;
    var bool = false;
    $.ajax({
        url: "http://192.168.64.2/Examensarbete/convertcsv.json",
        success: function (data){
            jsonData = data;
        }
    }).then(function() {
        bool = true;
        jsonData = JSON.parse(jsonData);
        ready();
    });

    $( document ).ajaxComplete(function(){
        if(bool == true){
            var diff = new Date().getTime() - start;
            timeArray.push(diff);
            ready();
        }
    });


    function ready(){
        if(i < 500){
            i++;
            for(var obj in jsonData[i]){
                var newIndex = obj+2;
                jsonData[i][newIndex] = jsonData[i][obj];
            }
            console.log(jsonData[i]);
            $("#objectField").val(JSON.stringify(jsonData[i]));
            start = new Date().getTime();

            $(".submitObject").click();
        } else {
            console.log(JSON.stringify(timeArray));
            var t = "";

            timeArray.forEach(function(e){
                t += e + "\n";
            });
            console.log(t);
            alert("klart");
        }
    }});