let currentSlide = 0;
let lastSlide = 10;

//canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width=500;
canvas.height=500;

ctx.font="50px Times New Roman";
ctx.fillStyle="purple";
setSlide();

//functions
function switchSlide(x) {
    switch (x) {
        case 'L':
            if (currentSlide > 0){
                document.getElementById("slidetext").firstChild.nodeValue = "Previous Slide";
                currentSlide -= 1;
                setSlide();
            }
            break;
        case 'R':
            //check that not at end
            if (currentSlide < lastSlide){
                document.getElementById("slidetext").firstChild.nodeValue = "Next Slide";
                currentSlide += 1;
                setSlide();
            }
            break;
        default:
            //do nothing
            break;
    }
    return true;
}

function changeText() {
    //create function that changes between slides. slide number will be a variable
    document.getElementById("h3text").style.color="red";
    document.getElementById("h3text").innerHTML=String(currentSlide);
    return true;
}

function setSlide() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //apply current slide to canvas
    switch(currentSlide) {
        case 0:
            ctx.fillText("Presentation Title", 20, 300);
            break;
        case 1:
            ctx.fillText("First Slide", 20, 300);
            break;
        default:
            ctx.fillText("Slide " + String(currentSlide), 20, 300);
            break;
    }
    return true;
}