$(document).ready(function(){
  $("#test").append("Hello from jQuery!");
  
  $("#button1").click(function(){
    $("#test").toggleClass("important blue");
  });
  
  $("#button2").click(function(){
    $("#test").fadeToggle("slow");
  });
});