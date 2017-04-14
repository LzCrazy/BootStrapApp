<?php
/*
	注册新用户
	请求参数：
		uname:
		upwd:
		phpne
	结果：
		成功
		｛"code":1,"uid":3,"uname":"LzCrazy"｝
		失败：
		code：500

*/
@$uname=$_REQUEST['uname'] or_die('uname required');
@$upwd=$_REQUEST['upwd'] or_die('upwd required');
@$phone=$_REQUEST['phone'] or_die('phone required');

require('init.php');
$output['uname']=$uname;

$sql="INSERT INTO user (uid,uname,phone,upwd) VALUE(NULL,'$uname','$phone','$upwd')";
$result=mysqli_query($conn,$sql);
if($result){
	$output['code']=1;
	$output['uid']=intval(mysqli_insert_id($conn));
}else{
	$output['code']=500;
}
echo json_encode($output);