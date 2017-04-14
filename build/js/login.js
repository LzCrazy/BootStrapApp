$(function(){
	/*实现登录功能：
	 * 实现表单验证，判断用户输入是否为空，为空时显示提示信息，并且无法提交ajax
	 * 写php功能接口页面：拿到用户填写的用户名和密码，去数据库中验证是否存在，如果存在，返回code:1,uid,uname,phone;如果不存在，返回状态码code:400
	 * 登录失败后，提示“用户名或密码错误”
	 * 登录成功后，页面跳转到登录前页面
	 * 导航条上显示个人中心及下拉菜单
	 */

	var uname,upwd;
	$('#uname').blur(unameCheck);
	$('#upwd').blur(upwdCheck);

	$('#login').click(function(){
		if(unameCheck()&&upwdCheck()){
			$.ajax({
				type: 'get',
				url: '/data/login.php',
				data: {uname: uname, upwd: upwd},
				success: function (resp) {//
					console.log(resp);
					if (resp.code == 1) {
						sessionStorage.uid = resp.uid;
						sessionStorage.uname = resp.uname;
						history.go(-1);
					} else {
						$('#uname').parents('dl').find('.tips').show().text('用户名或密码错误');
					}
					console.log(resp.code);
				}
			});
		}
	});

	//用户名验证
	function unameCheck(){
		uname= $.trim($('#uname').val());
		if(!uname){
			$('#uname').siblings('i').show();
			$('#uname').parents('dl').find('.tips').show().text('用户名不能为空');
			return false;
		}else{//不为空
			$('#uname').siblings('i').hide();
			$('#uname').parents('dl').find('.tips').hide();
			return true;
		}
	}

	//密码验证
	function upwdCheck(){
		upwd= $.trim($('#upwd').val());
		if(!upwd){
			$('#upwd').siblings('i').show();
			$('#upwd').parents('dl').find('.tips').show().text('密码不能为空');
			return false;
		}else{
			$('#upwd').siblings('i').hide();
			$('#upwd').parents('dl').find('.tips').hide();
			return true;
		}
	}

});




