var pos = 0;
var imgLM, imgBM1, imgBM2, onda1, onda2;
var n1=0;
var c1=0;
var y=0;
var cy=0;
var tra=-1;
var spost=0;
var Gtimer=0;
var buttonP=false;
var buttonR=false;
var colP = '255,255,255',
    colR = '255,255,255',
    colBP = 0,
    colBR = 0;
var loading=true;
// var aniload;
//
// function preload() {
//   aniload=loadImage('assets/aniload.png');
// }

function loadImg () {
  imgLM=loadImage('assets/mont/hm.png');
  logo=loadImage('assets/logo.png');
  flag=loadImage('assets/flag.png');
  onda1=loadImage('assets/onda1_1.png');
  onda2=loadImage('assets/onda2_2.png');
  loading=false;
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  frameRate(30);
  textFont('Lato');
  loadImg();
}

function draw() {
  if (loading){
    noStroke();
    fill(0,27,45,255);
    rect(0,0,width,height);

    push();
    translate(width/2, height/2);
    rotate(frameCount/3);
    noFill();
    strokeWeight(5);
    stroke(255);
    arc(0, 0, 50, 50, 0, 90);
    pop();
  }
  else {
    background(0,27,45,255);

    Gtimer++

    changeCol();

    push();
    translate(0, -spost);
      fill(0,27,45,255);
      rect(0, height, width, 7000);

      push(); // inizio onda1
      translate(n1, 0);
      scale(1);
      // fill(255);
      // bezier(-100, height/2+50, 200, height/2-50, width-100, height/2-50, width+100, height/2+50);
      // rect(-100, height/2+50, width+200, height/2+200);
      image(onda1, width/2, height/2+450);

      if(n1<-200) {
        c1=0;
      } else if(n1>+200) {
        c1=1;
      }

      if(c1==0){
        n1+=2
      } else if(c1==1){
        n1-=2
      }
      pop(); // fine onda1

        push();// INIZIO - isole galleggianti
        translate(0, y);
          push();
          translate(width/2,height/2-50);
          scale(0.25);
          image(imgLM, 0, 0);
          pop();

          push();
          translate(width/2+10,height/2-220);
          rotate(-20);
          scale(0.2);
          image(logo, 0, 0);
          pop();

        if(y<-8) {
          cy=0;
        } else if(y>+8) {
          cy=1;
        }

        if(cy==0){
          y+=0.5
        } else if(cy==1){
          y-=0.5
        }
        pop(); // FINE - isole galleggianti

        // fill(0,27,45,150);
        // rect(0, height/2+50, width, height);

        push(); // inizio onda2
        translate(-n1, 0);
        scale(1);
        // fill(255);
        // bezier(-100, height/2+50, 200, height/2-50, width-100, height/2-50, width+100, height/2+50);
        // rect(-100, height/2+50, width+200, height/2+200);
        image(onda2, width/2, height/2+450);

        if(n1<-200) {
          c1=0;
        } else if(n1>+200) {
          c1=1;
        }

        if(c1==0){
          n1+=2
        } else if(c1==1){
          n1-=2
        }
        pop(); // fine onda2

        push();
        stroke(255);
        strokeWeight(3);
        fill(255,255,255,colBR);
        rect(width/2-200, height/2+200, 175, 60, 30, 30, 30, 30);
        fill(255,255,255,colBP);
        rect(width/2+25, height/2+200, 175, 60, 30, 30, 30, 30);
        pop();

        push();
        noStroke();
        fill(255);
        textAlign(CENTER);
        textSize(25);
        text('In the 2050 there will be more bottle than fish.', width/2,height/2+110);
        text('Bettere clean up the ocean!', width/2,height/2+150);

        textSize(20);
        fill(colR);
        text('READ MORE', width/2-112,height/2+237);
        fill(colP);
        text('PLAY', width/2+112,height/2+237);
        pop();

    if(spost<=height && buttonP==true) {
      spost+=20;
    }
    if(spost>=height) {
      window.location.href="tutorial.html";
    }
    if (buttonR==true) {
      window.location.href="readmore.html"
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    if(mouseX>=width/2-200 &&
      mouseX<=width/2-200+175 &&
      mouseY>=height/2+200 &&
      mouseY<=height/2+200+60){
      buttonR = true;
    }
    if(mouseX>=width/2+25 &&
      mouseX<=width/2+25+175 &&
      mouseY>=height/2+200 &&
      mouseY<=height/2+200+60){
      buttonP = true;
    }
}

function changeCol () {
  if(mouseX>=width/2-200 &&
    mouseX<=width/2-200+175 &&
    mouseY>=height/2+200 &&
    mouseY<=height/2+200+60){
    colR = '#001b2d';
    colBR = 255;
  }
  else if(mouseX>=width/2+25 &&
    mouseX<=width/2+25+175 &&
    mouseY>=height/2+200 &&
    mouseY<=height/2+200+60){
    colP = '#001b2d';
    colBP = 255;
  }
  else {
    colP = '255,255,255';
    colR = '255,255,255';
    colBP = 0;
    colBR = 0;
  }
}

function mouseWheel(event) {
  return false;
}
