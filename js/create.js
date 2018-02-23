(()=>{
    console.log("1");
    ajax({
        type:"get",
        url:"data/index/createfloor.php",
        dataType:"json"
    }).then(data=>{
        console.log(data);
        var create=data.create;
        var html="";
        for(var p in create){
            if(p<6){
                html+=`<a href="01_article_show.html?tid=${create[p].arcticle_id}">
                        <img src="${create[p].introduct_img.split(",")[0]}" alt="">
                       </a>`
            }
        }
        $(".hot-create .container").html(html);
        var html="";
        console.log(create);
        for(var i=6;i<(create.length);i++){
            console.log(222)
            html+=`<div>
                        <a href="01_article_show.html?tid=${create[i].arcticle_id}">
                        <img src="${create[i].introduct_img.split(",")[0]}" alt="">
                       </a>
                        <span>
                            <a href="01_article_show.html?tid=${create[i].arcticle_id}">${create[i].user_name}</a>
                        </span>
                   </div>`;
        }
        $(".hot-create .create_content").html(html);

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
        $(".hot-create .member").html(html);
        //因页面结构相同，只是内容不相同 所以构造一个函数用传参来简化代码
        function getfloor(gufeng,zuixin,floor) {
            //古风小说
            var html="<li>";
            for(var p in gufeng){
                if(p<6){
                    html+=`<p>
                    <span class="list_num${p*1+1}">${p*1+1}</span>
                    <i><a href="01_article_show.html?tid=${gufeng[p].arcticle_id}">${gufeng[p].title}</a></i>
                    <a href="">${gufeng[p].user_name}</a>
                    </p>`;
                }
            }
            html+=`</li><li>`;
            for(var i=6;i<gufeng.length;i++){
                html+=`<p>
                    <span class="list_num${i-5}">${i-5}</span>
                    <i><a href="01_article_show.html?tid=${gufeng[i].arcticle_id}">${gufeng[i].title}</a></i>
                    <a href="01_article_show.html?tid=${gufeng[i].arcticle_id}">${gufeng[i].user_name}</a>
                    </p>`;
            }
            html+=`</li>`;
            $(".list-left .novel-list")[floor].innerHTML=html;
            //古风 最新回复
            var html="";
            console.log(gufeng);
            console.log(zuixin);
            for(var p in zuixin){
               // console.log(p);
                html+=`<li>
                    <b>${p*1+1}</b>
                    <a href="01_article_show.html?tid=${zuixin[p].arcticle_id}">${zuixin[p].title.slice(0,40)}</a>
                   </li>`;
            }
            $(".list-right ul")[floor].innerHTML=html;
        }
        getfloor(data.gufeng,data.zuixin1,0); //古风小说
        getfloor(data.tongren,data.zuixin2,1);
        getfloor(data.dongman,data.zuixin3,2);

    })

})()
