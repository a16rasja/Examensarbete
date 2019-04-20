<?php
$mysqli = new mysqli("localhost", "root", "", "exjobb");
if($mysqli->connect_error) {
  exit('Could not connect');
}


if(isset($_GET["make"]) && $_GET["make"] == 0){
  $sql = "SELECT * FROM data";
$result = mysqli_query($mysqli, $sql);
$jsonarray = '[';
while($row = mysqli_fetch_array($result)) {
  $jsonarray .= $row['data'] . '';
  break;
}
$jsonarray .= ']';


  echo $jsonarray;
}

if(isset($_GET["make"]) && $_GET["make"] == 1){
  $jsondata = ($_GET['data']);
  //echo "yoyoyoyo " . $jsondata . " was it data here?";
  $sql = "INSERT INTO data (data)
          VALUES ('$jsondata')";

  if ($mysqli->query($sql) === TRUE) {
      $last_id = $mysqli->insert_id;
      echo "New record created successfully. Last inserted ID is: " . $last_id;
  } else {
      echo "Error: " . $sql . "<br>" . $mysqli->error;
  }
}
?>
