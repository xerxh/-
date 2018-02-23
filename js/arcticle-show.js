    var tid = location.href.split('?')[1];
    function loadArcticle() {
    //console.log(tid);
    ajax({
        type: "get",
        url: "data/index/article_show.php",
        data: `${tid}`,
        dataType: "json"
    }).then(data=> {
        console.log(data);
        // 文章头部
        var html = "";
        html += `<div>
            <h3 class="article-title">${data.arcticle[0].title}</h3>
            <p class="tag-list">`
        for (var p of data.arcticle) {
            html +=
                `<a href="#">${p.name}</a>`;
        }
        html += `</p>
                </div>
                <div class="author">
                <img src="${data.arcticle[0].avatar}" alt="作者头像">
                <div class="prc">
                <p><a class="author-name" href="#">${data.arcticle[0].user_name}</a><img src="Public/home/images/sex3.png" alt=""></p>
                <p>关注<span class="attention">0</span>|粉丝<span class="fans">1<span></p>
                </div>
            </div>`;
        document.getElementsByClassName('user')[0].innerHTML = html;
        // 文章正文
        var arcticle = data.arcticle[0];
        var html = "";
        // var introduce=arcticle.introduce.split("<br>");
        // console.log(introduce);
        // for(var p of introduce){

        html += `<p>${arcticle.introduce}</p>`;
        // }
        console.log(tid);
        if(tid.split("=")[1]<14){
            var img = arcticle.introduct_img.split(",");
            for (var p of img) {
                html += `<p class="show-pic"><img src="${p}" alt=""> </p>`;
            }
        }

        document.getElementsByClassName('article-content')[0].innerHTML = html;
        //console.log(html)
        var html = "";
        html += `
          <a><img src="Public/home/images/activity_tielike.png" alt=""></a>
          <span>${arcticle.love}</span>
          <p class="time">
            <span>最近更新时间${new Date(arcticle.update_time * 1).toLocaleString()}</span>
            <i>${data.comment.length} 条评论</i>
            <b>
              ${arcticle.browse}人浏览</b>
          </p>`;
        document.getElementsByClassName('like')[0].innerHTML = html;
        //评论
        var comment = data.comment;
        var html = "";
        for (var p of comment) {
            html +=
                `<li>
                    <img src="${p.avatar}" alt="">
                    <span>${p.user_name}</span>
                    <span>  发布于 ${new Date(p.comment_time * 1).toLocaleString()}</span>
                    <p>${p.comment}</p>
                </li>`;
        }
        var comment = document.getElementsByClassName('comment')[0];
        var comment_list = comment.getElementsByTagName('ul')[0];
        comment_list.innerHTML = html;
    })
}
    loadArcticle();
    //发布评论
    var btn=document.querySelector(".btn");
    btn.onclick=function(){
        ajax({
            type:"get",
            url:"data/user/isLogin.php",
            dataType:"json",
        }).then(data=> {
            console.log(data);
            if(data.ok==1){
                var txt = document.querySelector("[name=name]").value;
                var time = new Date().getTime();
                //console.log(tid);
                ajax({
                    type: "post",
                    url: "data/index/comment.php",
                    data: `${tid}&txt=${txt}&time=${time}`,
                    dataType: "json"
                }).then((data)=> {
                    if(data.code==1){
                        console.log("2222");
                        document.querySelector("[name=name]").value=" ";
                        loadArcticle();
                        console.log(txt);
                    }
                })
            }else{
                alert("请先登录");
            }
        })
    }
    //喜欢
    var love=document.querySelector(".like");
    var loveImg=love.getElementsByTagName("img")[0];
    $(love).on("click","a",function (e) {
            e.preventDefault();
            //console.log(e.target.parentNode);
            ajax({
                type:"get",
                url:"data/index/love.php",
                data:`${tid}`,
                dataType:"json"
            }).then(output=>{
                console.log(typeof output);
                if(output.code==1){
                    console.log(1)
                    loadArcticle();
                }
            })
        });
    //浏览
    ajax({
        type:"get",
        url:"data/index/brows.php",
        data:`${tid}`,
        dataType:"json"
    }).then(data=>{
        if(data.code==1){
            loadArcticle();
        }
    })

