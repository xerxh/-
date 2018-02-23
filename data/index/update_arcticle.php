<?php
header("Content-Type:application/json");
require_once("../init.php");
session_start();


$uid=$_SESSION["uid"];
$arcticle=$_POST["arcticle"];
$title=$_POST["title"];
$time=$_POST["time"];
$labelarr=$_POST["labelarr"];
$pid=$_POST["pid"];
if($arcticle&&$title){

    $sql="INSERT INTO arcticles VALUES(null,'$uid',";
    for($i=0;$i<5;$i++){
        if(($i+1)>count($labelarr)){
            $sql.="-1,";
        }else{
            $label=$labelarr[$i];
            $sql.="'$label',";
        }
    }
    $sql.="'$title','$arcticle',0,0,0,'$time','1')";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
   //echo json_encode(["row"=>$row]);
    if(!$row>0){
        echo json_encode(["code"=>-1,"msg"=>"发布失败"]);
    }else{

            $sql="select LAST_INSERT_ID() id";
            //获取文章ID 接下来将图片地址更新至arcticle_pic中
            $getID=mysqli_fetch_row(mysqli_query($conn,$sql))[0];
            //将图片更新进数据库
            if($pid){
                $sql="UPDATE arcticle_pic SET arcticle_id='$getID' WHERE pid='$pid'";
                mysqli_query($conn,$sql);
            }
            echo json_encode(["code"=>1,"msg"=>"发布成功","ID"=>$getID,"pid"=>$pid]);

    }

}else{
    echo json_encode(["code"=>-1,"msg"=>"缺陷文章内容或标题，请检查"]);
}