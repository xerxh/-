<?php
header("Content-Type:application/json");
require_once("../init.php");

$data=[
    //create
    //vip
    //gufeng
    //tongren
    //erciyuan
];
//创作图片  10张
$sql="select u.user_name,p.introduct_img,t.arcticle_id from user u,arcticles t,arcticle_pic p
		where   t.aid=u.uid AND p.arcticle_id=t.arcticle_id
		AND (t.class_id_1=3
        	or  t.class_id_2=3
        	or  t.class_id_3=3
        	or  t.class_id_4=3
        	or  t.class_id_5=3) LIMIT 1,10";
$data["create"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//活跃会员   6个
$sql="select avatar,uid,user_name from user LIMIT 2,6";
$data["vip"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//最新预告
function query($label,$minlen,$maxlen,$conn){
    $sql="select u.user_name,u.avatar,p.introduct_img,t.title,t.arcticle_id from user u,arcticles t,arcticle_pic p
                where   t.aid=u.uid  AND p.arcticle_id=t.arcticle_id
                AND (t.class_id_1='$label'
                    or  t.class_id_2='$label'
                    or  t.class_id_3='$label'
                    or  t.class_id_4='$label'
                    or  t.class_id_5='$label') LIMIT $minlen,$maxlen";
                   // var_dump($sql);
    return mysqli_fetch_all(mysqli_query($conn,$sql),1);
};
//最新预告
$data["new_yugao"]=query(5,1,10,$conn);
$data["pic"]=query(5,1,10,$conn);
$p=[];
for($i=0;$i<count($data["pic"]);$i++){
	$tid=$data["pic"][$i]["arcticle_id"];
	$sql=" select count(m.comment) as c from arcticle_comment m,
	user u where m.arcticle_id=$tid AND m.uid=u.uid";
	$p[$i]= mysqli_fetch_all(mysqli_query($conn,$sql),1);
}
$data["count"]=$p;
//本周榜单
$data["week_list"]=query(1,1,8,$conn);
//今日榜单
$data["theday_list"]=query(1,2,8,$conn);
//预告榜单
$data["new_list"]=query(5,2,8,$conn);
//新人榜单
$data["man_list"]=query(1,3,8,$conn);
//古风图片
$data["gufeng"]=query(1,4,4,$conn);
//动漫图片
$data["dongman"]=query(3,1,4,$conn);
//创作图片
$data["create"]=query(11,2,4,$conn);
//音乐图片
$data["music"]=query(7,2,4,$conn);

echo json_encode($data);