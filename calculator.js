var cal = document.getElementsByClassName("calculator");
var operate = document.getElementsByClassName("operators");
var input = document.getElementById("input")
function One() {
    var one = document.querySelector("span").innerHTML += "1";
}

function second() {
    var two = document.querySelector("span").innerHTML += "2";
}
function third() {
    var three = document.querySelector("span").innerHTML += "3";
}
function fourth() {
    var four = document.querySelector("span").innerHTML += "4";
}
function fifth() {
    var five = document.querySelector("span").innerHTML += "5";
}
function sixth() {
    var six = document.querySelector("span").innerHTML += "6";
}
function seventh() {
    var seven = document.querySelector("span").innerHTML += "7";
}
function eight() {
    var eight = document.querySelector("span").innerHTML += "8";
}
function ninth() {
    var nine = document.querySelector("span").innerHTML += "9";
}
function decimal() {
    var point = document.querySelector("span").innerHTML += ".";
}
//var nine = document.querySelector("span").innerHTML += "9";
function Clear() {
    var ac = document.querySelector("span").innerHTML = "";
}
function Zero () {
    var zero = document.querySelector("span").innerHTML += "0";
}
function add() {
    var plus = document.querySelector("span").innerHTML += "+"; 
}
function subtract() {
    var Subtract = document.querySelector("span").innerHTML += "-";
}
function into() {
    var Multiply = document.querySelector("span").innerHTML += "*";
}
function upon() {
    var Divide = document.querySelector("span").innerHTML += "/";
}
function total() {
    var spa = document.querySelector("span")
    var log = spa.textContent
    spa = document.querySelector("span").innerHTML = eval(log);
}
function ligth() {
    var mode = document.querySelector("body").style.backgroundColor = "white";
    var lite = document.getElementById("ligth").style.display = "none";
    var dark = document.getElementById("dark").style.display = "block";
    var first = document.querySelector("span").style.backgroundColor = "black";
    var first = document.querySelector("span").style.color = "white";
    var cal = document.getElementById("cal").style.color = "black";
    var author = document.getElementById("developer").style.color = "black";
}
function dark() {
    var body = document.querySelector("body").style.backgroundColor = "black";
    var dark = document.getElementById("dark").style.display = "none";
    var ligth = document.getElementById("ligth").style.display = "block";
    var first = document.querySelector("span").style.backgroundColor = "white";
    var first = document.querySelector("span").style.color = "black";
    var cal = document.getElementById("cal").style.color = "white";
    var author = document.getElementById("developer").style.color = "white";
}