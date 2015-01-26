/* Author: Parvez Shaikh 

*/

function myFunction() {
	window.alert("hello world");
	// document.getElementById("demo").innerHTML = "HELLO JAVASCRIPT";
	var x = document.getElementById("demo");
	x.innerHTML = "HELLO JAVASCRIPT"
	x.style.fontSize = "25px";
	x.style.color = "red";

}

function myFunction1() {
  var x, text;

  // Get the value of input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
   } else {
        text = "Input OK";
    }

    document.getElementById("dummy").innerHTML = text;
    var x, y, z;
    x = 2;
    y = 3;
    z =  x + y;
    // document.write(z);
    document.getElementById("str1").innerHTML = 10.50;
    document.getElementById("str2").innerHTML = z;
}
function add(){
	return numb1 + numb2;
}

function sub(){
	return numb1 - numb2;
}

function mul(){
	return numb1 * numb2;
}

function div(){
	return numb1 / numb2;
}






















