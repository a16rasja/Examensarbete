<?php
$mysqli = new mysqli("localhost", "root", "", "exjobb");
if($mysqli->connect_error) {
  exit('Could not connect');
}
$sql = "SELECT * FROM users";

/*$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($uid, $uname, $ulname, $umail);
$stmt->fetch();
$stmt->close();*/

$result = mysqli_query($mysqli, $sql);

echo "<table onclick='hideElement()'>";
echo "<tr>";
echo "<th>User ID</th>";
echo "<th>Name</th>";
echo "<th>Lastname</th>";
echo "<th>Mail</th>";
while($row = mysqli_fetch_array($result)) {
  echo "</tr><tr>";
  echo "<td>" . $row['id'] . "</td>";
  echo "<td>" . $row['name'] . "</td>";
  echo "<td>" . $row['lastname'] . "</td>";
  echo "<td>" . $row['mail'] . "</td>";
  echo "</tr>";
}
echo "</table>";

if(isset($_GET["make"]) && $_GET["make"] == 1){
  $uname = $_GET["uName"];
  $ulname = $_GET["uLastName"];
  $umail = $_GET["uMail"];
  $sql = "INSERT INTO users (name, lastname, mail)
          VALUES ('$uname', '$ulname', '$umail')";

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
