img = "";
status = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#aa1ae8");
    text("Dog", 45, 75);
    noFill();
    stroke("#aa1ae8");
    rect(30, 60, 450, 350);
    
    fill("#aa1ae8");
    text("Cat", 320, 120);
    noFill();
    stroke("#aa1ae8");
    rect(300, 90, 300, 310);
}

function modelLoaded() {
    console.log("model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}