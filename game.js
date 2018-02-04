var mySec=1;
var mySfum=255;
var textSfum = 255;

function setup() {

  createCanvas(windowWidth,windowHeight);

  background(0);
  frameRate(30);
  angleMode(DEGREES);
  noStroke();
  textFont('Lato');
}

function draw() {
  background('#001b2d');
  countLett();

  if(mMove!==0) {
    if(clockSwitch==1 && frameTime%3==0) {
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
  textSize(40);
  text('Move your mouse', width/2,height/2);
  if(frameTime>=((mySec+1)*30) && mMove!==0) {
    textSfum-=(255/30);
  }


  //SFUMATURA
    fill(0,27,45,mySfum);
    rect(0,0,width,height);
    mySfum-=(255/(mySec*30));
  // fine SFUMATURA
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  return false;
}
