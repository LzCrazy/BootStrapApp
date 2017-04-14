<?php

/*
向购物车中添加商品
请求参数：
    uid -用户id
    cid -课程id
输出结果：
    {"code":1,"msg":"succ}//成功
    或
    {"coce":2}//购物车中已存在该课程
*/
require('init.php');

@$uid=$_REQUEST['uid'] or die('uid required');
@$cid=$_REQUEST['cid'] or die('cid required');
/*查看指定用户是否有购物车，有则获取购物车id；无则创建，并获取购物车id；*/
$sql="SELECT ctid FROM cart WHERE userId=$uid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row){//购物车存在
    $ctid=$row[0];
}else{//购物车不存在
    $sql="INSERT INTO cart VALUES(NULL,$uid)";
    mysqli_query($conn,$sql);
    $ctid=mysqli_insert_id($conn);
}
/*判断购物车详情表中是否已存在该商品，无则插入，code=1；有则code=2*/
$sql="SELECT did FROM cart_detail WHERE cartId=$ctid AND courseId=$cid";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row){
    $output['code']=2;
}else{
    $sql="INSERT INTO cart_detail VALUES(NULL,$ctid,$cid)";
    mysqli_query($conn,$sql);
    $output['code']=1;
    $output['msg']='succ';
}

echo json_encode($output);





