<?php
    /*
        用户登录验证
        请求参数,uname,upwd
        输出结果:
        成功:{"code":1,"uid":"","uname":"","phone":""}
        失败{"code":400}
    */
require('init.php');
@$uname=$_REQUEST['uname'] or_die('uname require');
@$upwd=$_REQUEST['upwd'] or_die('upwd require');
$sql="SELECT uid,uname,phone FROM user WHERE (uname='$uname' AND upwd='$upwd') OR (phone='$uname' AND upwd='$upwd')";
$result=msqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);

if($row){
	$output['code']=1;
	$output['uid']=intval($row['uid']);
	$output['uname']=$row['uname'];
	$output['upwd']=$row['upwd'];

}else{
	$output['code']=400;
}
echo json_encode($output);

