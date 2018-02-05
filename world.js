var zMin = 0.002;
var zMax = 1.50;
var sensativity = 0.0001;
// var mySfum=430;
var sfum = 255,
    zoom = 8,
    zoom2 = 0,
    dh=0; //max: (height/2)+15
    sec=1;
var button = false,
    buttonIsland = false;
var loading = true;
    cLoaded = 0,
    tLoaded = 5;

function loaded() {
  cLoaded++;
  if(cLoaded==tLoaded) {
    loading=false;
  }
}

function loadImg() {
  lett=loadImage('assets/lettere.png', loaded);
  world=loadImage('assets/world-trash.png', loaded);
  back=loadImage('assets/back.png', loaded);
  island=loadImage('assets/button-island.png', loaded);
  logo=loadImage('assets/logo.png', loaded);
}
function setup() {
 createCanvas(windowWidth,windowHeight);
 rectMode(CENTER);
 imageMode(CENTER);
 frameRate(30);
 loadImg();
}
function draw() {
  background(0,27,45,255);

  if (loading){
    push();
    translate(width/2, height/2);
    rotate(frameCount*20);
    noFill();
    strokeWeight(5);
    stroke(255);
    arc(0, 0, 50, 50, 0, 90);
    pop();
  }
  else {

    deZoom();

    if (frameCount>=55 && dh<=((height/2))) {
      dh += height/25;
    }
    push(); // INIZIO - logo
    translate(width/2+90,-60+dh);
    rotate(0);
    scale(0.12);
    image(logo, 0, 0);
    pop(); // FINE - logo

    push(); // INIZIO - back
    translate(80,50+25);
    scale(0.25);
    image(back, 0, 0);
    pop(); // FINE - back

    push(); // INIZIO - world
    translate(width-80,50+25);
    scale(0.25);
    image(island, 0, 0);
    pop(); // FINE - world

    changeWindow();

    // push(); //inizio SFUMATURA
    // rectMode(CORNER);
    // fill(0,27,45,mySfum);
    // rect(0,0,width,height);
    // mySfum-=25.5;
    // pop(); // fine SFUMATURA
  }
}


function mouseWheel() {
 return false;
}

function deZoom() {
  if (frameCount>=10 && frameCount<20) {
    zoom2 -= 0.02;
    zoom -= 0.2
  }
  if (frameCount>=20 && frameCount<40) {
    zoom -= 0.3;
    zoom2 -= 0.03;
  }

  if (frameCount>=10) {
    push();
    imageMode(CENTER);
    translate(width/2,height/2);
    scale(0.17+zoom);
    image(world, 0,0);
    pop();
  }

  // push();
  // translate(width/2,height/2);
  // scale(0.5+zoom2);
  // fill(0,27,45,255);
  // rect(0,0,width*2.5,height*2.5);
  // pop();

  push();
  translate(width/2,height/2);
  scale(0.8*0.6+zoom2*0.6);
  image(lett,0,0);
  pop();
}

function mouseClicked() {
  if(mouseX>=45 &&
    mouseX<=45+70 &&
    mouseY>=40 &&
    mouseY<=40+70){
    button=true;
  }
  if(mouseX>=width-115 &&
    mouseX<=width-115+70 &&
    mouseY>=40 &&
    mouseY<=40+70){
    buttonIsland=true;
  }
}

function changeWindow() {
  if (button==true) {
    window.location.href="index.html";
  }
  if (buttonIsland==true) {
    window.location.href="theend.html";
  }
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
