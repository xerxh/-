(()=>{
	ajax({
		type:"get",
		url:"data/index/picshow.php",
		dataType:"json"
	}).then(data=>{
		console.log(data);
		//最新预告
		var yugao=data.new_yugao;
        var html="";
        for(var p in yugao){
            if(p<6){
                html+=`<a href="01_article_show.html?tid=${yugao[p].arcticle_id}">
                        <img src="${yugao[p].introduct_img.split(",")[0]}" alt="">
                       </a>`
            }
        }
        $(".container").html(html);
        var html="";
        for(var i=6;i<(yugao.length);i++){
            html+=`<div>
                        <a href="01_article_show.html?tid=${yugao[i].arcticle_id}">
                        <img src="${yugao[i].introduct_img.split(",")[0]}" alt="">
                       </a>
                        <span>
                            <a href="01_article_show.html?tid=${yugao[i].arcticle_id}">${yugao[i].user_name}</a>
                        </span>
                   </div>`;
        }
        $(".pic_content").html(html);

        //活跃会员
        var vip=data.vip;
        var html="";
        for(var p in vip){
            html+=`<div>
                        <a href="01_user_home.html?tid=${vip[p].uid}">
                            <img src="${vip[p].avatar}" alt="">
                        </a>
                        <p>${vip[p].user_name}</p>
                    </div>`;
        }
        $(".member").html(html);
        //加载最新预告
        var count=data.count;
        var pic=data.pic;
        var html1=`<ul>`;
        var html2=`<ul>`;
        for(var p in pic){

            if(p<5){
                html1+=
                    `<li>
                        <div class="content_imglist_box">
                          <a href="01_article_show.html?tid=${pic[p].arcticle_id}">
                            <img src="${pic[p].introduct_img.split(",")[0]}" />
                          </a>
                          <div class="img_footer">
                            <span>${p*1+1}</span>
                          </div>
                        </div>
                        <p>
                          <a href="${pic[p].avatar}">
                            <span >${pic[p].user_name}</span>
                          </a>
                          <a class="rt" href="01_article_show.html?tid=${pic[p].arcticle_id}">
                            <span class="rt">${count[p][0].c}</span>
                          </a>
                        </p>
                    </li>`;
            }else{
                html2+=`<li>
                        <div class="content_imglist_box">
                          <a href="01_article_show.html?tid=${pic[p].arcticle_id}">
                            <img src="${pic[p].introduct_img.split(",")[0]}" />
                          </a>
                          <div class="img_footer">
                            <span>${p*1+1}</span>
                          </div>
                        </div>
                        <p>
                          <a href="${pic[p].avatar}">
                            <span >${pic[p].user_name}</span>
                          </a>
                          <a class="rt" href="01_article_show.html?tid=${pic[p].arcticle_id}">
                            <span class="rt">${count[p][0].c}</span>
                          </a>
                        </p>
                    </li>`;
            }

        }
        html1+=`</ul>`;
        html2+=`</ul>`;
        var html=html1+html2;
        document.getElementsByClassName("content_box")[0].innerHTML=html;
        function getfloor(obj,str,len){
            var html="";
            html+=`<div><p class="title">${str}</p><ul>`;

                for(var p in obj){

                    if(p<len){
                        html+=`<li>
                            <a href="01_article_show.html?tid=${obj[p].arcticle_id}" class="imgbox">
                                <img src="${obj[p].introduct_img.split(",")[0]}" />
                            </a>
                            <div class="img_footer num${p*1+1}">
                                <span>NO.${p*1+1}</span>
                            </div>
                            <p>
                                <span>
                                    <img class="heade-img" src="${obj[p].avatar}" />
                                </span>
                                <a href="01_article_show.html?tid=${obj[p].arcticle_id}">${obj[p].title}</a>
                            </p>
                            </li>`;
                    }else{
                        if(p==len){
                            html+=`<li><ul class="user_list">`;
                        }
                        html+=`<li>
                                <span>${p*1+1}</span>
                                <img src="${obj[p].avatar}" />
                                <a href="01_article_show.html?tid=${obj[p].arcticle_id}">${obj[p].title}</a>
                              </li>`;
                        if(p==10){
                            html+=`</ul></li>`
                        }
                    }

                }

            html+=`</ul></div>`;
            return html;
        }
        //本周榜单
        var html=getfloor(data.new_list,"本周榜单",3);
        html+=getfloor(data.week_list,"本周榜单",3);
        html+=getfloor(data.theday_list,"本周榜单",3);
        html+=getfloor(data.man_list,"本周榜单",3);
        document.getElementsByClassName("list")[0].innerHTML=html;
        //热门标签
        var html=getfloor(data.gufeng,"古风",4);
        html+=getfloor(data.dongman,"动漫",4);
        html+=getfloor(data.create,"创作",4);
        html+=getfloor(data.music,"音乐",4);
        document.getElementsByClassName("hot_label")[0].innerHTML=html;






    })
})()