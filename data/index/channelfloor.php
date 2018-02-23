<?php
header("Content-Type:application/json");
require_once("../init.php");

$data=[
    //banner
    //gufeng
    //hanfu
    //dongman
    //cosplay
    //youxi
    //novel
    //pic
];
//banner图片  10张
function query($label,$minlen,$maxlen,$conn){
$p=[];
$sql="select count(m.cid) as c,sum(t.love) as love ,c.name as name from arcticle_comment m,arcticles t,arcticle_class c WHERE m.arcticle_id=t.arcticle_id  AND c.class_id=$label AND (t.class_id_1='$label'
                    or  t.class_id_2='$label'
                    or  t.class_id_3='$label'
                    or  t.class_id_4='$label'
                    or  t.class_id_5='$label')";  //评论数
	$p[0]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
    $sql="select u.user_name,t.title,t.arcticle_id,p.introduct_img from user u,arcticles t,arcticle_pic p
                where   t.aid=u.uid
				AND p.arcticle_id=t.arcticle_id
                AND (t.class_id_1='$label'
                    or  t.class_id_2='$label'
                    or  t.class_id_3='$label'
                    or  t.class_id_4='$label'
                    or  t.class_id_5='$label') LIMIT $minlen,$maxlen";
                   // var_dump($sql);
    $p[1]= mysqli_fetch_all(mysqli_query($conn,$sql),1);
	return $p;
}
$data["banner"]=query(3,1,4,$conn); //banner 数据
$data["gufeng"]=query(1,1,5,$conn); //古风数据
$data["hanfu"]=query(2,1,5,$conn); //古风数据
$data["dongman"]=query(3,1,5,$conn); //动漫数据
$data["youxi"]=query(5,1,5,$conn); //游戏数据
$data["cosplay"]=query(4,1,5,$conn); //cosplay数据
$data["novel"]=query(6,1,5,$conn); //小说数据
$data["music"]=query(7,1,5,$conn); //音乐数据
$data["yulei"]=query(9,1,5,$conn); //娱乐数据
$data["draw"]=query(8,1,5,$conn); //绘画数据
$data["pic"]=query(10,1,10,$conn); //图片榜单
$p=[];
for($i=0;$i<count($data["pic"][1]);$i++){
	$tid=$data["pic"][1][$i]["arcticle_id"];
	$sql=" select count(m.comment) as c from arcticle_comment m,
	user u where m.arcticle_id=$tid AND m.uid=u.uid";
	$p[$i]= mysqli_fetch_all(mysqli_query($conn,$sql),1);
}
$data["count"]=$p;
echo json_encode($data);