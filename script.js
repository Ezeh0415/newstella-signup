let retur = document.getElementById("memo");
let error = document.getElementById("demo");
let man = document.getElementById("man");
let jsfun = document.getElementById("jsfun");


function getValue() {
  var emailfil = document.getElementById("email").value;
  if (emailfil === "" ) {
     error.innerHTML = "please enter valid email";
  }else {
    man.classList.toggle("display1");
    jsfun.classList.toggle("display2");
    retur.innerHTML = `A confermation email has been sent to ${emailfil} please open it and click the button inside to conferm your subscription`; 

  }
}

document.getElementById("move").addEventListener("click", function(){
    man.classList.toggle("display3");
    jsfun.classList.toggle("display4");
 });

 let deskimg = $("#deskimg");

 deskimg.css({
   width:260,
   position:"relative",
   left: 10,
 });
 
 
 $("#headers").css({
   position:"relative",
   top:40,
 })
 
 $("#thanks").css({
   width:350,
   position:"relative",
   top:-10,
   right:15,
   padding:40,
   left:40,
 })
 
 $("#memo").css({
   position:"relative",
   top:-20
 })
 
 $("#th").css({
   position:"relative",
   top:-15
 })
 
 $("#spa").css({
   position:"relative",
   top:-15
 })