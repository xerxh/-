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
		AND (t.class_id_1=11
        	or  t.class_id_2=11
        	or  t.class_id_3=11
        	or  t.class_id_4=11
        	or  t.class_id_5=11) LIMIT 1,10";
$data["create"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//活跃会员   6个
$sql="select avatar,uid,user_name from user LIMIT 1,6";
$data["vip"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//古风小说
function query($label,$minlen,$maxlen,$conn){
    $sql="select u.user_name,t.title,t.arcticle_id from user u,arcticles t
                where   t.aid=u.uid
                AND (t.class_id_1='$label'
                    or  t.class_id_2='$label'
                    or  t.class_id_3='$label'
                    or  t.class_id_4='$label'
                    or  t.class_id_5='$label') LIMIT $minlen,$maxlen";
                   // var_dump($sql);
    return mysqli_fetch_all(mysqli_query($conn,$sql),1);
};
//古风
$data["gufeng"]=query(1,1,12,$conn);
//最新回复
$data["zuixin1"]=query(1,1,10,$conn);
//同人小说
$data["tongren"]=query(6,1,12,$conn);
//最新回复
$data["zuixin2"]=query(2,2,10,$conn);
//二次元小说
$data["dongman"]=query(3,1,12,$conn);
//最新回复
$data["zuixin3"]=query(3,2,10,$conn);

echo json_encode($data);