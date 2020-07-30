let currentSlide = 0;
const lastSlide = 20;

//canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//canvas.width=500;
canvas.width=window.innerWidth - 10;
canvas.height = (window.innerHeight) * 0.55;

setSlide();
let text_Y_val = 0;

//key press functionality
document.addEventListener("keydown", function(event) {
    //event.preventDefault();
    switch (event.key) {
        case "ArrowLeft":
            switchSlide('L');
            break;
        case "ArrowRight":
            switchSlide('R');
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
                setSlideSource();
            }
            break;
        case 'R':
            //go to next slide
            if (currentSlide < lastSlide){
                currentSlide += 1;
                setSlide();
                setSlideSource();
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
    //hide video, buttons
    hideNextButton();
    hideVideo();
    showVideo();
    hideButtons();
    //create text shadow
    //gradient & shadow from https://www.html5canvastutorials.com/tutorials/html5-canvas-gradient-text-tutorial/
    ctx.shadowColor = "rgba(83,149,170,0.69)";
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10
    ctx.shadowBlur = 10;
    //add slide number to bottom right corner
    if (currentSlide > 0){
        ctx.font="20px Georgia";
        ctx.fillStyle = "rgba(94, 94, 94, 0.69)";
        ctx.fillText(String(currentSlide) + "/" + String(lastSlide), canvas.width - 55, canvas.height - 20);
    }
    //create text gradient
    let gradient = ctx.createLinearGradient(0, 0, canvas.width * 0.7, canvas.height * 0.3);
    gradient.addColorStop(0, "rgb(0,185,253)");
    gradient.addColorStop(1, "rgb(15,229,181)");
    ctx.fillStyle = gradient;
    //apply current slide to canvas
    switch(currentSlide) {
        case 0:
            ctx.font= String(canvas.width * 0.05) + "px Georgia";
            ctx.fillText("AI-Generated Music", canvas.width * 0.1, canvas.height * 0.2);
            ctx.font="20px Georgia";
            ctx.fillText("Raven O'Rourke | PMUS 1001 | Summer 2020", canvas.width * 0.5, canvas.height * 0.8);
            ctx.shadowColor = "transparent";
            ctx.fillText("← Use the left and right arrows on your keyboard to navigate slides →", canvas.width * 0.3, canvas.height * 0.5);
            ctx.fillText("↓ Sources will be linked under slides ↓", canvas.width * 0.1, canvas.height - 20);
            break;
        case 1:
            ctx.font= String(canvas.width * 0.05) + "px Georgia";
            ctx.fillText("AI-Generated Music", canvas.width * 0.1, canvas.height * 0.2);
            ctx.font="20px Georgia";
            ctx.fillText("Raven O'Rourke | PMUS 1001 | Summer 2020", canvas.width * 0.5, canvas.height * 0.8);
            ctx.shadowColor = "transparent";
            ctx.fillText("← Use the left and right arrows on your keyboard to navigate slides →", canvas.width * 0.3, canvas.height * 0.5);
            ctx.fillText("↓ Sources will be linked under slides ↓", canvas.width * 0.1, canvas.height - 20);
            ctx.fillStyle = "#ff00ab";
            ctx.fillText("Important: if your browser is not currently open to full screen, I strongly recommend:", 20, (canvas.height * 0.5) + 30);
            ctx.fillText("• opening fullscreen", 20, (canvas.height * 0.5) + 60);
            ctx.fillText("• then refreshing the page", 20, (canvas.height * 0.5) + 90);
            ctx.fillText("before continuing. The project may not work correctly otherwise.", 20, (canvas.height * 0.5) + 120);
            window.confirm("Is your browser open to fullscreen");
            break;
        case 2:
            text_Y_val = fillSlide("AI-Generated Music: What is it?",
                "Computers and music can interact in a variety of ways. For instance, Spotify uses a machine learning algorithm to create daily",
                "personalized playlists for its users, and Shazam creates an acoustic fingerprint to identify songs from auditory input.");
            break;
        case 3:
            text_Y_val = fillSlide("AI-Generated Music: What is it?",
                "Computers and music can interact in a variety of ways. For instance, Spotify uses a machine learning algorithm to create daily",
                "personalized playlists for its users, and Shazam creates an acoustic fingerprint to identify songs from auditory input.");
            newBulletPoint(text_Y_val);
            text_Y_val = fillSlide(" ", " ", " ",
                "This presentation will focus on music generated by artificial intelligence using neural networks. It's basically a computer\'s ",
                "best attempt at creating music, usually based off of \"real music\" input that the computer tries to imitate.");
            break;
        case 4:
            //neural network diagram
            drawImageOnSlide("neuralnetdiagram", 100, 100, 0.4);
            text_Y_val = fillSlide("How is it created?",
                "Artificial neural networks are used to train computers to generate new music.");
            break;
        case 5:
            //neural network diagram
            drawImageOnSlide("neuralnetdiagram", 100, 100, 0.4);
            text_Y_val = fillSlide("How is it created?",
                "Artificial neural networks are used to train computers to generate new music.");
            //text to right of image
            text_Y_val += 30;
            //bulletpoint
            ctx.fillText("→", 525, text_Y_val);
            ctx.fillText("A defining feature of artificial intelligence (versus other types of computing)", 550, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("is that it possesses a ", 550, text_Y_val);
            let offsetVal = 550 + ctx.measureText("is that it possesses a ").width;
            ctx.font = "bold 20px Georgia";
            ctx.fillText("feedback loop ", offsetVal, text_Y_val);
            offsetVal += ctx.measureText("feedback loop ").width;
            ctx.font = "20px Georgia";
            ctx.fillText("which helps the computer learn and get better.", offsetVal, text_Y_val);
            break;
        case 6:
            //neural network diagram
            drawImageOnSlide("neuralnetdiagram", 100, 100, 0.4);
            text_Y_val = fillSlide("How is it created?",
                "Artificial neural networks are used to train computers to generate new music.");
            //text to right of image
            text_Y_val += 30;
            //bulletpoint
            ctx.fillText("→", 525, text_Y_val);
            ctx.fillText("Basically, everything gets represented by a number so that the computer can", 550, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("put it through an algorithm. ", 550, text_Y_val);
            //new bulletpoint
            text_Y_val += 30;
            ctx.fillText("→", 525, text_Y_val);
            ctx.fillText("The computer can be given numbers representing:", 550, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("•", 550, text_Y_val);
            ctx.fillText("Pitch (Example: C = 1, C♯ = 2, D = 3, etc.)", 575, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("•", 550, text_Y_val);
            ctx.fillText("Octave (Example: 1, 2, 3, or 4 representing successively higher octaves)", 575, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("•", 550, text_Y_val);
            ctx.fillText("Note duration", 575, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("•", 550, text_Y_val);
            ctx.fillText("A note's relative position in the song", 575, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("(Example: Current measure number divided by total number of measures)", 575, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("•", 550, text_Y_val);
            ctx.fillText("And much more. Every aspect of music can be represented numerically", 575, text_Y_val);
            text_Y_val += 30;
            ctx.fillText("and used to develop the neural network.", 575, text_Y_val);
            break;
        case 7:
            showButtons();
            fillSlide("History");
            ctx.fillText("Take a guess: when was the first computer-generated composition created?", (canvas.width * 0.5) - 300, (canvas.height * 0.5) - 30 );
            break;
        case 8:
            text_Y_val = fillSlide("History",
                "Believe it or not, the first computer composition was created in 1957! \"Illiac Suite for String Quartet\" was created as a collaboration between",
                "composer Lejaren Hiller and mathematician Leonard Isaacson. "
            );
            newBulletPoint(text_Y_val);
            //todo add info about markov chain
            text_Y_val = fillSlide(" ", " ", " ",
                "This piece was generated using a Markov Chain, a method that uses probability to determine which notes are likely to follow each other.");
            newBulletPoint(text_Y_val);
            fillSlide(" ", " ", " ", " ",
                "It was then recorded by human musicians.", " ",
                "Below is the first piece from the suite.");
            break;
        case 9:
            text_Y_val = fillSlide("History",
                "Another notable computer composition was featured on the television show \"I\'ve Got a Secret\" in 1965.",);
            newBulletPoint(text_Y_val);
            text_Y_val = fillSlide(" ", " ",
                "Raymond Kurzweil is famous today as an author, inventor, and outspoken futurist and is currently employed as a director of engineering at Google.");
            newBulletPoint(text_Y_val);
            fillSlide(" ", " ", " ",
                "He is around 17 in the video below, where he performs his piece and the panelists must guess that it is computer-generated.");
            break;
        case 10:
            fillSlide("Modern Methods: Computer Composition", "Computer composition");
            //todo add info just composed and then recorded by humans
            break;
        case 11:
            text_Y_val = fillSlide("Modern Methods: Lyric Generation", "AI can also write lyrics!");
            newBulletPoint(text_Y_val);
            text_Y_val = fillSlide(" ", " ", "Many lyric generators exist on the internet. Here's an example of");
            text_Y_val = fillSlide(" ", " ", " "," some lyrics generated by the site \"TheseLyricsDoNotExist.com\"");
            newBulletPoint(text_Y_val);
            text_Y_val = fillSlide(" ", " ", " ", " ",
                "This site uses a neural network to generate lyrics fitting a user\'s");
            text_Y_val += 30;
            text_Y_val = fillSlide(" ", " ", " ", " ", " ", "selected topic and style.(*cite)");
            newBulletPoint(text_Y_val);
            text_Y_val = fillSlide(" ", " ", " ", " ", " ", " ", "Below is the input used to generate these lyrics:");
            drawImageOnSlide("lyrics1", 110, 260, 0.4);
            drawImageOnSlide("lyrics2", 700, 20, 0.4);
            drawImageOnSlide("lyrics3", 1050, 20, 0.4);
            break;
        case 12:
            fillSlide("Modern Methods: Audio Synthesis", "Audio synthesis");
            break;
        case 13:
            fillSlide("Is it good?", "What do people think?");
            drawImageOnSlide("good2", 100, 100, 0.35);
            drawImageOnSlide("good1", 790, 100, 0.39);
            //todo add sources for screenshots on slide & under slide
            ctx.fillText("→ Reviews are mixed, with some implementations being better than others.", 75, 300);
            //todo can people tell the difference, lyrics people thought bettter, lead into lawsuits
            break;
        case 14:
            fillSlide("Is it good?", "Hot tub time");
            break;
        case 15:
            fillSlide("So good, it might be illegal", "");
            //todo fill with jay z lawsuit
            break;
        case 16:
            //todo impact on songwriters and musicians
            //todo future: trend or longetivity? could it creat a popular song?
            break;
        case 17:
            //todo add all sources
            break;
        default:
            ctx.fillText("Slide " + String(currentSlide), 20, 300);
            break;
    }
    return true;
}

//fill generic slide with title and text
function fillSlide(title, l1="", l2="", l3="", l4="", l5="", l6="") {
    //title
    ctx.font= "36px Georgia";
    ctx.fillText(title, 30, 50);

    //text
    ctx.font= "20px Georgia";
    ctx.shadowColor = "transparent";

    let text_Y_val = 90;
    if (l1 !==""){
        ctx.fillText("→ " + l1, 75, text_Y_val);
    }
    if (l2 !== ""){
        text_Y_val += 30;
        ctx.fillText(l2, 100, text_Y_val);
    } else return text_Y_val;
    if (l3 !== ""){
        text_Y_val += 30;
        ctx.fillText(l3, 100, text_Y_val);
    } else return text_Y_val;
    if (l4 !== ""){
        text_Y_val += 30;
        ctx.fillText(l4, 100, text_Y_val);
    } else return text_Y_val;
    if (l5 !== ""){
        text_Y_val += 30;
        ctx.fillText(l5, 100, text_Y_val);
    } else return text_Y_val;
    if (l6 !== ""){
        text_Y_val += 30;
        ctx.fillText(l6, 100, text_Y_val);
    } else return text_Y_val;

}

function newBulletPoint(text_Y_val){
    text_Y_val += 30;
    ctx.fillText("→ ", 75, text_Y_val);
}

//show youtube video with same number as current slide
function showVideo() {
    let video_source = "";
    //get video source
    switch(currentSlide){
        case 8:
            //hiller illiac suite
            video_source = "https://www.youtube.com/embed/n0njBFLQSk8";
            break;
        case 9:
            //kurzweil
            video_source = "https://www.youtube.com/embed/X4Neivqp2K4?start=16";
            break;
        case 12:
            //uptown funk extended
            video_source = "https://www.youtube.com/embed/KCaya74_NHw";
            break;
        case 14:
            //hot tub time
            video_source = "https://www.youtube.com/embed/OQy1BciDxEc";
            break;
        case 15:
            //jay-z
            video_source = "https://www.youtube.com/embed/iyemXtkB-xk";
            break;
        default:
            video_source = "none";
            break;
    }
    //change source of video element
    if (video_source === "none"){
        return;
    } else {
        showNextButton();
        document.getElementById("video").src = video_source;
        document.getElementById("video").style.visibility="visible";
    }
}

//show next button (for slides with youtube videos)
function showNextButton(){
    document.getElementById("nextbutton").style.display = "inline";
}
//hide next button
function hideNextButton(){
    document.getElementById("nextbutton").style.display = "none";
}

//hide all youtube videos
function hideVideo() {
    document.getElementById("video").style.visibility="hidden";
}

//show buttons below canvas
function showButtons() {
    document.getElementById("buttons").style.display = "inline";
}
//hide buttons below canvas
function hideButtons(){
    document.getElementById("buttons").style.display = "none";
}

//put image on canvas slide. takes address of image, x/y coords for canvas, and percent to multiply size
function drawImageOnSlide(image_id, x_val, y_val, size_pct) {
    let img = document.getElementById(image_id);
    let img_width = img.width * size_pct;
    let img_height = img.height * size_pct;
    ctx.drawImage(img, x_val, y_val, img_width, img_height);
}

//identify source names and links
let sn1 = "(1) Company - Shazam. Shazam, www.shazam.com/company. Accessed 22 July 2020.";
let sl1 = "https://www.shazam.com/company";
let sn2 = "(2) \"Spotify + The Machine: Using Machine Learning to Create Value and Competitive Advantage.\" MBA Student Perspectives, Harvard Business School, 13 Nov. 2018"
let sl2 = "https://digital.hbs.edu/platform-rctom/submission/spotify-the-machine-using-machine-learning-to-create-value-and-competitive-advantage/"
let sn3 = "(3) \"1950s: The Beginnings of Artificial Intelligence (AI) Research.\" World-Information.org, World-Information Institute.";
let sl3 = "https://world-information.org/wio/infostructure/100437611663/100438659360";
let sn4 = "(4) \"I Created an AI That Wrote Music\". YouTube, uploaded by Qxir, 1 March 2019.";
let sl4 = "https://www.youtube.com/watch?v=8lQh2QAgeIQ&list=PLk9Xpzkm63TUI2PwNui0SaE_Yp_Dmwsok";
let sn5 = "(5) Hiller, Lejaren et al. \"Computer Music.\" Encyclopædia Britannica, Encyclopædia Britannica, Inc., 21 Feb. 2018.";
let sl5 = "https://www.britannica.com/art/electronic-music/Computer-music";
let sn6 = "";
let sl6 = "";

//sources to add
//these lyrics do not exist

//change text for slide source under canvas
function setSlideSource(){
    switch(currentSlide){
        case 2:
        case 3:
            document.getElementById("sourcelink1").firstChild.nodeValue = sn1;
            document.getElementById("sourcelink1").setAttribute("href", sl1);
            document.getElementById("sourcelink2").firstChild.nodeValue = sn2;
            document.getElementById("sourcelink2").setAttribute("href", sl2);
            break;
        case 4:
        case 5:
        case 6:
            document.getElementById("sourcelink1").firstChild.nodeValue = sn3;
            document.getElementById("sourcelink1").setAttribute("href", sl3);
            document.getElementById("sourcelink2").firstChild.nodeValue = sn4;
            document.getElementById("sourcelink2").setAttribute("href", sl4);
            break;
        case 8:
            document.getElementById("sourcelink1").firstChild.nodeValue = sn5;
            document.getElementById("sourcelink1").setAttribute("href", sl5);
            break;
        default:
            document.getElementById("sourcelink1").firstChild.nodeValue = "";
            document.getElementById("sourcelink2").firstChild.nodeValue = "";
            document.getElementById("sourcelink3").firstChild.nodeValue = "";
            break;
    }
}

//behavior for button clicks: go to next slide, display correct if right answer
function clickButton(val){
    switchSlide('R');
    switch(val){
        case 1957:
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,200,70);
            ctx.shadowColor = "rgba(83,149,170,0.69)";
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10
            ctx.shadowBlur = 10;
            let gradient = ctx.createLinearGradient(0, 0, canvas.width * 0.7, canvas.height * 0.3);
            gradient.addColorStop(0, "rgb(0,185,253)");
            gradient.addColorStop(1, "rgb(15,229,181)");
            ctx.fillStyle = gradient;
            ctx.font = "50px Georgia"
            ctx.fillText("Correct!", 0, 50);
            break;
        case 1968:
            break;
        case 1991:
            break;
        case 2002:
            break;
        default:
            break;
    }
}