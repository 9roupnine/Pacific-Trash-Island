var frameTime = 0;
var clockTime = 0;
var sfum=0;
var clockSwitch = 1;
var sec = 60;
var mMove = 0;
var sfumEnd = 0;
var sfumEnd2 = 0;
var button=false;
var colC = 'ffffff';
    colBC = 0;

function clock() {
  if(mMove!==0) {
    push();
    translate(100, 100);
    rotate(-90);

    fill(255, 255, 255, 100);
    arc(0, 0, 100, 100, 0, 360);
    fill(255, 255, 255,clockSwitch*255);
    arc(0, 0, 100, 100, 0, -clockTime*(359/(sec*30)));

    if(clockTime>=sec*30) {
      clockSwitch=0;
    }
    pop();
    clockTime++
  }
  else {
    push();
    translate(100, 100);
    rotate(-90);
    fill(255, 255, 255, 255);
    arc(0, 0, 100, 100, 0, 360);
    pop();
  }
  frameTime ++;

  mMove += dist(mouseX,mouseY,pmouseX,pmouseY);
}


function showTextEnd() {
  // inizio SFUMATURA
  if(clockTime>=sec*30) {
    fill(0,27,45,sfum);
    rect(0,0,width,height);
    sfum+=(255/60);
  }
  // fine SFUMATURA

  if(clockTime>=(sec*30)+60) {

    changeCol();

    push();
    translate(width/2, height/2-50);

      push();
      fill(255,255,255,colBC);
      stroke(255,255,255,sfumEnd);
      strokeWeight(2);
      rect(-100, 250, 200, 60, 30, 30, 30, 30);
      pop();

    textAlign(CENTER);
    noStroke();
    fill(255,255,255,sfumEnd);
    // inserire if
    textSize(40);
    if (round((score/tot)*100)>= 50) {
      text('Good job!', 0,-150);
    }
    if (round((score/tot)*100)< 50) {
      text('You could have done more...', 0,-150);
    }
    textSize(70);
    text(round((score/tot)*100)+'%', 0, +25);
    textSize(25);
    text('You cleaned up '+round((score/tot)*10000)+' m² of plastic in the sea', 0,+180);

    textSize(20);
    if (colC=='ffffff') {
      fill(255,255,255,sfumEnd);
    }
    else if (colC=='#001b2d') {
      fill(colC);
    }
    text('CONTINUE', 0,287);
    pop();

    push();
    translate(width/2-148,height/2-137);
    tint(255,sfumEnd);
    rotate(-8);
    scale(0.35);
    image(flagSco, 0, 0);
    pop();

    sfumEnd+=(255/30);
  }
  if (button==true) {
    fill(0,27,45,sfumEnd2);
    rect(0,0,width,height);
    sfumEnd2+=(255/20);

    if(sfumEnd2>=300) {
      window.location.href="theend.html";
    }
  }
}

function changeCol() {
  if(mouseX>=width/2-100 &&
    mouseX<=width/2+100 &&
    mouseY>=height/2+250-50 &&
    mouseY<=height/2+310-50){
    colC = '#001b2d';
    colBC = 255;
  }
  else {
    colC = 'ffffff';
    colBC = 0;
  }
}

function mouseClicked() {
  if(clockTime>=(sec*30)+60) {
    if(mouseX>=width/2-100 &&
      mouseX<=width/2+100 &&
      mouseY>=height/2+250-50 &&
      mouseY<=height/2+310-50){
      button = true;
    }
  }
}
