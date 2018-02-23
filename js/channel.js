(()=>{
	ajax({
		type:"get",
        url:"data/index/channelfloor.php",
		dataType:"json"
	}).then(data=>{

		console.log(data);
		var banner=data.banner[1];
		var html="";
		for(var p of  banner){
			html+=`<a href="01_article_show.html?tid=${p.arcticle_id}">
								<img src="${p.introduct_img.split(",")[0]}" />
						 </a>`;
		}
		html+=`<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>`;
		for(var i=0;i<75;i++){
			html+=`<div></div>`;
		}
		document.getElementsByClassName("banner")[0].innerHTML=html;
		//自定义一个函数来动态加载页面内容
		function getfloor(obj,floor){
			if(floor) {
				floor="id="+floor;
			}else{
				floor="";
			}
			var html="";
			html+=`<div class="channel-box" ${floor}>
							<a href="01_article_show.html?tid=${obj[1][0].arcticle_id}">
									<img src="${obj[1][0].introduct_img.split(",")[0]}" />
							</a>
							<dl>
								<img src="Public/home/images/channe_icon1.png" />
								<span class="title">${obj[0][0].name}</span>
								<span class="rt">
										<span>${obj[0][0].love}</span>人喜欢|
										<span>${obj[0][0].c}</span>人讨论
								</span>
							</dl>
                           <ul>`;
			for(var p in obj[1]){
            html+=
						`<li>
									<span class="lf">${p*1+1}</span>
									<a href="01_article_show.html?tid=${obj[1][p].arcticle_id}">${obj[1][p].title}</a>
						  </li>`;      
			}
		    html+=`</ul>
								<p> <a href="">>更多讨论</a></p>
						</div>`;
			return html;
        };
		var gufeng=getfloor(data.gufeng,"f1");
		var hanfu=getfloor(data.hanfu);
		var dongman=getfloor(data.dongman);
		var cosplay=getfloor(data.cosplay,"f2");
		var youxi=getfloor(data.hanfu);
		var novel=getfloor(data.dongman);
		var music=getfloor(data.music,"f3");
		var yulei=getfloor(data.yulei);
		var draw=getfloor(data.draw);
		var html=gufeng+hanfu+dongman+cosplay+youxi+novel+music+yulei+draw;
		document.getElementsByClassName("channel")[0].innerHTML=html;
		//加载图片榜单
		var count=data.count;
		var pic=data.pic[1];
		var html1="";
		var html2="";
		for(var p in pic){

				if(p<5){
					html1+=`<li>
							   <a href="01_article_show.html?tid=${pic[p].arcticle_id}">
							   		<img src="${pic[p].introduct_img.split(",")[0]}"/>
							   </a>
							   <p>
								   <a href="01_article_show.html?tid=${pic[p].arcticle_id}">${pic[p].user_name}</a>
									<span><span>${count[p][0].c}</span>条讨论</span>
							   </p>
							</li>`;
				}else{
					html2+=`<li>
							   <a href="01_article_show.html?tid=${pic[p].arcticle_id}">
							   		<img src="${pic[p].introduct_img.split(",")[0]}"/>
							   </a>
							   <p>
								   <a href="01_article_show.html?tid=${pic[p].arcticle_id}">${pic[p].user_name}</a>
									<span><span>${count[p][0].c}</span>条讨论</span>
							   </p>
							</li>`;
				}

			}
		var f4=document.getElementById("f4");
		f4.getElementsByTagName("ul")[0].innerHTML=html1;
		f4.getElementsByTagName("ul")[1].innerHTML=html2;
		//banner特效

        var banner=data.banner[1]; //获取banner图片数组
		var timer=null;
		function move(target){
			var p=4;
			if(target==0) p=p-1;
			else p=target-1;
		//clearInterval(timer);
		//document.querySelectorAll(".banner img")[0].style.zIndex=10;
		//var p=0;
			//document.querySelectorAll(".banner img")[p].style.zIndex=5;
			var  div=document.querySelectorAll(".banner>div");
			for(var i=0;i<div.length;i++){
				div[i].style.zIndex='0';
				div[i].style.opacity=0;
				div[i].style.left=Math.random()*1200+"px";
				div[i].style.top=Math.random()>0.5?-Math.random()*700+"px":Math.random()*700+"px";
			}
		timer=setInterval(function () {
				//p=p%4;
			//console.log(p);
				var top=0,left=0;
				for(var i=0;i<div.length;i++){
					if(i!=0){
						if(i%15==0){
							top++;left=0
							//console.log(top)
						}
					}
					div[i].style.left=left*80+"px";
					div[i].style.opacity=1;
					div[i].style.zIndex='10';
					div[i].style.backgroundImage=`url("${banner[target].introduct_img.split(",")[0]}")`;
					div[i].style.backgroundPosition=`${-left*80}px ${-top*80}px`;
					div[i].style.top=top*80+"px";
					left++;
				}
			//console.log(target)
			//document.querySelectorAll(".banner img")[p].style.zIndex=0;
				//console.log("212454545454545")
					// div[i].style.opacity = 0;
				setTimeout(function(){
					for(var i=0;i<div.length;i++){
						div[i].style.zIndex=-1;
						div[i].style.opacity=0;
				   }
					console.log(target);
					document.querySelectorAll(".banner img")[target].style.zIndex=10;
					document.querySelectorAll(".banner img")[p].style.zIndex=0;
				},700)
				clearInterval(timer);
			},700)

		}
		var i=0;
		setInterval(function(){
			i=i%4;
			move(i);
			i++;
		},2500)

	})
})()