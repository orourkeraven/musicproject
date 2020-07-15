let currentSlide = 0;
const lastSlide = 10;
const numVideos = 1;

//canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//canvas.width=500;
canvas.width=window.innerWidth;
canvas.height = (window.innerHeight) / 2;

setSlide();

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
                currentSlide -= 1;
                setSlide();
            }
            break;
        case 'R':
            //go to next slide
            if (currentSlide < lastSlide){
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

//clear canvas and apply current slide to canvas. called by switchSlide()
function setSlide() {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //hide video
    hideVideo();
    //create text gradient
    //gradient & shadow from https://www.html5canvastutorials.com/tutorials/html5-canvas-gradient-text-tutorial/
    ctx.shadowColor = "rgb(190, 190, 190)";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10
    ctx.shadowBlur = 10;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width * 0.7, canvas.height * 0.3);
    gradient.addColorStop(0, "rgb(28, 200, 255)");
    gradient.addColorStop(1, "rgb(19, 210, 171)");
    ctx.fillStyle = gradient;
    //add slide number to bottom left corner
    if (currentSlide > 0){
        ctx.font="20px Georgia";
        ctx.fillText(String(currentSlide) + "/" + String(lastSlide), canvas.width - 50, canvas.height - 20);
    }
    //apply current slide to canvas
    switch(currentSlide) {
        case 0:
            ctx.font= String(canvas.width * 0.05) + "px Georgia";
            ctx.fillText("AI-Generated Music", canvas.width * 0.1, canvas.height * 0.2);
            ctx.font="20px Georgia";
            ctx.fillText("Raven O'Rourke | PMUS 1001 | Summer 2020", canvas.width * 0.5, canvas.height * 0.8);
            ctx.shadowColor = "transparent";
            ctx.fillText("← Use the left and right arrows on your keyboard to navigate slides →", canvas.width * 0.3, canvas.height * 0.5);
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