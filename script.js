var obfuscatedArray;
var jqueryData;
var string;
var i = (localStorage.getItem('count') != null) ? JSON.parse(localStorage.getItem('count')) : 0;

function init() {
  //save obfuscated array, obfuscate data fron external file.
  $("#button").click(function() {
    var response = '';
    $.ajax({
      type: "GET",
      url: "servers.php?make=0",
      success: function(text) {
        response = text;
        //response = response.replace(/\\"/g, '\'');
        printSchedule(response, 'old')
        console.log(text);
        var decryptedResponse = nameDeObf(response);
        printSchedule(decryptedResponse, 'new');

      }
    }).then(function() {
      var stop = new Date().getTime();
      localStorage.setItem("stopTime", stop);
    })
  });
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

  //console.log("Klickade");
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
  var indexArray = {};
  var charCode = 97;
  var newObject = {};
  var keys = [];
  var oldArray = JSON.parse(arrayJSON);
  var start = new Date().getTime();

  //make sure object is inside of array
  if (!Array.isArray(oldArray)) {
    var temp = [];
    temp.push(oldArray);
    oldArray = temp;
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
      if (element[obj] || element[obj] == 0) {
        tempArray[indexArray[obj]] = element[obj];
      }
    }

    for (var key in indexArray) {
      keys.push(key);
    }

    var j = 0;
    var k = keys.length - 1;
    for (var i = keys.length - 1; i >= 0; i--) {
      var value = keys[k];
      newObject[indexArray[keys[j]]] = value;
      k--;
      j++;
    }
    tempArray["indexes"] = newObject;
    nyArray.push(tempArray);
  });
  var stop = new Date().getTime();
  localStorage.setItem('deObfNameTime', (stop - start));
  console.log(stop - start);
  return JSON.stringify(nyArray[0]);
}

//Deobfuscate changeNameObf
function nameDeObf(arrayJSON) {
  var indexArray = {};
  var newObject = {};
  var keys = [];
  var oldArray = JSON.parse(arrayJSON);
  var start = new Date().getTime();

  //Change index on every item in array
  var nyArray = [];
  oldArray.forEach(function(element) {
    var tempArray = {};
    var indexArray = element.indexes;


    for (var key in indexArray) {
      keys.push(key);
    }

    var j = 0;
    var k = keys.length - 1;
    for (var i = keys.length - 1; i >= 0; i--) {
      var value = indexArray[keys[k]];
      newObject[keys[j]] = value;
      k--;
      j++;
    }
    indexArray = newObject;

    for (var obj in element) {
      if (obj != 'indexes') {
        if (element[obj] || element[obj] == 0) {
          tempArray[indexArray[obj]] = element[obj];
        }
      }
    }

    nyArray.push(tempArray);
  });

  var stop = new Date().getTime();
  localStorage.setItem('deObfNameTime', (stop - start));
  console.log(stop - start);
  return JSON.stringify(nyArray);
}

//Obfuscation function caesar encryption
function caesarEncryption(arrayJSON) {
  var oldArray = JSON.parse(arrayJSON);
  var encryptedArray = [];
  var q = 3;

  //make sure object is inside of array
  if (!Array.isArray(oldArray)) {
    var temp = [];
    temp.push(oldArray);
    oldArray = temp;
    //console.log(oldArray);
  }

  oldArray.forEach(function(e) {
    var indexNames = [];
    var tempArray = {};

    for (var obj in e) {
      indexNames[obj] = "";
      var tempDataString = e[obj];
      var replacementDataString = "";

      //Encrypts index names
      for (var i = 0; i < obj.length; i++) {
        indexNames[obj] += String.fromCharCode(obj[i].charCodeAt() + q);
      }

      if (tempDataString != null) {
        //Convert number to string
        if (typeof(tempDataString) == "number") {
          tempDataString = tempDataString.toString();
        }

        //Encrypts data in array
        for (var i = 0; i < tempDataString.length; i++) {
          var newCharcode = tempDataString[i].charCodeAt();
          if (newCharcode == 32 || newCharcode == 92 - 3) {
            replacementDataString += String.fromCharCode(newCharcode);
          } else {
            replacementDataString += String.fromCharCode(newCharcode + q);
          }
        }
      }


      tempArray[indexNames[obj]] = replacementDataString;
    }
    encryptedArray.push(tempArray);
  });
  return JSON.stringify(encryptedArray[0]);
}

//Function for printing schedule array into div
function printSchedule(printItem, printPlace) {
  printPlace = document.getElementById(printPlace);
  printItem = JSON.parse(printItem);
  var text = "";

  printItem.forEach(function(e) {
    text += "<div class='scheduleItem'>"
    for (var index in e) {
      //console.log(e[index])
      text += index + ": " + e[index] + "<br>";
    }
    text += "</div>";
  })
  printPlace.innerHTML = text;
}

//decrypt caesarEncryption
function caesarDecryption(arrayJSON) {
  var s = new Date();
  var oldArray = JSON.parse(arrayJSON);
  var encryptedArray = [];
  var q = 3;
  var start = new Date().getTime();

  //make sure object is inside of array
  if (!Array.isArray(oldArray)) {
    var temp = [];
    temp.push(oldArray);
    oldArray = temp;
  }

  oldArray.forEach(function(e) {
    var indexNames = [];
    var tempArray = {};
    var hej = "";
    for (var obj in e) {
      indexNames[obj] = "";
      var tempDataString = e[obj];
      var replacementDataString = "";

      //Encrypts index names
      for (var i = 0; i < obj.length; i++) {
        indexNames[obj] += String.fromCharCode(obj[i].charCodeAt() - q);
      }

      if (tempDataString != null) {
        //Convert number to string
        if (typeof(tempDataString) == "number") {
          tempDataString = tempDataString.toString();
        }

        //Decrypts data in array
        for (var i = 0; i < tempDataString.length; i++) {
          var newCharcode = tempDataString[i].charCodeAt();
          if (newCharcode == 32 || newCharcode == (92 - 3)) {
            replacementDataString += String.fromCharCode(newCharcode);
          } else {
            replacementDataString += String.fromCharCode(newCharcode - q);
          }
        }
      }


      tempArray[indexNames[obj]] = replacementDataString;
    }
    encryptedArray.push(tempArray);
  });
  var stop = new Date().getTime();
  localStorage.setItem('deObfNameTime', (stop - start));
  console.log(stop - start);
  return JSON.stringify(encryptedArray);
}

//Insert object into database
function insertObject() {
  var v = $("#objectField").val();
  //v = changeNameObf(v);
  v = caesarEncryption(v);
  $.ajax({
    type: "get",
    url: "servers.php?make=1&data=" + v,
    success: function(data) {
      $("#objectField").val("");
      return;
    }
  });
}