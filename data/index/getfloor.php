<?php
header("Content-Type:application/json");
require_once("../init.php");
$data=[
  //banner
  //banner-content
  //cos-content
  //cos-tv
  //cos-rank
  //picture-content
  //create-content
  //create-list
  //music-content
  //acg-content
  //acg-consult
  //acg-rank
];
//获取banner的数据
$sql="select * from banner limit 4";
$result=mysqli_query($conn,$sql);
$data["banner"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取banner-content的数据
$sql="select * from banner_content limit 4";
$data["banner_content"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取cos-content的数据
$sql="select * from cos_content limit 2";
$data["cos_content"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取cos-tv的数据
$sql="select * from cos_tv limit 6";
$data["cos_tv"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
// //获取cos-tv的数据
// $sql="select * from cos_rank limit 6";
// $data["cos-rank"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取cos_rank的数据
$sql="select * from cos_rank limit 6";
$data["cos_rank"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取picture-content的数据
$sql="select * from picture_content limit 10";
$data["picture_content"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取create-content的数据
$sql="select * from create_content limit 3";
$data["creat_content"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取creat-list的数据

$sql="select * from create_list limit 12";
$data["creat_list"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取music-content的数据
$sql="select * from music_content limit 10";
$data["music_content"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取acg-content的数据
$sql="select * from acg_content limit 2";
$data["acg_content"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取acg-consult的数据
$sql="select * from acg_consult limit 6";
$data["acg_consult"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
//获取acg-rank的数据
$sql="select * from acg_rank limit 6";
$data["acg_rank"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
echo json_encode($data);
