function getvalue(){
    let text = document.getElementById("email").Value;
    console.log(text);
}

let man = document.getElementById("man");
let jsfun = document.getElementById("jsfun");


document.getElementById("btn").addEventListener("click", function(){
   man.classList.toggle("display1");
   jsfun.classList.toggle("display2");
});

document.getElementById("move").addEventListener("click", function(){
    man.classList.toggle("display3");
    jsfun.classList.toggle("display4");
 });