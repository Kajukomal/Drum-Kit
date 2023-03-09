//Detecting Button Click

var noButtons = document.querySelectorAll(".drum").length; //Find no of buttons

for (var i = 0; i < noButtons; i++) {
    var selectedButton = document.querySelectorAll(".drum")[i]; //Select buttons with class drum one by one
    //Add Event Listener to the button 
    selectedButton.addEventListener("click", function () {
        var buttonInner = this.innerHTML; //which button got clicked outputs w,a,s..
        makeSound(buttonInner); //If w is pressed it is passed to makesounf fn as key which checks the switch statements
        buttonAnimation(buttonInner);
    })
}

//Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key); //event is used to detect which event triggered the function, it will output w,a,s,d....
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {

        case "w":
            var tomFour = new Audio("sounds/tom-4.mp3")
            tomFour.play();
            break;

        case "a":
            var tomThree = new Audio("sounds/tom-3.mp3")
            tomThree.play();
            break;

        case "s":
            var tomTwo = new Audio("sounds/tom-2.mp3")
            tomTwo.play();
            break;

        case "d":
            var tomOne = new Audio("sounds/tom-1.mp3")
            tomOne.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        default:
            console.log(buttonInner);

    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}