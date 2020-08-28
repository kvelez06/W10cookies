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

function sun() {
    Cookies.set("synthCookie", "sun", {expires:1})
}
