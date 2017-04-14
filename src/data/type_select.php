<?php
/*查询所有的课程类型*/
require('init.php');

$sql = "SELECT * FROM type";
$result = mysqli_query($conn,$sql);
$output= mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);

