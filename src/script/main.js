/**
 * Created by jalance on 17/4/11.
 */
$(function () {
   $('.header_box').load('/view/tel/header.html',function(){
        //判断用户的登录情况
       if(sessionStorage.uid) {
       	var userhtml=
       	`<a href=""><em class="icon-user"></em>个人中心<em class="icon-triangle"></em></a>
       	<div class="user_dropdown">
			<p><span>${sessionStorage.uname}</span>，你来了<br />你购买了好多的课程<span>有12类</span>课程</p>
			<div class="userlink_1 clearfloat">
				<a href="">我购买的课程</a>
				<a href="">我的收藏</a>
			</div>
			<div class="userlink_2 clearfloat">
				<a href="">进入个人中心</a>
				<a href="" class="user_quit">推出登陆</a>
			</div>
       	</div>`;
       $('.nav_user').html(userhtml);
       //个人下啦菜单
       $(".nav_user").mouseover(function(){
       	$(".user_dropdown").stop().slideDown(100);
       }).mouseout(function() {
       	$(".user_dropdown").stop().slideUp(100);
       });
       //推出登陆
       $("user_quit").click(function() {
       		sessionStorage.clear();
       });
   }
   });
    $('.footer').load('/view/tel/footer.html');
});