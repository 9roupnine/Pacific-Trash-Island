var pos = 0;
var imgLM, imgBM1, imgBM2, onda1, onda2;
var n1=0;
var c1=0;
var y=0;
var cy=0;
var tra=-1;
var spost=0,
    diff=20;
var Gtimer=0;
var string = 'Durante il tempo che hai giocato sono stati gettati nel mare 10,000 m² di plastica. (Impegnati come hai fatto nel gioco per migliorare la situazione!)';
var loading=true;
var button=false;

function loadImg() {
  imgLM=loadImage('assets/mont/lm.png');
  imgBM2=loadImage('assets/mont/bm2.png');
  imgBM1=loadImage('assets/mont/bm1.png');
  logo=loadImage('assets/logo.png');
  flag=loadImage('assets/flag.png');
  hk=loadImage('assets/flags/flag_hk.png');
  lux=loadImage('assets/flags/flag_lux.png');
  gia=loadImage('assets/flags/flag_gia.png');
  bel=loadImage('assets/flags/flag_bel.png');
  irl=loadImage('assets/flags/flag_irl.png');
  uru=loadImage('assets/flags/flag_uru.png');
  ita=loadImage('assets/flags/flag_ita.png');
  spa=loadImage('assets/flags/flag_spa.png');
  onda1=loadImage('assets/onda1_1.png');
  onda2=loadImage('assets/onda2_2.png');
  back=loadImage('assets/back.png');
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
    fill(0,27,45,255);
    rect(0,0,width,height);
  }
  else {
    background(0,27,45,255);

    Gtimer++

    push();
    translate(0, tra*height+spost);
      fill(0,27,45,255);
      rect(0, height, width, 7000);

      push(); // inizio onda1
      translate(n1, 0);
      scale(1);
      image(onda1, width/2, height/2+530);

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

      push(); // inizio scroll
        if (pos<=0) {
        translate(pos, 0);
        }
        else {}
        push();// INIZIO - isole galleggianti
        translate(0, y);
          push();
          translate(width/2-5,height/2+75);
          scale(0.3);
          image(imgLM, 0, 0);
          pop();

          push();
          translate(width/2+615,height/2+50);
          scale(0.25);
          image(imgBM1, 0, 0);
          pop();

          push();
          translate(width/2+615+300,height/2+50);
          scale(0.25);
          image(imgBM2, 0, 0);
          pop();

          for (i=1; i<=1456; i++) {
            push();
            translate(width/2+915+(i*480),height/2+50);
            scale(0.25);
            image(imgBM2, 0, 0);
            pop();
          }

          push(); // INIZIO - bandiera
          translate(width/2-51,height/2-85);
          rotate(20);
          scale(-0.2, 0.2);
          image(flag, 0, 0);
          pop(); // FINE - bandiera

          // TESTI DIMENSIONE
          push();
          translate(width/2-51,height/2-100);
          rotate(15);
          fill(255);
          textAlign(CENTER);
          textSize(40);
          text('60"', 0, 0);
          pop();


          push(); // INIZIO - logo
          translate(width/2+560,height/2-100);
          rotate(-20);
          scale(0.2);
          image(logo, 0, 0);
          pop(); // FINE - logo

          push(); // INIZIO - hong kong
          translate(width/2+600+1000+100,height/2-95);
          rotate(0);
          scale(0.2);
          image(hk, 0, 0);
          pop(); // FINE - hong kong

          push(); // INIZIO - lux
          translate(width/2+600+2500+80,height/2-110);
          rotate(-15);
          scale(0.2);
          image(lux, 0, 0);
          pop(); // FINE - lux

          push(); // INIZIO - gia
          translate(width/2+10000+80,height/2-98);
          rotate(0);
          scale(0.2);
          image(gia, 0, 0);
          pop(); // FINE - gia

          push(); // INIZIO - bel
          translate(width/2+30000+50,height/2-115);
          rotate(-20);
          scale(0.2);
          image(bel, 0, 0);
          pop(); // FINE - bel

          push(); // INIZIO - irl
          translate(width/2+70000+80,height/2-98);
          rotate(0);
          scale(0.2);
          image(irl, 0, 0);
          pop(); // FINE - irl

          push(); // INIZIO - uru
          translate(width/2+170000+73,height/2-110);
          rotate(-10);
          scale(0.2);
          image(uru, 0, 0);
          pop(); // FINE - uru

          push(); // INIZIO - ita
          translate(width/2+300000+80,height/2-118);
          rotate(0);
          scale(0.2);
          image(ita, 0, 0);
          pop(); // FINE - ita

          push(); // INIZIO - spa
          translate(width/2+500000+80,height/2-95);
          rotate(-20);
          scale(0.2);
          image(spa, 0, 0);
          pop(); // FINE - spa

          push(); // INIZIO - logo
          translate(width/2+700000+29,height/2-94);
          rotate(-20);
          scale(0.2);
          image(logo, 0, 0);
          pop(); // FINE - logo

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

      pop(); // fine scroll

        push(); // inizio onda2
        translate(-n1, 0);
        scale(1);
        image(onda2, width/2, height/2+530);

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

        push(); // inizio - TESTI DIMENSIONI
          if (pos<=0) {
          translate(pos, 0);
          }
          else {}
          noStroke();

          fill(255);
          textAlign(CENTER);
          textSize(25);

          text('Scroll to find the entire dimension', width/2,height-70-diff);
          // text('10,000 m²', width/2,height-70);
          text("It's bigger than Hong Kong", width/2+600+1000+20,+70-diff);
          text('1,000 km²', width/2+600+1000,height-70-diff);
          text("It's bigger than Luxemburg", width/2+600+2500+20,+70-diff);
          text('2,500 km²', width/2+600+2500,height-70-diff);
          text("It's bigger than Giamaica", width/2+10000+20,+70-diff);
          text('10,000 km²', width/2+10000,height-70-diff);
          text("It's bigger than Belgium", width/2+30000+20,+70-diff);
          text('30,000 km²', width/2+30000,height-70-diff);
          text("It's bigger than Ireland", width/2+70000+20,+70-diff);
          text('70,000 km²', width/2+70000,height-70-diff);
          text("It's bigger than Uruguay", width/2+170000+20,+70-diff);
          text('170,000 km²', width/2+170000,height-70-diff);
          text("It's bigger than Italy", width/2+300000+20,+70-diff);
          text('300,000 km²', width/2+300000,height-70-diff);
          text("It's bigger than Spain", width/2+500000+20,+70-diff);
          text('500,000 km²', width/2+500000,height-70-diff);
          text('The entire dimension of the island', width/2+700000+20,+70-diff);
          text('700,000 km²', width/2+700000,height-70-diff);

          push();
          fill(255);
          textAlign(CENTER);
          textSize(20);

          text(string,width/2-200,+40-diff, 400, 200);
          pop();

        pop(); // fine - TESTI DIMENSIONI

        push(); // INIZIO - back
        translate(80,50);
        scale(0.25);
        image(back, 0, 0);
        pop(); // FINE - back

        // fill('red');
        // rect(55,15,70,70);

    if(spost<=height+diff)
    {
      spost+=20;
    }
  }

  changeWindow();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  if(pos<=0 && pos>=-700000){
  print(event.delta);
  pos += event.delta;
  }
  else if(pos<=-700000){
    pos=-700000;
  }
  else{
    pos=0;
  }
  return false;
}

function mouseClicked() {
  if(mouseX>=45 &&
    mouseX<=45+70 &&
    mouseY>=45 &&
    mouseY<=45+70){
    button=true;
  }
}

function changeWindow() {
  if (button==true) {
    window.location.href="index.html";
  }
}

// CHEAT
function keyTyped() {
  if(key==' ')
  pos = -700000;
}
