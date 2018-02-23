(()=>{
    var pid=null; //定义一个保存图片数据库ID的全局,当图片上传后返回ID，pid来保存
    var url=null; //定义一个全局保存所有图片地址 为之后替代文章内容区域的图片 以便数据库保存合适的数据
  ajax({
    type: "get",
    url: "01-header.html",
  }).then(html=>{
    header.innerHTML=html;
    //头部导航栏
    window.onscroll=function(){

      var scrollTop=
        document.documentElement.scrollTop
        ||document.body.scrollTop;
      var headerTop=
        document.getElementsByClassName("header-top")[0];
      var login=
          document.getElementsByClassName("login")[0];
	//console.log(typeof document.getElementsByClassName("side-nav")[0]);
	  if(typeof document.getElementsByClassName("side-nav")[0]!=="undefined"){
		 // console.log(1);
		  var side=document.getElementsByClassName("side-nav")[0];
		  var show_side=side.getElementsByTagName("li");
		  var a=side.getElementsByTagName("a");
		     // console.log(a);
		  //arr 保存所有楼层元素
		  var arr=[];
		  for(var i=0;i<a.length;i++){
			     arr.push(document.getElementById(a[i].dataset.floor));
		  }
		  function floor(top,height,elem){
				if(top-height<=scrollTop){
					//console.log(1);
					for(var i=0;i<show_side.length;i++){
					   // console.log(1);
						show_side[i].className="";
					}
					show_side[elem].className="nav-show";
				}
			}
			  // 侧边导航栏
		  for(var i=0;i<arr.length;i++) {
			  floor(arr[i].offsetTop, arr[i].clientHeight, i);
		  }
		  //楼层滚动动画
			//console.log(scrollTop);
		  side.onclick=function(e){
			  e.preventDefault();
			  var p=document.getElementById(e.target.dataset.floor);
			  var scroll=p.offsetTop-p.clientHeight/2;
			  moveTo(scroll);
		  }
		   if(scrollTop>=250){
			//让header-top变为fixed定位，固定在文档显示区顶部
			side.style.left="30px";
			side.style.opacity="1";
		  }else{//否则
			//让header-top变回原定位方式
			side.style.left="-100px";
			side.style.opacity="0";
		  }

	  }
      //如果scrollTop>=384
      if(scrollTop>=250){
        //让header-top变为fixed定位，固定在文档显示区顶部
//        side.style.left="30px";
//        side.style.opacity="1";
        headerTop.className="header-top fixed";
        login.className="login fixed";
      }else{//否则
        //让header-top变回原定位方式
//        side.style.left="-100px";
//        side.style.opacity="0";
        headerTop.className="header-top";
        login.className="login";
      }
	   //楼层滚动动画
	  	  var speed=20,timer=null,dist=0,dura=500;
		  var interval=dura/speed,step=0,moved=speed;
		  function moveTo(targetTop){
			if(timer=null)
			 // var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			  console.log("move to");
			  dist=targetTop-scrollTop;
			  step=dist/speed;
			  timer=setInterval(function(){
				window.scrollBy(0,step);
				moved--;
				if(moved==0){
				  clearInterval(timer);
				  timer=null;
				  moved=speed;
				}
			  },interval)
		  }

      //回到顶部
		//var footer=document.getElementById("footer");
        var to_top=document.getElementsByClassName("to-top")[0];
        to_top.onclick=e=>{
            e.preventDefault();
            moveTo(0);
        }

      if(scrollTop>=1200){
         // to_top.style.display="block";
          to_top.style.opacity="1";
      }else{
         // to_top.style.display="none";
          to_top.style.opacity="0";
      }
    }
    //发布
    var fb=document.getElementsByClassName('top-fb')[0];
    var img=fb.getElementsByTagName("b");
    //为发布绑定事件
    var span=fb.getElementsByTagName("span")[0];
    var div=fb.getElementsByTagName("div")[0];
    //console.log(div);
/********************************************/
    //文章富文本编辑器
    $("#ta").wysiwyg({
        autoGrow:true,
        controls:{
            html:{visible:true}
        }
    })
     //修改富文本编辑器的图片插入功能
      console.log($("li.insertImage")[0])
      $("li.insertImage")[0].onclick=function(e){
          $(".wysiwyg-dialog-title").html("请拖入需要插入的图片");
          var $addImage=$("#wysiwyg-addImage fieldset");  //拖拽区域
          $addImage.html("<h1 style='line-height:100px' >将图片拖拽到此处</h1>");
          $(".wysiwyg-dialog")[0].style.opacity="0.6";
          //阻止浏览器的默认打开图片行为
          $(document).on({
              dragenter:e=>{e.preventDefault();},
              dragover:e=>{e.preventDefault();},
              dragleave:e=>{e.preventDefault();},
              drop:e=>{e.preventDefault();}
          })
          //拖拽区域 $addImage
          $addImage[0].ondrop=e=> {
              e.preventDefault();
              var fileInfo = e.dataTransfer.files;
              if (fileInfo[0].size / 1024 > 2048) {
                  alert("图片，不能超过2MB");
                  return;
              }
              if (fileInfo[0].type.split("/")[0] != "image") {
                  alert("图片格式不对");
                  return;
              }
              //图片插入文章内容
              var img = window.webkitURL.createObjectURL(fileInfo[0]);
              var html = `<p class="show-pic"><img src="${img}" style="width:468px"/></p>`;
              //获取文章文本内容区域 插入
              var arcticle=$("#ta").wysiwyg("getContent");//保存文章主题内容
              //console.log(arcticle);
              arcticle+=`${html}`;
              $("#ta").wysiwyg("setContent",arcticle);  //将图片放回
              arcticle=$("#ta").wysiwyg("getContent");//再次获取放回后的内容 以便后续处理
              //console.log($("#ta").wysiwyg("getContent"))
              //$("#ta-wysiwyg-iframe")[0].style.height="600px";
              //将文本内容区域的高度变为 图片高度+原来的高度  保证文章内容的显示
              var height=$("div.wysiwyg")[0].style.height;  //获取当前文章高度
              height=height.replace("px","");  //去掉单位
              //将整体浮动框架高度改变 从而使图片完整显示
              $("#ta-wysiwyg-iframe")[0].style.height=height*1+300+"px";
              //将文本框高度同步变高
              $("div.wysiwyg")[0].style.height=height*1+310+"px";
              //保存文章图片  在服务器端保存文件
              var fd=new FormData();
             //console.log(fileInfo[0]);
              fd.append("mypic",fileInfo[0]);
              //console.log(pid);
              fd.append("pid",pid);  //全局用于控制是更新还是插入  并被用来后续当用户点击保存按钮时来找对应图片
              //console.log(formdata)
              fd.append("tid",tid); //将文章的ID调过去
              var xhr=new XMLHttpRequest();
              xhr.onreadystatechange=()=>{
                 if(xhr.readyState==4&&xhr.status==200){
                     console.log(JSON.parse(xhr.responseText));
                     pid= JSON.parse(xhr.responseText).id;
                     url=JSON.parse(xhr.responseText).img;
                 }
              }
              xhr.open("POST","data/index/arcticle_pic.php",true);
              xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
              xhr.send(fd);
          }

      };



    $("div.wysiwyg")[0].style.width="900px";
    $("div.wysiwyg")[0].style.height="200px";
    $("div.wysiwyg")[0].style.opacity=0.6;



   // console.log($("#ta-wysiwyg-iframe").attr("height"));
    var act=document.querySelector(".arcticle");
    //console.log(arcticle);
    //让编辑器隐藏
    act.style.display="none";
    $("#close").click((e)=>{
        e.preventDefault();
        act.style.display="none";
    })
    //获取文章内容

    $("#btnSave").click((e)=>{ //提交按钮
        e.preventDefault();
        var title=$(".title").val();  //保存文章标题
        //console.log($(".title"));
        var labelarr=[];  //保存文章标签
        var arcticle=$("#ta").wysiwyg("getContent");//保存文章主题内容
        var now=new Date().getTime();  //保存文章的发布时间
        var label=$("p.label a");//保存所有的标签
        var Reg=/<img.*?>/g;
        //console.log(url);
        if(url){  //如果文章中有图片
            var img = url.split(",");  //数据库中的img地址  切割成数组
        }
        var img_arcticle=arcticle.match(Reg); //提取文章中的所有img标签
        //console.log(img_arcticle);
        // console.log(arcticle)
        var img_arcticle=arcticle.match(Reg);
        var imgStr="";  //用来保存文章图片
        //if(img_arcticle){  //如果文章中有图片
        for(var p in img_arcticle){
                var src= img_arcticle[p].split("\"")[1];//.replace(/"|&gt;/g,"");
                if(p==img_arcticle.length-1){
                    imgStr+=src;
                }else{
                    imgStr+=src+",";
                }
            }
            imgStr=imgStr.split(",") //将正则匹配的文章内容中的img地址  切割成数组
            //循环替换文章内容中的img地址 替换成数据库中的保存地址
            for (var p in img) {
                arcticle=arcticle.replace(imgStr[p],img[p]);
            }

       // }
        //console.log(imgStr);
        //console.log(arcticle)
        for(var i=0;i<label.length;i++) {
            if ($(label[i]).is(".check")) {
                labelarr.push($(label[i]).attr("href"));
            }
        }
        //console.log(img);
        $.ajax({
            type:"post",
            url:"data/index/update_arcticle.php",
            data:{title:title,
                  labelarr:labelarr,
                  arcticle:arcticle,
                  time:now,
                  pid:pid
            }
        }).then(data=>{
            console.log(data);
            if(data.code>0){
                alert("发布成功");
                $("#ta").wysiwyg("setContent",""); //将文本内容清空
                $(".title")[0].value=""; //提交后将标题清空
                pid=null;  //提交后将pid 重置  准备下次提交
                url=null; //提交后  url 重置  准备下次提交
                //将标签都清空
                for(var i=0;i<label.length;i++) {
                    if ($(label[i]).is(".check")) {
                        $(label[i]).removeClass("check");
                    }
                }
                //将文本框区域高度变回原来值
                $("#ta-wysiwyg-iframe")[0].style.height=105+"px";
                $("div.wysiwyg")[0].style.height=202+"px";
            }else{
                alert("发布失败，请检查");
            }


        })

    })
    //获取标签内容
    //选择标签加class
    //定义一个数组存储所选标签内容
    $("p.label").on("click","a",function(e){
        e.preventDefault();
        var sum=0;   //用于累计选取标签数量  最多只能选取5个
        var label=$("p.label a");//保存所有的标签
        for(var i=0;i<label.length;i++){
            if($(label[i]).is(".check")){
                sum++;
            }
        }
        if(sum<=4){
            $(e.target).toggleClass("check");
        }else{
            $(e.target).removeClass("check");
           // alert("最多选取5个标签");
        }

    })
/**************************************/
    //当点击时编辑器出现
    span.onclick=function(){
        //整个网页遮罩
        //$(".arcticle")[0].style.height="1600px";
        $("#ta-wysiwyg-iframe")[0].style.width="900px" //修改文本编辑器插件的宽度
        //console.log($("#ta-wysiwyg-iframe").attr("height"))
        var iframe_height=$("#ta-wysiwyg-iframe").attr("height");
        //使用定时器来监听 iframe的实时高度
        setInterval(function(){
            var now_height=$("#ta-wysiwyg-iframe").attr("height");
            //console.log(now_height+"_"+iframe_height);
            if(now_height*1>iframe_height*1){
                iframe_height=now_height;  //实时更新当前高度
                $("div.wysiwyg")[0].style.height=iframe_height*1+30+"px";
                //console.log($(".arcticle")[0].style.height)
            }
        },10)
        //非登录状态 禁止发布文章
        ajax({
            type:"get",
            url:"data/user/isLogin.php",
            dataType:"json",
        }).then(data=>{
            //console.log(data);
            if(data.ok==1){
                act.style.display="block";
                for(var i=0;i<img.length;i++){
                    console.log(i);
                    img[i].style.opacity=1;
                    img[i].style.transform=`rotate(${(i+1)*30}deg) translateX(150px)`;
                }
                div.style.opacity=0.8;
                div.style.top=`-176px`;
            }else{
                alert("请先登录");
            }
        });
    }

    div.onmouseout=function(){
      for(var i=0;i<img.length; i++){
        img[i].style.opacity=0;
        img[i].style.transform=`rotate(${(i+1)*30}deg) translateX(-150px)`;
      }
      div.style.opacity=0;
      div.style.top=`-342px`;
    }

    var nav=document.getElementById("nav");
    var list=nav.getElementsByTagName("a");
    var index=location.href.lastIndexOf("/");
    var href=location.href.slice(index+1).split(".")[0];

     for(var i of list){
     		i.className="";
     		//console.log(i.dataset.href);
      	 if(i.dataset.href==href){
      	   i.className="nav-show";
      	 }
      }
    //************登录注册界面************************************
      var $loginDialog=$("#dialog-login"),
          $formLogin=$("#dialog-login>form"),
          $txtName=$("[name=uname]"),
          $txtPwd=$("[name=upwd]"),
          $msg=$("#msg"),
          $welcome=$("#welcome"),
          $btnLogin=$("#btnLogin"),
          $login=$("span.top-login"),
          $fb=$("span.top-fb"),
		  $home=$("#home"),
		  $loginout=$("#loginout");
          //console.log($fb);

      $loginDialog.dialog({
          autoOpen:false,
          modal:true,
          show:{effect:"blind", duration: 1000},
          hide:{effect:"explode", duration:1000},
          buttons:{
              "登录":()=>{
                  if($txtName.val().trim()==="")
                      $msg.show().html("用户名不能为空!")
                  else if($txtPwd.val().trim()==="")
                      $msg.show().html("密码不能为空!")
                  else{
                      console.log(1);
                      $.ajax({
                          type:"post",
                          url:"data/user/login.php",
                          data:$formLogin.serialize()
                      }).then(data=>{
                          if(data.ok==1){
                              $loginDialog.dialog("close");
                             //$btnLogin.hide();
                              $login.hide();
							  $home.show();
							  $loginout.show();
                             // console.log($fb.attr("width"));
                              $welcome.html(data.msg+"欢迎回来！").show();
                          }else{
                              $msg.html(data.msg).show();
                          }
                      })
                  }
              },
              "返回":()=>{
                  $loginDialog.dialog("close");
              }
          },
          close(){//以任何手段关闭对话框时，自动触发！
              //清空表单:
              $formLogin[0].reset();
              $msg.html("").hide();
          }
      });
      $btnLogin.click(()=>{
          $loginDialog.dialog("open");
      })
/**************************************************/
//注销登录
	var loginout=document.getElementById("loginout");
    //var outA =loginout.getElementsByTagName("a")[0];
    //console.log(loginout);
	loginout.onclick=function(e){
        e.preventDefault();
        ajax({type:"get",url:"data/user/logout.php"}).then(data=>{
            data==1&&(loginout.style.display="none");
            //$msg.hide();
            $login.show();
            $welcome.hide();
            //$loginout.show();
            $home.hide();
            act.style.display="none";
        });
	}

    //判断是否登录
    ajax({
        type:"get",
        url:"data/user/isLogin.php",
        dataType:"json",
        }).then(data=>{
            //console.log("是否登录");
            //console.log(data);

        if(data.ok==1){
            //$msg.hide();
            //$welcome.show();
            $login.hide();
            $loginout.show();
            $home.show();
            //console.log($welcome);
            $welcome.html(data.uname+"欢迎回来！").show();
        }
    })
    ///搜索功能
    $(".search button")[0].onclick=(e)=>{
        var search=($("[name=find]").val()).trim();
        if(search!==""){
            location="01_arcticle_list.html?kw="+search;
            //location.href="01_arcticle_list.html?"+search;
        }

    }
    $("[name=find]")[0].onkeydown=e=>{
          if(e.keyCode==13){
              //$(".search button")[0].onclick(e);
              $(".search button")[0].onclick(e)
              console.log($(".search button").onclick(e))
          }
    }
		
  });
})()

