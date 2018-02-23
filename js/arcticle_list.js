//var search=location.href.split("?")[1];

function arcticle_list(pno,pageSize){
    if(location.search.indexOf("kw=")!=-1){
        var search=decodeURI( location.search.split("=")[1]);
    }
    var search_data=search.replace(/\s+/g,"/");
        $.ajax({
            type:"GET",
            url:"data/index/arcticle_search.php",
            data:{
                search:search_data,
                pno:pno,
                pageSize:pageSize
            },
            success:data=>{
                //console.log(data);
                var msg=data.data;
                var count=data.count;
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
                        <a class="zan" href="${msg[p].arcticle_id}_${data.pno}">喜欢(${msg[p].love})</a>
                        <a class="comments" href="01_article_show.html?tid=${msg[p].arcticle_id}">评论(${data.c[p][0].c})</a>
                    </p>
                  </li>`;
                }
                //分页
                var page=data;
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
                //console.log(data.msg);
                document.querySelector(".home_show").innerHTML=html;

                //喜欢
                var love=document.querySelector(".zan");
                console.log($(".zan"));
                $(".home_show").one("click",["p.like a.zan"],function(e){
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
                        //console.log(typeof output);
                        if(output.code==1){
                            //console.log(1)
                            arcticle_list(pno);
                        }
                    })
                })

            },
            error:(err)=>{

                alert("网络故障已检查");
            }
        })

}
arcticle_list(1,3);
// 2:为页码绑定点点事件
//   调用函数
console.log($(".page"))
$(".home_show").on("click","li.page a",function(e){
    console.log(e.target);
    e.preventDefault();
    //console.log(e.targer);
    var pno = ($(e.target).attr("href"));
    console.log(pno);
    arcticle_list(pno * 1, 3);
});

