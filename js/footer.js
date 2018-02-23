(()=>{
  ajax({
    type:"get",
    url:"01-footer.html",
  }).then(html=>{
    footer.innerHTML=html;
  });
})()
