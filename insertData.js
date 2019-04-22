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

var jsonData;
var i = 0;
var bool = false;
$.ajax({
      url: "http://192.168.64.2/Examensarbete/convertcsv.json",
      success: function (data){
          jsonData = data;
          ready();
      }
});


function ready(){
    jsonData = JSON.parse(jsonData);
    while(i < jsonData.length){
        $("#objectField").val(JSON.stringify(jsonData[i]));
        i++;
        $(".submitObject").click();
    }
}