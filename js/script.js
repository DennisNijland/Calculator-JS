var register = document.getElementById('register');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
//Function leegmaken register
function cls (){
	register.innerHTML = "";
}

//Function nummer toevoegen aan register
function click (parms){
    register.innerHTML += parms.target.innerHTML;
}

//Operator function
function calculate(){
	var num1 = 5;
	var num2 = 5;
	var calc = num1 + num2;
	document.getElementById('register').innerHTML = calc;
}


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
document.getElementById("btnd").addEventListener("click", click);
document.getElementById("btnc").addEventListener("click", cls);
document.getElementById("opr1").addEventListener("click", calculate);