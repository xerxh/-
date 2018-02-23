<?php
header("Content-Type:application/json");
require_once("../init.php");
@$find=$_REQUEST["search"];
if(!$find)$find="";
@$pno=$_REQUEST["pno"];
!$pno&&$pno=1;
@$pageSize=$_REQUEST["pageSize"];
!$pageSize&&$pageSize=8;

$offset=($pno-1)*$pageSize;
 $sql="SELECT title,introduce,love,arcticle_id FROM arcticles ";
if($find){
    $finds=explode("/",$find);
    for($i=0;$i<count($finds);$i++){
        $finds[$i]=" introduce like '%$finds[$i]%'";
    }
    $where=" where".implode(" and ",$finds);
    $sql.=$where;
}

$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,1);
$count=count($rows);
$sql.=" limit ".($pno-1)*$pageSize." ,$pageSize ";
$data=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$p=[];
for($i=0;$i<count($data);$i++){
    $tid=$data[$i]["arcticle_id"];
    $sql=" select count(m.comment) as c from arcticle_comment m,
    user u where m.arcticle_id=$tid AND m.uid=u.uid";
    $p[$i]= mysqli_fetch_all(mysqli_query($conn,$sql),1);
}
//$output["c"]=$p;
$output=[
  "c"=>$p,+
  "pageSize"=>$pageSize,
  "count"=>$count,
  "pageCount"=>ceil($count/$pageSize),
  "pno"=>$pno,
  "data"=>$data
  ];
echo json_encode($output);