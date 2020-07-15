let currentSlide = 0;
const lastSlide = 10;
const numVideos = 1;

//canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//canvas.width=500;
canvas.width=window.innerWidth;
canvas.height = (window.innerHeight) / 2;

ctx.font="50px Times New Roman";
ctx.fillStyle="purple";
setSlide();

// //canvas gradient background
// let grd= ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, 100, 100, 100);
// grd.addColorStop(0, "hotpink");
// grd.addColorStop(1, "lightblue");
// ctx.fillStyle = grd;
// ctx.fillRect(0, 0, canvas.width, canvas.height);

//key press functionality
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    switch (event.key) {
        case "ArrowLeft":
            switchSlide('L');
            break;
        case "ArrowRight":
            switchSlide('R');
            break;
        case "ArrowUp":
            hideVideo();
            break;
        case "ArrowDown":
            showVideo();
            break;
        default:
            //nothing yet
            break;
    }
});

//functions
function switchSlide(x) {
    switch (x) {
        case 'L':
            //go to previous slide
            if (currentSlide > 0){
                document.getElementById("slidetext").firstChild.nodeValue = "Previous Slide";
                currentSlide -= 1;
                setSlide();
            }
            break;
        case 'R':
            //go to next slide
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

//clear canvas and apply current slide to canvas
function setSlide() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //hide video
    hideVideo();
    //apply current slide to canvas
    switch(currentSlide) {
        case 0:
            ctx.fillText("Presentation Title", canvas.width * 0.2, canvas.height * 0.2);
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

//show youtube video with same number as current slide
function showVideo() {
    document.getElementById("vid" + String(currentSlide)).style.visibility="visible";
    return true;
}

//hide all youtube videos
function hideVideo() {
    for (let i = 1; i <= numVideos; i++){
        document.getElementById("vid" + String(i)).style.visibility="hidden";
    }
}