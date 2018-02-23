(()=>{
  //轮播特效
  var div=document.getElementsByClassName("banner-img")[0];

  var div=div.getElementsByTagName("div");
  console.log(div);
  for(var i=0;i<div.length;i++){
    console.log(1);
    div[i].style.left=`${i*80}px`;
    //div[i].style.background=
  }
  console.log("123");
})()
