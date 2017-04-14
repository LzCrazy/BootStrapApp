/**
 * Created by jalance on 17/4/11.
 */
$(function () {
   $('.header_box').load('/view/tel/header.html',function(){
        //判断用户的登录情况
       if(sessionStorage.uid) {
       	`<a href=""><em class="icon-user"></em>个人中心<em class="icon-triangle"></em></a>`;
       }
   });
    $('.footer').load('/view/tel/footer.html');
});