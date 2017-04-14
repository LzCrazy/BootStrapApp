$(function(){
	$.ajax({
		type:'get',
		url:'/data/teacher_select.php',
		success:function(resp){
			var htmlStr='';
			for(var i=0;i<resp.length;i++){
				htmlStr+=
				`<li class="clearfloat"`
				  +`<img src="`+resp[i].tpic`" alt="" />`
				  +'<h3>'+result[i].tname+'<span>'+result[i].maincourse+'</span></h3>'
		          +'<dl>'
		          +'<dt>工作经历：</dt>'
		          +'<dd>'+result[i].experience+'</dd>'
		          +'</dl>'
		          +'<dl>'
		          +'<dt>授课风格：</dt>'
		          +'<dd>'+result[i].style+'</dd>'
		          +'</dl>'
		          +'</div>'
				`</li>`;
			}
		}
	});
})