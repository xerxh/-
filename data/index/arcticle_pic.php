<?php
header("Content-Type:application/json");
require_once("../init.php");
//$allowed=array("gif","jpeg","jpg","png");
$rs=empty($_FILES); //empty判断一个数组是否为空
if($rs){
    die('{"code":-1,"msg":"没有上传的文件"}');
}else{
    $picName=$_FILES["mypic"]["name"];
    $picSize=$_FILES["mypic"]["size"]/1024;
    $type=strstr($picName,".");
    if($type!=".gif"&&$type!=".jpg"&&$type!=".png"&&$type!=".jpeg"){
        die('{"code":-2,"msg":"上传文件类型不正确"}');
    }
    if($picSize>2048){
        die('{"code":-3,"msg":"上传文件过大：不能超过2MB"}');
    }
    $filename=$picName;
    $src=$_FILES["mypic"]["tmp_name"];
    $des="../../uploads/pic/".$filename;
    $url="uploads/pic/".$filename;
    move_uploaded_file($src,$des);
    //mkThumbnail($des,650,650,"../../uploads/pic/md".$filename);
     //echo json_encode($_FILES);
     $pid=$_REQUEST["pid"];
    if($pid=="null"){ //如果pid为null执行插入 否组执行更新
        $sql="INSERT INTO arcticle_pic VALUES(null,'-1','$url')";
        mysqli_query($conn,$sql);
        $sql="select LAST_INSERT_ID() id";
        //获取图片ID 传回客户端 以便客户提交时将图片存贮ID与客户发布文章ID对应
        $getID=mysqli_fetch_row(mysqli_query($conn,$sql))[0];
         echo json_encode(["msg"=>$picName,"id"=>$getID]);
    }else{
        $sql="SELECT introduct_img FROM arcticle_pic WHERE pid='$pid'";
        $img=mysqli_fetch_row(mysqli_query($conn,$sql))[0];
        $img.=",$url";  //拼接需要放入的字符串
        $sql="UPDATE arcticle_pic SET introduct_img='$img' WHERE pid='$pid'"; //更新
        mysqli_query($conn,$sql);
        echo json_encode(["id"=>$pid,"img"=>$img]);
        //$sql="UPDATE arcticle_pic SET introduct_img=introduct_img+','+'$src'  WHERE arcticle_id='$_FILES["pid"]'"; //更新

    }

}
