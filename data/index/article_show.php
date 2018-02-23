<?php
header("Content-Type:application/json");
require_once("../init.php");
@$tid=$_REQUEST["tid"];
//从用户表中查出user_name
//avatar 头像  性别 gender
//从文章列表中查出 文章 title
//标签
//introduce
//love
//浏览browse
//发布时间 update_time
//查找评论
//评论人 评论人头像 username
//评论

//查找出图片和文章 p.arcticle_id=t.arcticle_id
if($tid<14){
		$sql="select u.user_name,u.avatar,u.gender,t.title,t.introduce,t.love,t.browse,t.update_time,c.name,p.introduct_img from user u,arcticles t,arcticle_class c,arcticle_pic p
		where t.arcticle_id='$tid'
		AND  t.aid=u.uid
		AND p.arcticle_id=t.arcticle_id
		AND (t.class_id_1=c.class_id
		or  t.class_id_2=c.class_id
		or  t.class_id_3=c.class_id
		or  t.class_id_4=c.class_id
		or  t.class_id_5=c.class_id)";
		//echo json_encode(["sql"=>$sql]);
}else{
	$sql="select u.user_name,u.avatar,u.gender,t.title,t.introduce,t.love,t.browse,t.update_time,c.name from user u,arcticles t,arcticle_class c where t.arcticle_id='$tid' AND  t.aid=u.uid  AND (t.class_id_1=c.class_id or  t.class_id_2=c.class_id  or  t.class_id_3=c.class_id  or  t.class_id_4=c.class_id	or  t.class_id_5=c.class_id)";
		//echo json_encode(["sql"=>$sql]);
}
$arcticle=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//查找出评论 和评论人的信息
$sql=" select m.comment,m.comment_time,
u.user_name,u.avatar from arcticle_comment m,
user u where m.arcticle_id='$tid' AND m.uid=u.uid";
$comment=mysqli_fetch_all(mysqli_query($conn,$sql),1);

$data=[
  "arcticle"=>$arcticle,
  "comment"=>$comment
];
echo json_encode($data);
