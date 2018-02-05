var letters=[];
var keyP = 0;
var sec=3;
var sfum=255;
var loading=true;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(30);

  letters = new info();
}

function draw() {
  background('#001b2d');

  if (loading){
    push();
    translate(width/2, height/2);
    rotate(frameCount*10);
    noFill();
    strokeWeight(5);
    stroke(255);
    arc(0, 0, 50, 50, 0, 90);
    pop();
  }
  else {
    push();
    translate(width/3,height/2);
    letters.display();
    letters.move();
    changeWindow();
    pop();

    // INIZIO - sfumatura
      fill(0,27,45,sfum);
      rect(0,0,width,height);
      sfum-=(255/(sec*30))
    // FINE - sfumatura
  }
}

function keyTyped() {
  letters.delete();
}

function info() {
  this.x=0;
  this.y1=this.y2=this.y3=this.y4=0;
  this.vy1=random(-0.1,0.1);
  this.vy2=random(-0.2,0.1);
  this.vy3=random(-0.1,0.2);
  this.vy4=random(-0.2,0.2);
  this.c1 = this.c2 = this.c3 =  this.c4 = this.c5 = this.c6 =  this.c7 = this.c8 = this.c9 = this.c10 = this.c11 = 255;

  this.display=function(){
  noStroke();
    textSize(50);
    textFont('Vollkorn');
    textAlign(CENTER);

      var s = 30
      var h = 50

      fill(this.c1)
      text('P', this.x,this.y1-h);

      fill(this.c2)
      text('R', this.x+s,this.y2-h);
      text('R', this.x+s*11,this.y3-h);
      text('R', this.x+s*5,this.y4+h);
      text('R', this.x+s*11,this.y4+h);

      fill(this.c3)
      text('E', this.x+s*2,this.y1-h);
      text('E', this.x+s*7,this.y3-h);
      text('E', this.x+s*10,this.y4-h);
      text('E', this.x+s*14,this.y1-h);
      text('E', this.x+s*4,this.y2+h);
      text('E', this.x+s*8,this.y3+h);


      fill(this.c4)
      text('S', this.x+s*3,this.y4-h);
      text('S', this.x+s*4,this.y1-h);
      text('S', this.x+s*16,this.y2-h);
      text('S', this.x+s*7,this.y1+h);
      text('S', this.x+s*13,this.y4+h);

      fill(this.c5)
      text('L', this.x+s*6,this.y1-h);

      fill(this.c6)
      text('T', this.x+s*8,this.y2-h);
      text('T', this.x+s*9,this.y3-h);
      text('T', this.x+s,this.y2+h);
      text('T', this.x+s*10,this.y1+h);

      fill(this.c7)
      text('K', this.x+s*13,this.y2-h);

      fill(this.c8)
      text('Y', this.x+s*15,this.y3-h);

      fill(this.c9)
      text('O', this.x+s*2,this.y4+h);

      fill(this.c10)
      text('A', this.x+s*6,this.y3+h);
      text('A', this.x+s*12,this.y2+h);

       fill(this.c11)
      text('H', this.x+s*14,this.y3+h);
 }

  // galleggiamento
  this.move=function(){
       this.y1 += this.vy1;
      this.y2 += this.vy2;
      this.y3 += this.vy3;
      this.y4 += this.vy4;

    if ((this.y1 > 8)||(this.y1 < -8)) {
      this.vy1 *= -1;
    }
    if ((this.y2 > 5)||(this.y2 < -5)) {
      this.vy2 *= -1;
    }
    if ((this.y3 > 8)||(this.y3 < -8)) {
      this.vy3 *= -1;
    }
    if ((this.y4 > 10)||(this.y4 < -10)) {
      this.vy4 *= -1;
    }
  }

// cancella letters
  this.delete=function(){
    if (key == 'p' || key == 'P'){
      if(this.c1!=='#001b2d') {
        keyP++;
      }
        this.c1=('#001b2d');
    }

    if (key == 'r' || key == 'R'){
      if(this.c2!=='#001b2d') {
        keyP++;
      }
    this.c2=('#001b2d');
    }
    if (key == 'e' || key == 'E'){
      if(this.c3!=='#001b2d') {
        keyP++;
      }
      this.c3=('#001b2d');
    }
    if (key == 's' || key == 'S'){
      if(this.c4!=='#001b2d') {
        keyP++;
      }
      this.c4=('#001b2d');
    }
    if (key == 'l' || key == 'L'){
      if(this.c5!=='#001b2d') {
        keyP++;
      }
      this.c5=('#001b2d');
    }
    if (key == 't' || key == 'T'){
      if(this.c6!=='#001b2d') {
        keyP++;
      }
      this.c6=('#001b2d');
    }
    if (key == 'k' || key == 'K'){
      if(this.c7!=='#001b2d') {
        keyP++;
      }
      this.c7=('#001b2d');
    }
    if (key == 'y' || key == 'Y'){
      if(this.c8!=='#001b2d') {
        keyP++;
      }
      this.c8=('#001b2d');
    }
    if (key == 'o' || key == 'O'){
      if(this.c9!=='#001b2d') {
        keyP++;
      }
      this.c9=('#001b2d');
    }
    if (key == 'a' || key == 'A'){
      if(this.c10!=='#001b2d') {
        keyP++;
      }
      this.c10=('#001b2d');
    }
    if (key == 'h' || key == 'H'){
      if(this.c11!=='#001b2d') {
        keyP++;
      }
      this.c11=('#001b2d');
    }
  }
  loading=false;
}

function changeWindow() {
  if(keyP==11) {
    window.location.href="game.html";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  return false;
}
