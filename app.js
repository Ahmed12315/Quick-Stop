var number_html = document.getElementById("number");
var result_html = document.getElementById("result");
var user_input = document.getElementById("user_input");
var start = document.getElementById("Start")
var stop = document.getElementById("Stop")

var interval ; 
var number = 0;

alert("Game Rule:  \n 1.You have to click  before 1000. \n 2.If number matches your number then you will win. \n 3.If it doesnt match then you are loss.")
function Start() {
    if(user_input.value){
        interval = setInterval(function() {
            if(number >= 1000){
                clearInterval(interval)
                number = 0;
                number_html.innerText = number;
                result_html.innerText = "You are Late"
            }else{
                number++;
                number_html.innerText = number;

            }
        }, 10);
        start.style.display = "none"
        stop.style.display = "block"
    }else{
        alert("input the number first")
    }
}

function Stop() {
    if (user_input.value == number) {
        result_html.innerText = "You win"
        result_html.style.color = "green"
    }else{
        result_html.innerText = "You Loss"
        result_html.style.color = "red"
    }
    clearInterval(interval);
    number = 0;
    number_html.innerText = number
    user_input.value = ""
    stop.style.display = "none"
    start.style.display = "block"
}