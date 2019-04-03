var indexArray = {}
var obfuscatedArray;
var charCode = 97;

function init() {
  //save obfuscated array, obfuscate data fron external file.

  //printSchedule(JSON.stringify(data), 'old');
  obfuscatedArray = caesarEncryption(JSON.stringify(data));
  //printSchedule(obfuscatedArray, 'new');
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var text = "<p onclick='hideElement()' title='Klicka fma text'>" + this.responseText + "</p>";
      document.getElementById('container').innerHTML = text;
    }
  };
  xhttp.open("GET", "servers.php?make=0", true);
  xhttp.send();
}

function createUser() {
  var uname = document.getElementById('uname').value;
  var ulname = document.getElementById('ulname').value;
  var umail = document.getElementById('umail').value;
  var xhttp = new XMLHttpRequest();

  console.log("Klickade");
  xhttp.open("GET", "servers.php?make=1&uName=" + uname + "&uLastName=" + ulname + "&uMail=" + umail, true);
  xhttp.send();

  document.getElementById('uname').value = "";
  document.getElementById('ulname').value = "";
  document.getElementById('umail').value = "";
}

function hideElement() {
  document.getElementById('container').innerHTML = '<p><button type="button" onclick="loadDoc(); ">Super Hemligt Meddelande</button></p>';
}

//Obfuscation function for changing name of indexes
function changeNameObf(arrayJSON) {
  var oldArray = JSON.parse(arrayJSON);

  //make sure object is inside of array
  if (!Array.isArray(oldArray)) {
    var temp = [];
    temp.push(oldArray);
    oldArray = temp;
    console.log(oldArray);
  }

  //Fill array with replacement indexes
  for (var obj in oldArray[0]) {
    if (charCode > 122) {
      122 * (Math.floor(charCode / 122) - 1)
      indexArray[obj] = String.fromCharCode((charCode % 122));
    }
    indexArray[obj] = String.fromCharCode(charCode);
    charCode++;
  }

  //Change index on every item in array
  var nyArray = [];
  oldArray.forEach(function(element) {
    var tempArray = {};
    for (var obj in oldArray[0]) {
      if (typeof(element[obj]) == 'object') {
        element[obj] = changeNameObf(JSON.stringify(element[obj]));
      }
      if (element[obj]) {
        tempArray[indexArray[obj]] = element[obj];
      }
    }
    nyArray.push(tempArray);
  });

  //print unobfuscated array in console
  oldArray.forEach(function(e) {
    console.log("Den som inte har blivit obfuskerad!")
    console.log(e);
  });
  //print obfuscated array in console
  nyArray.forEach(function(e) {
    console.log("Den som har blivit obfuskerad!")
    console.log(e);
  });
  return JSON.stringify(nyArray);
}

function printSchedule(printItem, printPlace) {
  printPlace = document.getElementById(printPlace);
  printItem = JSON.parse(printItem);
  var text = "";

  printItem.forEach(function(e) {
    text += "<div class='scheduleItem'>"
    for (var index in e) {
      console.log(e[index])
      text += index + ": " + e[index] + "<br>";
    }
    text += "</div>";
  })
  printPlace.innerHTML += text;
}

//Obfuscation function caesar encryption
function caesarEncryption(arrayJSON) {
  var oldArray = JSON.parse(arrayJSON);
  var q = 3;

  //make sure object is inside of array
  if (!Array.isArray(oldArray)) {
    var temp = [];
    temp.push(oldArray);
    oldArray = temp;
    console.log(oldArray);
  }
  var indexNames = [];
  for (var obj in oldArray[0]) {
    indexNames.push(obj);
  }

  for (var x = 0; x < indexNames.length; x++) {
    var tempString = indexNames[x];
    var replacementString = "";

    for (var i = 0; i < tempString.length; i++) {
      replacementString += String.fromCharCode(tempString[i].charCodeAt(tempString[i]) + q);
    }

    indexNames[x] = replacementString;
  }

  console.log(indexNames);
}


function printArray(arrayToPrint, printContainerName) {
  var printArray = JSON.parse(arrayToPrint);
  var printPlace = document.getElementById(printContainerName);
  var text = "<table>";
  for (var o in printArray[0]) {
    text += "<th>" + o + "</th>"
  }
  printArray.forEach(function(e) {
    text += "<tr>"
    for (var obj in p) {
      text += "<td>" + e[obj] + ":</td> ";
    }
    text += "</tr>";
  })
  text += "</table>"

  printPlace.innerHTML = text;

  console.log(printPlace.innerHTML);
}