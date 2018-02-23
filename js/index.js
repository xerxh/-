(()=>{
  ajax({
    type:"get",
    url:"data/index/getfloor.php",
    dataType:"json"
  }).then(data=>{
   // console.log(data);
    var {banner,
      banner_content,
      cos_content,
      cos_tv,
      cos_rank,
      picture_content,
      creat_content,
      creat_list,
      music_content,
      acg_content,
      acg_consult,
      acg_rank
    }=data;
   // console.log(creat_content);


    //加载banner-img
    var oFrag=document.createDocumentFragment();
    for(var key in banner){
      var p=banner[key];
      var a=document.createElement("a");
      a.href=`${p.href.trim()}`;
      var img=document.createElement("img");
      img.className=`d${parseInt(key)+1}`;
      img.src=`${p.img.trim()}`;
      a.appendChild(img);
      oFrag.appendChild(a);
    }
//    var ul=document.createElement("ul");
//    //五个小按钮
//    for(var i=0;i<4;i++){
//      var li=document.createElement("li");
//      ul.appendChild(li);
//    }
    // oFrag.appendChild(ul);
    // for(var i=0;i<8;i++){
    //   var div=document.createElement("div");
    //   oFrag.appendChild(div);
    // }
    //将banner内容放入
    document.querySelector("#banner .banner-img")
      .appendChild(oFrag);
    //加载banner-content
    var oFrag=document.createDocumentFragment();
    for(var p of banner_content){
      var div=document.createElement("div");
      var img=document.createElement("img");
      img.src=`${p.img.trim()}`;
      div.appendChild(img);
      var a=document.createElement("a");
      a.href=`${p.href}`;
      a.innerHTML=`${p.introduct}`;
      div.appendChild(a);
      oFrag.appendChild(div);
    }
    //将banner-content内容放入
    document.querySelector("#banner>.banner-content")
      .appendChild(oFrag);
    //加载cos-content
    var oFrag=document.createDocumentFragment();
    for (p of cos_content) {
      var div=document.createElement("div");
      var html=
          `<img src="${p.img}"/>
          <ul>
            <li><a href="${p.href}">${p.title}</a></li>
            <li  class="price-content">${p.introduct}</li>
            <li><a class="rt" href="${p.herf}">更多</a></li>
          </ul>`;
      div.innerHTML=html;
      oFrag.appendChild(div);
    }
    //将cos-content内容放入
    document.querySelector(".content-cos .cos")
      .appendChild(oFrag);
    //加载cos_tv
    var ul=document.createElement("ul");
    for(var key in cos_tv){
      var li=document.createElement("li");
      if(key<2){
        var html=
          `<b>${parseInt(key)+1}</b>
          <a href="${cos_tv[key].href.trim()}">
            <img src="${cos_tv[key].img.trim()}" />
          </a>
          <div class="text">
            <a href="${cos_tv[key].href.trim()}">
              ${cos_tv[key].introduct.trim()}
            </a>
          </div>`;
          li.innerHTML=html;
          ul.appendChild(li);
      }else{
        var  html=
          `<span>${parseInt(key)+1}</span>
          <a href="${cos_tv[key].href.trim()}">
            <img src="">
          </a>
          <div class="text">
            <a href="${cos_tv[key].href.trim()}" >
              ${cos_tv[key].introduct.trim()}
              </a>
          </div>`;
        li.innerHTML=html;
        ul.appendChild(li);
      }
    }
    //cos_tv内容放入
    document.querySelector(".content-cos .cos-TV")
        .appendChild(ul);
    //加载cos-rank
    var ul=document.createElement("ul");
    for(var key in cos_rank){
      var li=document.createElement("li");
      if(key<2){
        var html=
          `<b>${parseInt(key)+1}</b>
          <a href="${cos_rank[key].href.trim()}">
            <img src="${cos_rank[key].img.trim()}"/>
          </a>
          <div class="text">
            <a href="${cos_rank[key].href.trim()}">
              ${cos_rank[key].introduct.trim()}
            </a>
          </div>`;
          li.innerHTML=html;
          ul.appendChild(li);
      }else{
        var  html=
          `<span>${parseInt(key)+1}</span>
          <a href="${cos_rank[key].href.trim()}">
            <img src="" />
          </a>
          <div class="text">
            <a href="${cos_rank[key].href.trim()}" >
              ${cos_rank[key].introduct.trim()}
            </a>
          </div>`;
        li.innerHTML=html;
        ul.appendChild(li);
      }
    }
    //cos_rank内容放入
    document.querySelector(".content-cos-right [data-rank=rank]")
      .appendChild(ul);
   //picture-content 图片榜单
    var oFrag=document.createDocumentFragment();
    var ul1=document.createElement("ul");
    var ul2=document.createElement("ul");
    for(var key in picture_content){
      var p=picture_content[key];
      if(key<5){
        var li=document.createElement("li");
        var html=
        `<div class="content_imglist_box">
            <a href="${p.href.trim()}">
              <img src="${p.img.trim()}" alt="" />
            </a>
              <div class="img_footer">
            <span>${parseInt(key)+1}</span>
            </div>
          </div>
          <p>
            <a href="${p.href.trim()}">
              <span >${p.name.trim()}</span>
            </a>
            <a class="rt" href="${p.href.trim()}">
              <span class="rt">${p.count.trim()}</span>
            </a>
          </p>`;
          li.innerHTML=html;
          ul1.appendChild(li);
      }else{
        var li=document.createElement("li");
        var html=
        `<div class="content_imglist_box">
            <a href="${p.href.trim()}">
              <img src="${p.img.trim()}" alt="" />
            </a>
              <div class="img_footer">
            <span>${parseInt(key)+1}</span>
            </div>
          </div>
          <p>
            <a href="${p.href.trim()}">
              <span >${p.name.trim()}</span>
            </a>
            <a class="rt" href="${p.href.trim()}">
              <span class="rt">${p.count.trim()}</span>
            </a>
          </p>`;
        li.innerHTML=html;
        ul2.appendChild(li);
      }
    }

    oFrag.appendChild(ul1);
    oFrag.appendChild(ul2);
  //将content-imglist内容插入
  ul2.appendChild(li)
    document.querySelector(".content-imgList>[data-picture=picture]")
      .appendChild(oFrag);
  //加载创作榜单create_content
  var ul=document.createElement("ul");
  for(var key in creat_content){
    var p=creat_content[key];
      var li=document.createElement("li");
      var html=
      `<div class="content_imglist_box create_list">
          <a href="${p.href.trim()}">
            <img src="${p.img.trim()}" alt="" />
          </a>
          <div class="img_footer">
          <span>${parseInt(key)+1}</span>
          </div>
        </div>
        <p>
          <a href="${p.href.trim()}">
            <span >${p.name.trim()}</span>
          </a>
          <a class="rt" href="${p.href.trim()}">
            <span class="rt">${p.count.trim()}</span>
          </a>
        </p>`;
        li.innerHTML=html;
        ul.appendChild(li);
       // console.log(li);
    };

  var li1=document.createElement("li");
  var li2=document.createElement("li");
  var html="";
  for(var key in creat_list){
    var p=creat_list[key];
    //console.log(creat_list.length);
    if(key==0||key==6){
      var html=
      `<div class="content_imglist_box">
          <a href="${p.href.trim()}">
            <img src="${p.img.trim()}" alt="" />
          </a>
            <div class="img_footer">
          <span>${parseInt(key)+1}</span>
          </div>
        </div>
        <p class="list_style">
          <a href="${p.href.trim()}">
            <span >${p.name.trim()}</span>
          </a>
          <a class="rt" href="${p.href.trim()}">
            <span class="rt">${p.count.trim()}</span>
          </a>
        </p>`;
      //  li.innerHTML=html;
  }else{
     html+=
    `<div>
        <span class="lf">${parseInt(key)+1}</span>
        <a class="lf" href="${p.href.trim()}">${p.title}</a>
      </div>`;
      if(key==5){
        li1.innerHTML=html;
        ul.appendChild(li1);
        //console.log(li1);
      }else
      if(key==creat_list.length-1){
        li2.innerHTML=html;
        ul.appendChild(li2);
      }
  }
  }
  //console.log(ul);
  document.querySelector(".content-imgList>[data-create=create]")
    .appendChild(ul);


  //古风音乐 music
  var oFrag=document.createDocumentFragment();
  var ul1=document.createElement("ul");
  ul1.className="music-list";
  var ul2=document.createElement("ul");
  ul2.className="music-list";

  for(var key in music_content){
    var p=music_content[key];
    var li=document.createElement("li");
    if(key<5){
        var html=
              `<div class="content_imglist_box">
                <a href="${p.href}}">
                  <img src="${p.img}" />
                </a>
                  <div class="img_footer">
                    <span>${parseInt(key)+1}</span>
                  </div>
               </div>
                  <div class="music-title">
                        <a href="${p.href}">${p.title}</a>
                  </div>
                <p>
                  <a href="${p.href}">
                      <span >${p.name}</span>
                    </a>
                </p>`
        li.innerHTML=html;
        ul1.appendChild(li);
    }else{
    //  var li=document.createElement("li");
      var html=
            `<div class="content_imglist_box">
              <a href="${p.href}}">
                <img src="${p.img}" />
              </a>
                <div class="img_footer">
                  <span>${parseInt(key)+1}</span>
                </div>
             </div>
                <div class="music-title">
                      <a href="${p.href}">${p.title}</a>
                </div>
              <p>
                <a href="${p.href}">
                    <span >${p.name}</span>
                  </a>
              </p>`
      li.innerHTML=html;
      ul2.appendChild(li);
    }
  }
  document.querySelector(".content-imgList>[data-music=music]")
    .appendChild(ul1);
  document.querySelector(".content-imgList>[data-music=music]")
      .appendChild(ul2);
  //ACG
  var oFrag=document.createDocumentFragment();
  for (p of acg_content) {
    var div=document.createElement("div");
    var html=
        `<img src="${p.img}"/>
        <ul>
          <li><a href="${p.href}">${p.title}</a></li>
          <li  class="price-content">${p.introduct}</li>
          <li><a class="rt" href="${p.herf}">更多</a></li>
        </ul>`;
    div.innerHTML=html;
    oFrag.appendChild(div);
  }
  //将acg-content内容放入
  document.querySelector(".content-cos [data-acg=acg]")
    .appendChild(oFrag);
  //加载acg-consult
  var ul=document.createElement("ul");
  for(var key in acg_consult){
    var li=document.createElement("li");
    if(key<2){
      var html=
        `<b>${parseInt(key)+1}</b>
        <a href="${acg_consult[key].href.trim()}">
          <img src="${acg_consult[key].img.trim()}" />
        </a>
        <div class="text">
          <a href="${acg_consult[key].href.trim()}">
            ${acg_consult[key].title.trim()}
          </a>
        </div>`;
        li.innerHTML=html;
        ul.appendChild(li);
    }else{
      var  html=
        `<span>${parseInt(key)+1}</span>
        <a href="${acg_consult[key].href.trim()}">
          <img src="">
        </a>
        <div class="text">
          <a href="${acg_consult[key].href.trim()}" >
            ${acg_consult[key].title.trim()}
            </a>
        </div>`;
      li.innerHTML=html;
      ul.appendChild(li);
    }
  }
  //acg_tv内容放入
  document.querySelector(".content-cos [data-acg=acg_tv]")
      .appendChild(ul);
  //加载acg-rank
  var ul=document.createElement("ul");
  for(var key in acg_rank){
    var li=document.createElement("li");
    if(key<2){
      var html=
        `<b>${parseInt(key)+1}</b>
        <a href="${acg_rank[key].href.trim()}">
          <img src="${acg_rank[key].img.trim()}"/>
        </a>
        <div class="text">
          <a href="${acg_rank[key].href.trim()}">
            ${acg_rank[key].title.trim()}
          </a>
        </div>`;
        li.innerHTML=html;
        ul.appendChild(li);
    }else{
      var  html=
        `<span>${parseInt(key)+1}</span>
        <a href="${acg_rank[key].href.trim()}">
          <img src="" />
        </a>
        <div class="text">
          <a href="${cos_rank[key].href.trim()}" >
            ${acg_rank[key].title.trim()}
          </a>
        </div>`;
      li.innerHTML=html;
      ul.appendChild(li);
    }
  }
  //acg_rank内容放入
  document.querySelector(".content-cos-right[data-rank=rank]>.cos-TV")
    .appendChild(ul);
    //3D旋转
    var i=0,back=true;
    function move(){
        if(back){
          i++;
          if(i==4)back=false;
        }else{
          i--;
          if(i==1)back=true;
        }
        //console.log(i);
        var p=document.getElementsByClassName('banner-img')[0];
        //console.log(p);
        // Math.random()>0.5?
        p.style.transform=`rotateY(${i*90}deg)`;
        // :p.style.transform=`rotateX(${i*90}deg)`;
      }
      //move();
     var time=null;
	 time=setInterval(move,1000);
	 var banner=document.querySelector("#banner .stage");
	 //console.log(banner);
	 banner.onmouseover=function(){
		clearInterval(time);
		time=null;
	 }
	 banner.onmouseout=function(){
		time=setInterval(move,1000);
	 }
     /****************ul无缝滚动*****************/
     var f2=document.getElementById("f2");

     var Oul=f2.getElementsByTagName("ul");
     var arr=[];
     var box=f2.getElementsByClassName("content_box")[0];
     // timer=setInterval(activty,50)
     var timer1=null;
     var timer2=null;
     timer1=setInterval(()=>{activty(Oul[0],5)},50);
     timer2=setInterval(()=>{activty(Oul[1],-5)},50);
     function activty(elem,speed){
       if(elem.offsetLeft<-elem.offsetWidth/2){
         elem.style.left="0";
        }
        if(elem.offsetLeft>0){
          elem.style.left=-elem.offsetWidth/2+"px";
        }
        elem.style.left=elem.offsetLeft+speed+"px";
        // console.log(speed);
       // console.log(elem);
      }
     for(var i=0;i<Oul.length;i++){
       Oul[i].innerHTML+=Oul[i].innerHTML;
       Oul[i].style.width=2400+"px";
       Oul[i].style.top=`${i*170}px`;
       arr.push(Oul[i].getElementsByTagName("li"));
     }

     var str=Oul.innerHTML+Oul.innerHTML;
     Oul[0].onmouseover=function(e){
        clearInterval(timer1);
     }
     Oul[0].onmouseout=function(){
         timer1=setInterval(()=>{activty(Oul[0],5)},50);
     }
     Oul[1].onmouseover=function(){
        clearInterval(timer2);
     }
     Oul[1].onmouseout=function(){
         timer2=setInterval(()=>{activty(Oul[1],-5)},50);
     }

  })
})()
