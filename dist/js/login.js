$(function(){function n(){return e=$.trim($("#uname").val()),e?($("#uname").siblings("i").hide(),$("#uname").parents("dl").find(".tips").hide(),!0):($("#uname").siblings("i").show(),$("#uname").parents("dl").find(".tips").show().text("用户名不能为空"),!1)}function i(){return s=$.trim($("#upwd").val()),s?($("#upwd").siblings("i").hide(),$("#upwd").parents("dl").find(".tips").hide(),!0):($("#upwd").siblings("i").show(),$("#upwd").parents("dl").find(".tips").show().text("密码不能为空"),!1)}var e,s;$("#uname").blur(n),$("#upwd").blur(i),$("#login").click(function(){n()&&i()&&$.ajax({type:"get",url:"/data/login.php",data:{uname:e,upwd:s},success:function(n){console.log(n),1==n.code?(sessionStorage.uid=n.uid,sessionStorage.uname=n.uname,history.go(-1)):$("#uname").parents("dl").find(".tips").show().text("用户名或密码错误"),console.log(n.code)}})})});