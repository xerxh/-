<?php
header("Content-Type:application/json");
require_once("../init.php");
session_start();
$uid=$_SESSION["uid"];
$txt=$_POST["txt"];
$time=$_POST["time"];
$tid=$_POST["tid"];
if($txt&$uid){
    $sql=" insert into arcticle_comment values(null,'$uid','$tid','$txt','$time')";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    //echo json_encode(["sql"=>$sql]);
    if($row>0){
        echo json_encode(["code"=>1,"msg"=>"发布成功"]);
    }else{
         echo json_encode(["code"=>-1,"msg"=>"发布失败"]);
    }
}else{
    echo("请输入评论");
}