let currentSlide = 0;

//canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width=500;
canvas.height=500;

ctx.font="50px Times New Roman";
ctx.fillStyle="purple";
ctx.fillText("Presentation Title", 20, 300);

//functions
function switchSlide(x) {
    switch (x) {
        case 'L':
            document.getElementById("slidetext").firstChild.nodeValue = "Previous Slide";
            currentSlide -= 1;
            break;
        case 'R':
            //check that not at end
            document.getElementById("slidetext").firstChild.nodeValue = "Next Slide";
            currentSlide += 1;
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