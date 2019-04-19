//data to be obfuscated
/*var arrayObfuscation = JSON.stringify({
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.568182834705,
          52.512686718189
        ]
      },
      "properties": {
        "id": "Node-1502960",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 9.463 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766881"
        ],
        "spokeEndIds": [
          "Link-1766877"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.620502068974,
          52.513080288447
        ]
      },
      "properties": {
        "id": "Node-1502961",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 13.03 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766905"
        ],
        "spokeEndIds": [
          "Link-1766901"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.68741827755,
          52.519370609717
        ]
      },
      "properties": {
        "id": "Node-1502964",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 17.625 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766929"
        ],
        "spokeEndIds": [
          "Link-1766925"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.704574329801,
          52.521013404508
        ]
      },
      "properties": {
        "id": "Node-1502965",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 18.805 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766937"
        ],
        "spokeEndIds": [
          "Link-1766933"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.649197534302,
          52.515762737608
        ]
      },
      "properties": {
        "id": "Node-1502962",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 15.0 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766913"
        ],
        "spokeEndIds": [
          "Link-1766909"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.649721721877,
          52.515811716669
        ]
      },
      "properties": {
        "id": "Node-1502963",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 15.036 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766917"
        ],
        "spokeEndIds": [
          "Link-1766913"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.772096521155,
          52.527296155555
        ]
      },
      "properties": {
        "id": "Node-1502968",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 23.438 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766953"
        ],
        "spokeEndIds": [
          "Link-1766949"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.784625959854,
          52.528459696823
        ]
      },
      "properties": {
        "id": "Node-1502969",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 24.297 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766957"
        ],
        "spokeEndIds": [
          "Link-1766953"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.754335672508,
          52.525639440064
        ]
      },
      "properties": {
        "id": "Node-1502966",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 22.22 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766941"
        ],
        "spokeEndIds": [
          "Link-1766937"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.762042517928,
          52.526330930336
        ]
      },
      "properties": {
        "id": "Node-1502967",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 22.748 Bln Warschauer Str - Strausbg",
        "spokeStartIds": [
          "Link-1766945"
        ],
        "spokeEndIds": [
          "Link-1766941"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.098456780195,
          49.410277634619
        ]
      },
      "properties": {
        "id": "Node-1502950",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 2.801 N Minervabr - Rbf Einf, Gl 485",
        "spokeStartIds": [
          "Link-1765973"
        ],
        "spokeEndIds": [
          "Link-1765969"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.101195069563,
          49.41030036378
        ]
      },
      "properties": {
        "id": "Node-1502951",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 3 N Minervabr - Rbf Einf, Gl 485",
        "spokeStartIds": [
          "Link-1765977"
        ],
        "spokeEndIds": [
          "Link-1765973"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.103774386495,
          49.409715473314
        ]
      },
      "properties": {
        "id": "Node-1502952",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 3.2 N Minervabr - Rbf Einf, Gl 485",
        "spokeStartIds": [
          "Link-1765981"
        ],
        "spokeEndIds": [
          "Link-1765977"
        ]
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.082782159828,
          49.416960008366
        ]
      },
      "properties": {
        "id": "Node-1502953",
        "formOfNode": "levelCrossing",
        "geographicalName": "Bü 0.001 Nürnberg Rbf - Dutzendteich",
        "spokeStartIds": [
          "Link-1766065"
        ],
        "spokeEndIds": [
          "Link-1766061"
        ]
      }
    }
  ]
});*/
//data to be obfuscated
var arrayObfuscation = JSON.stringify([{
    "_id": "5c8f672b9f6be526c4533f8f",
    "index": 0,
    "guid": "3b4c3dac-c4a6-4a29-80bc-a28f6962bf10",
    "isActive": true,
    "balance": "$3,005.33",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "blue",
    "name": "Tisha Dean",
    "gender": "female",
    "company": "OTHERSIDE",
    "email": "tishadean@otherside.com",
    "phone": "+1 (872) 524-2892",
    "address": "724 Church Avenue, Dawn, Maine, 2184",
    "about": "Amet amet incididunt nostrud ad cupidatat quis est nostrud proident veniam aute quis consectetur. Irure proident mollit enim culpa eu laboris. Fugiat ullamco irure enim Lorem reprehenderit et consectetur consectetur aliqua mollit qui do quis. Enim consequat amet ad occaecat adipisicing occaecat excepteur enim fugiat minim eu ut nulla eiusmod. Officia esse consequat Lorem fugiat occaecat nisi deserunt ex labore ullamco consectetur. Commodo anim tempor deserunt dolore do Lorem.\r\n",
    "registered": "2018-05-13T07:07:47 -02:00",
    "latitude": -14.158714,
    "longitude": -101.560728,
    "tags": [
      "fugiat",
      "dolore",
      "occaecat",
      "consectetur",
      "laborum",
      "voluptate",
      "et"
    ],
    "friends": [{
        "id": 0,
        "name": "Sophia May"
      },
      {
        "id": 1,
        "name": "Irma Eaton"
      },
      {
        "id": 123123,
        "name": [{
            "id": 15125125,
            "name": "ajsdlkajsdlajdlad"
          },
          {
            "id": 9123958,
            "name": "bmbmfmndi"
          },
          {
            "id": 99491924,
            "name": "alfkjqhnvnvnal"
          }
        ],
      }
    ],
    "greeting": "Hello, Tisha Dean! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c8f672b130d1714f8bd6b55",
    "index": 1,
    "guid": "36e1d361-6511-4704-bab5-9a172fbdf2cf",
    "isActive": true,
    "balance": "$2,737.92",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Ivy Fuller",
    "gender": "female",
    "company": "DAISU",
    "email": "ivyfuller@daisu.com",
    "phone": "+1 (829) 515-2718",
    "address": "148 Douglass Street, Greensburg, Massachusetts, 2118",
    "about": "Sunt magna id est excepteur. Non amet incididunt nulla elit officia cupidatat aliquip pariatur aliqua dolore occaecat elit. Non officia quis irure ex qui mollit do nostrud elit elit deserunt do mollit. Ut duis duis consequat duis cupidatat. Sit et dolor enim ea irure aute et velit aliqua culpa sint commodo sit. Ut aute nostrud consectetur Lorem sint. Amet amet consequat nisi esse.\r\n",
    "registered": "2019-02-16T02:21:27 -01:00",
    "latitude": 19.585817,
    "longitude": 28.907516,
    "tags": [
      "consectetur",
      "qui",
      "ex",
      "officia",
      "aliqua",
      "consequat",
      "sunt"
    ],
    "friends": [{
        "id": 0,
        "name": "Schroeder Hill"
      },
      {
        "id": 1,
        "name": "Hallie Peck"
      },
      {
        "id": 2,
        "name": "Saunders Olson"
      }
    ],
    "greeting": "Hello, Ivy Fuller! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c8f672b20fee7fc34b42d05",
    "index": 2,
    "guid": "23f268fe-59a1-4d35-b789-e0b6223c8690",
    "isActive": true,
    "balance": "$3,528.11",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": "Cameron Dudley",
    "gender": "male",
    "company": "PYRAMIA",
    "email": "camerondudley@pyramia.com",
    "phone": "+1 (942) 494-2221",
    "address": "921 Stryker Street, Masthope, Hawaii, 1007",
    "about": "Reprehenderit aliqua in qui officia qui qui culpa aliqua et laboris. Do reprehenderit voluptate pariatur ipsum tempor. Do ut quis laboris anim ex cupidatat ex. Labore incididunt exercitation nostrud nisi pariatur magna dolor. Aliquip nisi aute irure mollit enim proident. Sit ea aliquip ullamco nisi ullamco reprehenderit tempor.\r\n",
    "registered": "2015-08-04T03:05:04 -02:00",
    "latitude": -55.204807,
    "longitude": -5.632896,
    "tags": [
      "ut",
      "elit",
      "pariatur",
      "cillum",
      "laboris",
      "proident",
      "mollit"
    ],
    "friends": [{
        "id": 0,
        "name": "Ball Heath"
      },
      {
        "id": 1,
        "name": "Carrie Chambers"
      },
      {
        "id": 2,
        "name": "Vanessa Lewis"
      }
    ],
    "greeting": "Hello, Cameron Dudley! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c8f672bf89fc912a7a8cc33",
    "index": 3,
    "guid": "ba238f0f-0882-449f-9850-de2629f5b6b8",
    "isActive": false,
    "balance": "$3,277.62",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "blue",
    "name": "Deann Bailey",
    "gender": "female",
    "company": "OVOLO",
    "email": "deannbailey@ovolo.com",
    "phone": "+1 (946) 567-3028",
    "address": "937 Overbaugh Place, Imperial, Connecticut, 7578",
    "about": "Commodo ea nisi et irure enim excepteur ea. Ex nisi laborum enim amet commodo commodo amet. Ex anim ut sint ut. Irure veniam elit sint eu. Dolor voluptate incididunt minim elit officia commodo.\r\n",
    "registered": "2016-12-16T02:04:00 -01:00",
    "latitude": 21.454984,
    "longitude": -112.99378,
    "tags": [
      "adipisicing",
      "exercitation",
      "consectetur",
      "aliqua",
      "ipsum",
      "incididunt",
      "magna"
    ],
    "friends": [{
        "id": 0,
        "name": "Benita Oneil"
      },
      {
        "id": 1,
        "name": "Elisa Shelton"
      },
      {
        "id": 2,
        "name": "Gale Guerrero"
      }
    ],
    "greeting": "Hello, Deann Bailey! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5c8f672b9a15cf3f38df8949",
    "index": 4,
    "guid": "3a475e50-8271-4894-ad76-e6052def6a74",
    "isActive": true,
    "balance": "$3,103.42",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Melba Kerr",
    "gender": "female",
    "company": "DAIDO",
    "email": "melbakerr@daido.com",
    "phone": "+1 (834) 448-2933",
    "address": "104 Desmond Court, Southmont, Vermont, 116",
    "about": "Cillum cupidatat do incididunt laboris dolor laborum amet incididunt aliqua reprehenderit mollit ex ea. Pariatur sint sit veniam in. Mollit do sunt voluptate exercitation amet.\r\n",
    "registered": "2017-11-16T08:32:42 -01:00",
    "latitude": -31.748751,
    "longitude": -166.304647,
    "tags": [
      "minim",
      "aliqua",
      "amet",
      "do",
      "deserunt",
      "eiusmod",
      "non"
    ],
    "friends": [{
        "id": 0,
        "name": "Beach Nieves"
      },
      {
        "id": 1,
        "name": "Haney Pollard"
      },
      {
        "id": 2,
        "name": "Gibson Anderson"
      }
    ],
    "greeting": "Hello, Melba Kerr! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5c8f672b6cf87ecc772b0e0f",
    "index": 5,
    "guid": "8e8d2012-05c9-4dd5-ab2b-20b88281977f",
    "isActive": false,
    "balance": "$1,301.70",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "green",
    "name": "Candace Thomas",
    "gender": "female",
    "company": "PLASMOS",
    "email": "candacethomas@plasmos.com",
    "phone": "+1 (935) 486-3332",
    "address": "621 Verona Street, Why, Idaho, 6216",
    "about": "Incididunt id occaecat consectetur amet cillum. Mollit culpa nulla laboris consectetur proident anim. Aliqua consectetur est enim consectetur aliquip ut enim consectetur eiusmod in. Voluptate reprehenderit enim adipisicing pariatur exercitation dolor exercitation eiusmod nulla nisi.\r\n",
    "registered": "2018-05-10T11:00:02 -02:00",
    "latitude": 7.095965,
    "longitude": 141.568911,
    "tags": [
      "est",
      "proident",
      "minim",
      "incididunt",
      "minim",
      "quis",
      "veniam"
    ],
    "friends": [{
        "id": 0,
        "name": "Short Tran"
      },
      {
        "id": 1,
        "name": "Eva Craft"
      },
      {
        "id": 2,
        "name": "Candy Branch"
      }
    ],
    "greeting": "Hello, Candace Thomas! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5c8f672b62cf261d7e35e33c",
    "index": 6,
    "guid": "e198f1d2-6527-4965-815e-69e96ffddb16",
    "isActive": false,
    "balance": "$2,314.24",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Briggs Ewing",
    "gender": "male",
    "company": "COMFIRM",
    "email": "briggsewing@comfirm.com",
    "phone": "+1 (957) 589-2753",
    "address": "489 Waldane Court, Savage, Pennsylvania, 2754",
    "about": "Aliquip excepteur esse commodo laborum cillum laborum sit qui ex adipisicing magna est reprehenderit sit. Qui nostrud pariatur et commodo aute anim cupidatat consequat duis quis ea aliqua culpa. Ea aliquip ea voluptate sunt labore. Nulla culpa tempor exercitation labore laborum minim. Consequat dolore consequat voluptate sunt magna amet nostrud elit labore voluptate consequat elit voluptate.\r\n",
    "registered": "2015-03-24T01:17:46 -01:00",
    "latitude": -43.138001,
    "longitude": -86.446343,
    "tags": [
      "sunt",
      "ea",
      "voluptate",
      "sit",
      "id",
      "consectetur",
      "esse"
    ],
    "friends": [{
        "id": 0,
        "name": "Bertha Rosales"
      },
      {
        "id": 1,
        "name": "Brown Cunningham"
      },
      {
        "id": 2,
        "name": "Suzanne Schmidt"
      }
    ],
    "greeting": "Hello, Briggs Ewing! You have 3 unread messages.",
    "favoriteFruit": "apple"
  }
]);

