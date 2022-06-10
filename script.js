var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        alert("I'm clicked!");
    })
}



// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I'm being poked");
// }