$(function(){
  var type=0;
  var pageNum=1;
  var pageCount;

  cList();

  //显示课程分类列表
  $.ajax({
    type:'post',
    url:'php/type_select.php',
    success:function(d){
      //console.log(d);
      var typeHtml='';
      for(var i=0;i<d.length;i++){
        typeHtml+='<a href="" data-type="'+d[i].tpid+'">'+d[i].tpname+'</a>';
      }
      $('.course_tag').append(typeHtml);
    }
  });

  //页码切换
  $('.pages').on('click','a',function(e){
    e.preventDefault();
    var index=$(this).index();
    console.log(index);
    if(index==0){/
      if(pageNum==1) return;
      pageNum--; //用户点击了“下一页”
      if(pageNum==pageCount) return;
      pageNum++;
    }else{
      pageNum=index;
    }
    cList();
  });

  //类型切换
  $('.course_tag').on('click','a',function(e){
    e.preventDefault();
    $('.course_tag a').removeClass();
    $(this).addClass('active');
    type=$(this).attr('data-type')?$(this).attr('data-type'):0;
    pageNum=1;
    cList();
  });

  //显示课程列表：按分类显示相应的内容；动态生成页码
  function cList(){
    $.ajax({
      type:'post',
      url:'php/course_select.php',
      data:{type:type,pageNum:pageNum},
      success:function(d){
        var data=d.data;
        var liHtml='';
        for(var i=0;i<data.length;i++){
          liHtml+=`<li class="clearfloat">
              <a href="course_detail.html?cid=${data[i].cid}" class="course_img"><img src="${data[i].pic}" alt=""/></a>
              <div class="information">
              <h2><a href="course_detail.html?cid=${data[i].cid}">${data[i].title}</a></h2>
              <p>讲师：${data[i].tname}</p>
              <p>课时：${data[i].cLength}</p>
              <p>开课时间：${data[i].startTime}</p>
              <p>上课地点：${data[i].address} <a href="">查看各校区地址</a></p>
              </div>
              <span>¥ ${data[i].price}</span>
              <a href="course_detail.html?cid=${data[i].cid}" class="course_btn">查看详情</a>
              </li>`;
        }
        $('.course_list>ul').html(liHtml);

        //生成页码
        var pageHtml='<a href="">上一页</a>';
        for(var i=1;i<=d.pageCount;i++){
          pageHtml+='<a href="">'+i+'</a>';
        }
        pageHtml+='<a href="">下一页</a>';
        $('.pages').html(pageHtml);
        $('.pages a').eq(d.pageNum).addClass('cur');
        if(d.pageNum==1){
          $('.pages a:first').addClass('default');
        }
        if(d.pageNum==d.pageCount){
          $('.pages a:last').addClass('default');
        }

        pageCount=d.pageCount;
      }
    });
  }

});














