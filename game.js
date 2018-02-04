var mySec=1;
var mySfum=255;
var textSfum = 255;
var loading= true;
// var aniload;
//
// function preload() {
//   aniload=loadImage('assets/aniload.png');
// }

function setup() {

  createCanvas(windowWidth,windowHeight);

  background(0);
  frameRate(30);
  angleMode(DEGREES);
  noStroke();
  textFont('Lato');

  loadImg();
}

function draw() {
  if (loading){
    noStroke();
    fill(0,27,45,255);
    rect(0,0,width,height);

    // push();
    // translate(width/2, height/2);
    // scale(0.5);
    // rotate(frameCount/3);
    // imageMode(CENTER);
    // image(aniload,0,0);
    // pop();
  }
  else{
    background('#001b2d');
    countLett();

    if(mMove!==0) {
      if(clockSwitch==1 && frameTime%2==0) {
      pushLett();
      }
    showParticles();
    // end - SHOW PARTICLES
    }

    // showTextScore();
    clock();
    // scoreBar();
    showTextEnd();
    // end - SCORE

    fill(255,255,255,textSfum);
    textAlign(CENTER);
    textSize(35);
    text('Move your mouse', width/2,height/2-25);
    text('and erase the trash', width/2,height/2+25);
    if(frameTime>=((mySec+1)*30) && mMove!==0) {
      textSfum-=(255/30);
    }
    //SFUMATURA
      fill(0,27,45,mySfum);
      rect(0,0,width,height);
      mySfum-=(255/(mySec*30));
    // fine SFUMATURA
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  return false;
}
