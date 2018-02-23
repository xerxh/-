
function loadPage(pno,pageSzie){
   var uid = location.href.split('?')[1];
   ajax({
       type:"get",
       url:"data/index/user_home.php",
       data:`${uid}&pno=${pno}&pageSize=${pageSzie}`,
       dataType:"json"
   }).then(data=>{
       console.log(data);
       if(data.code==1){
           var msg=data.msg.msg;
           var count=data.msg.count;
           var html=` <img src="${msg[0].avatar}" />`;
           document.querySelector(".user_photo").innerHTML=html;

           var html="";
           html+=`<p>
                    <span>
                          ${msg[0].user_name}
                     </span>
                    <img src="Public/home/images/nan-icon.png" alt=""/>
                </p>
                <a href=""  class="btn">+关注</a>`;
           document.querySelector(".user_name").innerHTML=html;
           var html="";
           var Reg=/<img.*?>/g;
           for(var p in msg){
               var introduce=msg[p].introduce.replace(Reg,''); //显示的时候将图片去掉
               html+=
                  `<li>
                    <a href="01_article_show.html?tid=${msg[p].arcticle_id}">
                      <h3>${msg[p].title}</h3>
                    </a>
                    <p>
                      ${introduce}
                    </p>
                    <p class="like">
                        <a class="zan" href="${msg[p].arcticle_id}_${data.msg.pno}">喜欢(${msg[p].love})</a>
                        <a class="comments" href="01_article_show.html?tid=${msg[p].arcticle_id}">评论(${count[p][0].c})</a>
                    </p>
                  </li>`;
           }
            //分页
           var page=data.msg;
           html+=`<li class="page">`;
           if(page.pno-2>0){
               html+=`<a href="${page.pno-1}">上一页</a>`;
           }
           if(page.pno-1>0){
               html+=`<a href="${page.pno-1}">${page.pno-1}</a>`;
           }
           html+=`<a class="now_page" href="${page.pno}">${page.pno}</a>`;
           if(page.pno*1+1<=page.pageCount){
               html+=`<a href="${page.pno*1+1}">${page.pno*1+1}</a>`;
           }
           if(page.pno*1+2<=page.pageCount){
               html+=`<a href="${page.pno*1+1}">下一页</a>`;
           }
           html+=`</li>`;
           console.log(data.msg);
           document.querySelector(".home_show").innerHTML=html;
       }else{
           alert('网络故障,请检查');
       }

   })
}
loadPage(1,3);
// 2:为页码绑定点点事件
//   调用函数
console.log($(".page"))
$(".home_show").on("click","li.page a",function(e){
    console.log(e.target);
    e.preventDefault();
    //console.log(e.targer);
    var pno = ($(e.target).attr("href"));
    console.log(pno);
    loadPage(pno * 1, 3);
});
//喜欢
var love=document.querySelector(".zan");
console.log($(".zan"));
$(".home_show").on("click","p.like a.zan",function(e){
    e.preventDefault();
    //console.log(e.target.parentNode);
    var tid=$(e.target).attr("href").split("_")[0];
    var pno=$(e.target).attr("href").split("_")[1]
    ajax({
        type:"get",
        url:"data/index/love.php",
        data:`tid=${tid}`,
        dataType:"json"
    }).then(output=>{
        console.log(typeof output);
        if(output.code==1){
            console.log(1)
            loadPage(pno);
        }
    })
});
//
$(".home_nav")[0].onclick=function(e){
		var p=$(".home_nav a");
		console.log(p);
		for(var i=0;i<p.length;i++){
			$(p[i]).css("background","");
	
			$(p[i]).css("color","");
				}
	if(e.target.innerHTML=="主页"){
		//$(".home_show").css("opacity",1);
		$(".home_show").show();
		$(e.target).css("background","#fe5273")
		$(e.target).css("color"," #fff")
	}else{
		$(".home_show").hide();
			$(p[0]).css("color","#fe5273")
			$(p[0]).css("background","#fff");
		$(e.target).css("background","#fe5273")
		$(e.target).css("color"," #fff")
		//$(".home_show").css("opacity",0);
	}
}