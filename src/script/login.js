$(function(){
	$('#login').click(function(){
		if(unameCheck()&&upwdCheck()){
			$.ajax({
				type:'post',
				url:'/data/login.php',
				data:{uname:uname,upwd:upwd},
				success:function(resp){
					if(resp.code==1){
						sessionStorage.uid=resp.uid;
						sessionStorage.uname=resp.uname;
						history.go(-1);
					}else{
						$('#uname').parents('dl').find('.tips').show().text('密码或者名字有问题');
					}
				}
			});
		}
	});

	// 用户名验证
	function unameCheck(){
		uname=$.trim($('#uname').val());
		if(!uname){
			$('#uname').siblings('i').show();
			$('#uname').parents('dl').find('.tips').show().text('用户名有问题');
			return false;
		}else{
			$('#uname').siblings('i').hide();
			$('#uname').parents('dl').find('.tips').hide();
			return true;
		}
	}
	//密码验证
	function upwdCheck(){
	    upwd= $.trim($('#upwd').val());
	    if(!upwd){//为空
	      $('#upwd').siblings('i').show();
	      $('#upwd').parents('dl').find('.tips').show().text('密码不能为空');
	      return false;
	    }else{//不为空
	      $('#upwd').siblings('i').hide();
	      $('#upwd').parents('dl').find('.tips').hide();
	      return true;
	    }
	  }
});