<?php
/*批量删除
  请求参数:
  dids -详情记录编号
  输出结果：{"code":1}//成功
          或
          {"code":2}//失败
*/
@$dids = $_REQUEST['dids'] or die('dids required');

require('init.php');

$d=implode(',',$dids);

$sql = "DELETE FROM cart_detail WHERE did in ($d)";
$result = mysqli_query($conn,$sql);

if($result){
  $output['code']=1;
  $output['msg']='succ';
}else {
  $output['code']=2;
}
echo json_encode($output);






