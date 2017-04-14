$(function(){
  /*
  * 当文本框失去焦点时，进行当前文本框的验证
  * 当点击注册按钮时，对所有文本框进行验证，当所有验证通过时，提交ajax进行注册
  * 注册成功后，自动登录，并跳转到注册前页面
  * ------------------
  * 文本框验证包含：
  * 1.是否为空；2.格式是否正确；3.是否已被注册（需要发送ajax去验证）
  * ---------------------
  * 注册功能需要3个php功能接口文件
  * 1.邮箱是否已被注册；2.手机号是否已被绑定；3.提交注册
  */
  var uname,phone,upwd;
  //失去焦点时
  $('#uname').blur(unameCheck);
  $('#phone').blur(phoneCheck);
  $('#upwd').blur(upwdCheck);
  $('#upwd2').blur(upwd2Check);
  //判断用户注册协议是否被勾选
  $('.li_checkbox input').click(function(){
    /*if($('.li_checkbox input').is(':checked')){
      $("#register").prop("disabled",false).removeClass('disabled');
    }else{
      $("#register").prop("disabled",true).addClass('disabled');
    }*/
    $("#register").prop("disabled",!$('.li_checkbox input').prop('checked')).toggleClass('disabled');
  });

  //提交注册时
  $('#register').click(function(){
    var reuname=unameCheck();
    var rephone=phoneCheck();
    var reupwd=upwdCheck();
    var reupwd2=upwd2Check();
    if(reuname&&rephone&&reupwd&&reupwd2){
      $.ajax({
        type:'post',
        url:'/php/user_register.php',
        data:{uname:uname,phone:phone,upwd:upwd},
        success:function(d){
          if(d.code==1){
            sessionStorage.uid=d.uid;
            sessionStorage.uname=d.uname;
            alert('恭喜您注册成功！即将为您返回到注册前的页面！')
            history.go(-1);
          }

        }
      });
    }
  });

  //邮箱验证
  function unameCheck(){
    uname=$.trim($('#uname').val());
    var $unameEm=$('#uname').siblings('em');
    var $unameI=$('#uname').siblings('i');
    var regEmail=/^\w+@\w+\.\w+(\.\w+)?$/;
    if(!uname){//为空
      $unameEm.show().attr('class','icon_error');
      $unameI.show().text('用户名不能为空');
      return false;
    }else if(!regEmail.test(uname)){//格式不正确
      $unameEm.show().attr('class','icon_error');
      $unameI.show().text('请输入正确的邮箱格式');
      return false;
    }else if(unameExist()){//已被注册
      $unameEm.show().attr('class','icon_error');
      $unameI.show().text('该邮箱已被其他用户注册');
      return false;
    }else{
      $unameEm.show().attr('class','icon_ok');
      $unameI.hide();
      return true;
    }
  }
  //验证邮箱是否被注册
  function unameExist(){
    var back;
    $.ajax({
      type:'post',
      url:'php/user_check_uname.php',
      data:{uname:uname},
      async:false,
      success:function(d){
        //console.log(d);
        if(d.code==1){
          back=true;
        }else{
          back=false;
        }
      }
    });
    return back;
  }

  //手机号验证
  function phoneCheck(){
    phone=$.trim($('#phone').val());
    var $phoneEm=$('#phone').siblings('em');
    var $phoneI=$('#phone').siblings('i');
    var regPhone=/^1[3578]\d{9}$/;
    if(!phone){//为空
      $phoneEm.show().attr('class','icon_error');
      $phoneI.show().text('手机号不能为空');
      return false;
    }else if(!regPhone.test(phone)){//格式不正确
      $phoneEm.show().attr('class','icon_error');
      $phoneI.show().text('请输入正确的手机号格式');
      return false;
    }else if(phoneExist()){//已被注册
      $phoneEm.show().attr('class','icon_error');
      $phoneI.show().text('该手机号已被其他用户绑定');
      return false;
    }else{
      $phoneEm.show().attr('class','icon_ok');
      $phoneI.hide();
      return true;
    }
  }
  //验证手机号是否被注册
  function phoneExist(){
    var back;
    $.ajax({
      type:'post',
      url:'php/user_check_phone.php',
      data:{phone:phone},
      async:false,
      success:function(d){
        //console.log(d);
        if(d.code==1){
          back=true;
        }else{
          back=false;
        }
      }
    });
    return back;
  }

  //验证密码
  function upwdCheck(){
    upwd=$.trim($('#upwd').val());
    var $upwdEm=$('#upwd').siblings('em');
    var $upwdI=$('#upwd').siblings('i');
    if(!upwd){//为空
      $upwdEm.show().attr('class','icon_error');
      $upwdI.show().text('密码不能为空');
      return false;
    }else if(upwd.length<6||upwd.length>12){//格式不正确
      $upwdEm.show().attr('class','icon_error');
      $upwdI.show().text('密码长度应为6~12位');
      return false;
    }else{
      $upwdEm.show().attr('class','icon_ok');
      $upwdI.hide();
      return true;
    }
  }
  //验证重复密码
  function upwd2Check(){
    var upwd2=$.trim($('#upwd2').val());
    var $upwd2Em=$('#upwd2').siblings('em');
    var $upwd2I=$('#upwd2').siblings('i');
    if(!upwd2){//为空
      $upwd2Em.show().attr('class','icon_error');
      $upwd2I.show().text('密码不能为空');
      return false;
    }else if(upwd2.length<6||upwd2.length>12){//格式不正确
      $upwd2Em.show().attr('class','icon_error');
      $upwd2I.show().text('密码长度应为6~12位');
      return false;
    }else if(upwd2!=upwd){
      $upwd2Em.show().attr('class','icon_error');
      $upwd2I.show().text('两次密码不一致');
      return false;
    }else{
      $upwd2Em.show().attr('class','icon_ok');
      $upwd2I.hide();
      return true;
    }
  }

});



