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