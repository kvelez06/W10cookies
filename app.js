// var counter = Cookies.get("counterValue");
// var initialH2 = document.getElementById("counter");
// initialH2.innerHTML = counter;

// if(counter == undefined) {
//     counter = 1;
// }

// function addOne() {
//     counter++;
//     Cookies.set("counterValue", counter);
//     var counterText = document.getElementById("counter");
//     counterText.innerHTML = counter;
// }


function SetCar1() {
    Cookies.set("selection", "Honda");
    window.open("selection.html");
}

function SetCar2() {
    Cookies.set("selection", "Nissan");
    window.open("selection.html");
}

function SetCar3() {
    Cookies.set("selection", "Toyota");
    window.open("selection.html");
}