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

function changeNameObf() {
  //data to be obfuscated
  var oldArray = [{
    name: "Bengt",
    lname: "Åkesson",
    umail: "bå@åke.se"
  }, {
    name: "Sven",
    lname: "Johnsson",
    umail: "sj@se.se"
  }, {
    name: "Bertil",
    lname: "Eriksson",
    umail: "be@er.se"
  }]

  //Array filled with replacement indexes
  var indexArray = {}
  indexArray["name"] = "a";
  indexArray["lname"] = "b";
  indexArray["umail"] = "c";
  //console.log(indexArray);

  //Array
  var nyArray = [];
  var i = 1;
  //console.log(oldArray);
  oldArray.forEach(function(element) {
    var tempArray = {};
    for (var obj in oldArray[0]) {
      tempArray[indexArray[obj]] = element[obj];
      i++;
    }
    console.log("temp " + tempArray);
    nyArray.push(tempArray);
  });
  oldArray.forEach(function(e) {
    console.log(e);
  });
  nyArray.forEach(function(e) {
    console.log(e);
  });

}