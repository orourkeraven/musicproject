const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let currentSlide = 0;

function changeText() {
    //create function that changes between slides. slide number will be a variable
    document.getElementById("h3text").firstChild.nodeValue=String(currentSlide);
    return true;
}

function switchSlide(x) {
    switch (x){
        case 'L':
            if (currentSlide >= 0){
                document.getElementById("slidetext").firstChild.nodeValue="Previous Slide";
                currentSlide -= 1;
            }
            break;
        case 'R':
            //check that not at end
            document.getElementById("slidetext").firstChild.nodeValue="Next Slide";
            currentSlide += 1;
            break;
        default:
            //do nothing
            break;

    }
    return true;
}