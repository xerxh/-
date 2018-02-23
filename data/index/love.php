<?php
header("Content-Type:application/json");
require_once("../init.php");
$tid=$_REQUEST["tid"];
$sql="update arcticles set love=love+1 where arcticle_id='$tid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
   //echo json_encode(["row"=>$row]);
    if($row>0){
        echo json_encode(["code"=>1,"msg"=>"发布成功"]);
    }else{
         echo json_encode(["code"=>-1,"msg"=>"发布失败"]);
    }