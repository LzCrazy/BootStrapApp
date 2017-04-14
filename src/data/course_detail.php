<?php
/**
*根据课程ID返回课程详情
*请求参数：
  cid-课程ID，必需
*输出结果：
  {
    "cid": 1,
    "title1":"xxx",
    ...
  }
*/
@$cid = $_REQUEST['cid'] or die('cid required');

require('init.php');

$sql = "SELECT * FROM course,teacher WHERE cid=$cid and course.teacherId=teacher.tid";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if($row){
  $output = $row;
}

echo json_encode($output);