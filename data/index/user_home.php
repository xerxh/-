<?php
header("Content-Type:application/json");
require_once("../init.php");
session_start();
$data=[];
@($uid=$_SESSION["uid"])||($uid=$_REQUEST["uid"]);
if($uid){
    @$pno=$_REQUEST["pno"];
    if(!$pno){
        $pno=1;
    }
    @$pageSize=$_REQUEST["pageSize"];
    if($pno){
        $pageSize=3;
    }
    $offset=($pno-1)*$pageSize;
    $sql="SELECT u.user_name,u.avatar,t.title,t.introduce,t.love,t.arcticle_id
     FROM user u,arcticles t WHERE t.aid=u.uid AND u.uid=$uid  GROUP BY t.arcticle_id
     LIMIT $offset,$pageSize";
    //var_dump($sql)
    $data["msg"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
    //查总记录数
    $sql = "SELECT count(t.arcticle_id) as c
                 FROM user u,arcticles t WHERE t.aid=u.uid AND u.uid=$uid";
    $count=mysqli_fetch_assoc(mysqli_query($conn,$sql));
    $data["totalRecode"]=$count["c"];
    $data["pageCount"] = ceil($data["totalRecode"]/$pageSize);
    $p=[];
    for($i=0;$i<count($data["msg"]);$i++){
        	$tid=$data["msg"][$i]["arcticle_id"];
        	$sql=" select count(m.comment) as c from arcticle_comment m,
        	user u where m.arcticle_id=$tid AND m.uid=u.uid";
        	$p[$i]= mysqli_fetch_all(mysqli_query($conn,$sql),1);
    }
    $data["count"]=$p;
    $data["pno"]=$pno;
    echo json_encode(["code"=>1,"msg"=>$data]);
}else{
    echo json_encode(["code"=>-1,"msg"=>"未登录，请登录"]);
}