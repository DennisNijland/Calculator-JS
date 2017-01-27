var register = document.getElementById('register'); 
//Function leegmaken register
function cls (){
	register.innerHTML = "";
}

//Function nummer toevoegen aan register
function click (parms){
    register.innerHTML += parms.target.innerHTML;
}

//Operator function



document.getElementById("btn1").addEventListener("click", click);
document.getElementById("btn2").addEventListener("click", click);
document.getElementById("btn3").addEventListener("click", click);
document.getElementById("btn4").addEventListener("click", click);
document.getElementById("btn5").addEventListener("click", click);
document.getElementById("btn6").addEventListener("click", click);
document.getElementById("btn7").addEventListener("click", click);
document.getElementById("btn8").addEventListener("click", click);
document.getElementById("btn9").addEventListener("click", click);
document.getElementById("btn0").addEventListener("click", click);
document.getElementById("dot").addEventListener("click", click);
document.getElementById("btnc").addEventListener("click", cls);