$("button.HTML").click(function(){
  $("button.HTML").css("background-color","gray");
  $("button.css").css("background-color","#21891e");
  $("button.javaScript").css("background-color","#21891e");
  $("p.cont").text("HTML means contents of web");
});
$("button.css").click(function(){
  $("button.css").css("background-color","gray");
  $("button.HTML").css("background-color","#21891e");
  $("button.javaScript").css("background-color","#21891e");
  $("p.cont").text("css means style of web");
});
$("button.javaScript").click(function(){
  $("button.javaScript").css("background-color","gray");
  $("button.HTML").css("background-color","#21891e");
  $("button.css").css("background-color","#21891e");
  $("p.cont").text("javaScript means behaviour of of web");
});
