<?php
$mysqli = new mysqli("localhost", "root", "", "exjobb");
if($mysqli->connect_error) {
  exit('Could not connect');
}


if(isset($_GET["make"]) && $_GET["make"] == 0){
  $sql = "SELECT * FROM data_changeindex";
$result = mysqli_query($mysqli, $sql);
$jsonarray = '[';
$index = 1;
$num_rows =  mysqli_num_rows($result);
while($row = mysqli_fetch_array($result)) {
  if($index < $num_rows){
    $jsonarray .= $row['data'] . ',';
  }else{
    $jsonarray .= $row['data'];
  }
  $index++;
}
$jsonarray .= ']';


  echo $jsonarray;
}

if(isset($_GET["make"]) && $_GET["make"] == 1){
  $jsondata = ($_GET['data']);
  //echo "yoyoyoyo " . $jsondata . " was it data here?";
  $sql = "INSERT INTO data_changeindex (data)
          VALUES ('$jsondata')";

  if ($mysqli->query($sql) === TRUE) {
      $last_id = $mysqli->insert_id;
      echo "New record created successfully. Last inserted ID is: " . $last_id;
  } else {
      echo "Error: " . $sql . "<br>" . $mysqli->error;
  }
}
?>