var indexArray = {}
var charCode = 97;
<<<<<<< Updated upstream
=======
var jqueryData;
var string;

function init() {
  //save obfuscated array, obfuscate data fron external file.
  $("#button").click(function() {
    var response = '';
    console.log("clicked");
    $.ajax({
      type: "GET",
      url: "servers.php?make=0",
      success: function(text) {
        response = text;
        //string = response;
        response = response.replace(/\\"/g, '\'');
        //response = caesarDecryption(response);
        console.log(response);
        $("#new").html(caesarDecryption(response));
      }
    });
  });
  //printSchedule(JSON.stringify(data), 'old');
  //obfuscatedArray = caesarEncryption(JSON.stringify(data));
  //printSchedule(obfuscatedArray, 'new');
}
>>>>>>> Stashed changes

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

function changeNameObf(arrayJSON) {
  var oldArray = JSON.parse(arrayJSON);
  //console.log("woop: " + oldArray);
  console.log(Array.isArray(oldArray));
  if (!Array.isArray(oldArray)) {
    var temp = [];
    temp.push(oldArray);
    oldArray = temp;
    console.log(oldArray);
  }


  //Array filled with replacement indexes
  for (var obj in oldArray[0]) {
    //console.log("old" + obj + " Code: " + charCode + " is: " + String.fromCharCode(charCode));
    tempCode = charCode - 97;
    //console.log("Tempbode pre: " + String.fromCharCode((tempCode % 26) + 97) + " temp: " + (tempCode > 122 - 96))
    if (tempCode > 122 - 96) {
      tempCode = (tempCode % 122) + 97;
      /*indexArray[obj] = String.fromCharCode((charCode % 122) + 97);
      indexArray[obj] += Math.floor(charCode / 122);*/
    }
    if (!indexArray[obj]) {
      indexArray[obj] = String.fromCharCode((tempCode % 26) + 97);
      indexArray[obj] += Math.floor(charCode / 122);
    } else {
      console.log(obj + " fanns redan i tabellen!");
    }

    console.log(indexArray[obj]);
    charCode++;
  }
  //console.log(indexArray);

  //Array
  var nyArray = [];
  //var i = 1;
  //console.log(oldArray);
  oldArray.forEach(function(element) {
    var tempArray = {};
    for (var obj in oldArray[0]) {

      //check if column contains data.
      //console.log("jajaj" + Array.isArray(element[obj]));
      //if (Array.isArray(element[obj])) console.log("Hittade en array!" + typeof(element[obj][0]));
      if (typeof(element[obj]) == 'object') {
        //console.log(element[obj]);
        element[obj] = changeNameObf(JSON.stringify(element[obj]));
      }
      if (element[obj]) {
        tempArray[indexArray[obj]] = element[obj];
        //i++;
      }
    }
    //console.log("temp " + tempArray);
    nyArray.push(tempArray);
  });

  oldArray.forEach(function(e) {
    console.log("Den som inte har blivit obfuskerad!")
    console.log(e);
  });
  nyArray.forEach(function(e) {
    console.log("Den som har blivit obfuskerad!")
    console.log(e);
  });
<<<<<<< Updated upstream
  return nyArray;
=======
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

      //Convert number to string
      if (typeof(tempDataString) == "number") {
        tempDataString = tempDataString.toString();
      }

      //Encrypts data in array
      for (var i = 0; i < tempDataString.length; i++) {
        var newCharcode = tempDataString[i].charCodeAt();
        if (newCharcode == 32 || newCharcode == 92 - 3) {
          console.log("92||32>")
          replacementDataString += String.fromCharCode(newCharcode);
        } else {
          replacementDataString += String.fromCharCode(newCharcode + q);
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
  printPlace.innerHTML += text;
}

function insertObject() {
  var start = new Date();
  var v = $("#objectField").val();
  v = caesarEncryption(v);
  //console.log("servers.php?make=1&jsonstring=" + v);
  $.ajax({
    type: "get",
    url: "servers.php?make=1&data=" + v,
    success: function(data) {

      bool = true;
      $("#objectField").val("");
      var diff = new Date() - start;
      console.log(diff);
      return;
    }
  })

  //console.log("klickade på insert knappen!" + v);
}

function caesarDecryption(arrayJSON) {
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
        indexNames[obj] += String.fromCharCode(obj[i].charCodeAt() - q);
      }

      //Convert number to string
      if (typeof(tempDataString) == "number") {
        tempDataString = tempDataString.toString();
      }

      //Encrypts data in array
      for (var i = 0; i < tempDataString.length; i++) {
        var newCharcode = tempDataString[i].charCodeAt();
        if (newCharcode == 32 || newCharcode == (92 - 3)) {
          replacementDataString += String.fromCharCode(newCharcode);
        } else {
          replacementDataString += String.fromCharCode(newCharcode - q);
        }
      }


      tempArray[indexNames[obj]] = replacementDataString;
    }
    encryptedArray.push(tempArray);
  });
  console.log(encryptedArray);
  return JSON.stringify(encryptedArray);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
    for (var obj in printArray[0]) {
      text += "<td>" + e[obj] + "</td> ";
    }
    text += "</tr>";
  })
  text += "</table>"

  printPlace.innerHTML = text;

  console.log(printPlace.innerHTML);
}