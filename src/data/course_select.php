<?php
/**
*分页获取产品信息
*请求参数：
  pageNum-需显示的页号；默认为1
  type-可选，默认为0
*输出结果：
  {
    totalRecord: 37,  -总记录数
    pageSize: 6,      -每页显示条数
    pageCount: 7,     -总页数
    pageNum: 1,       -请求页数
    type: 1,          -请求类型
    data: [{},{} ... {}]
  }
*/
require('init.php');

@$pageNum = $_REQUEST['pageNum'] or $pageNum = 1;
@$type = $_REQUEST['type'] or $type = 0;

$output['pageNum'] = intval($pageNum);
$output['type'] = intval($type);
$output['pageSize'] = 3;

//获取总记录数和总页数
if($type==0){
  $sql = "SELECT COUNT(*) FROM course";
}else{
  $sql = "SELECT COUNT(*) FROM course WHERE typeId=$type";
}
$result = mysqli_query($conn,$sql);
$output['totalRecord'] = intval( mysqli_fetch_row($result)[0] );
$output['pageCount'] = ceil($output['totalRecord']/$output['pageSize']);

//获取指定页中的数据
$start = ($output['pageNum']-1)*$output['pageSize'];
$count = $output['pageSize'];
if($type==0){
  $sql = "SELECT * FROM course,type,teacher WHERE course.typeId=type.tpid and course.teacherId=teacher.tid ORDER BY cid DESC LIMIT $start,$count";
}else{
  $sql = "SELECT * FROM course,type,teacher WHERE course.typeId=type.tpid and course.teacherId=teacher.tid and typeId=$type ORDER BY cid DESC LIMIT $start,$count";
}

$result = mysqli_query($conn,$sql);
$output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);


echo json_encode($output);