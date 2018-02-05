var c;
var arrImg=[];
var cLoaded = 0,
    tLoaded = 35+1;

function loaded() {
  cLoaded++;
  if(cLoaded==tLoaded) {
    loading=false;
  }
}

function loadImg() {
    for(i = 0; i <= 34; i++) {
      var f = loadImage('assets/lett/lett'+i+'.png', loaded);
      arrImg.push(f);
    }
    flagSco=loadImage('assets/flag_score.png', loaded);
}

function getRandomSize() {
     while (true) {
     let r1 = random(0.15,1);
    let r2 = random(0.5,0.85);
    if (r2 > r1) {
      return r1;
     }
  }
}
class Particle {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.img = arrImg[c];
    this.size = getRandomSize();
    this.z = random (0,360);
    this.vz = random (-0.05,0.05);
    tot++;
  }

  update() {
    this.x += this.vx*(this.size*2);
    this.y += this.vy*(this.size*2);

    if ((this.x > width)||(this.x < 0)) {
      this.vx *= -1;
    }
    if ((this.y > height)||(this.y < 0)) {
      this.vy *= -1;
    }
      this.z += this.vz;
  }

  show() {
    push();
    imageMode(CENTER);
    translate(this.x,this.y);
    rotate(this.z);
    scale(this.size);
    image(this.img,0,0);
    pop();
  }
}

function pushLett() {
  c = round(random(0,34));

  var p = new Particle();

  if (c==0) {
    particlesA.push(p);
  }
  if (c==1) {
    particlesB.push(p);
  }
  if (c==2) {
    particlesC.push(p);
  }
  if (c==3) {
    particlesD.push(p);
  }
  if (c==4) {
    particlesE.push(p);
  }
  if (c==5) {
    particlesF.push(p);
  }
  if (c==6) {
    particlesG.push(p);
  }
  if (c==7) {
    particlesH.push(p);
  }
  if (c==8) {
    particlesI.push(p);
  }
  if (c==9) {
    particlesJ.push(p);
  }
  if (c==10) {
    particlesK.push(p);
  }
  if (c==11) {
    particlesL.push(p);
  }
  if (c==12) {
    particlesM.push(p);
  }
  if (c==13) {
    particlesN.push(p);
  }
  if (c==14) {
    particlesO.push(p);
  }
  if (c==15) {
    particlesP.push(p);
  }
  if (c==16) {
    particlesQ.push(p);
  }
  if (c==17) {
    particlesR.push(p);
  }
  if (c==18) {
    particlesS.push(p);
  }
  if (c==19) {
    particlesT.push(p);
  }
  if (c==20) {
    particlesU.push(p);
  }
  if (c==21) {
    particlesV.push(p);
  }
  if (c==22) {
    particlesW.push(p);
  }
  if (c==23) {
    particlesX.push(p);
  }
  if (c==24) {
    particlesY.push(p);
  }
  if (c==25) {
    particlesZ.push(p);
  }
  if (c==26) {
    particlesEscl.push(p);
  }
  if (c==27) {
    particlesSterl.push(p);
  }
  if (c==28) {
    particlesDoll.push(p);
  }
  if (c==29) {
    particlesEcomm.push(p);
  }
  if (c==30) {
    particlesInt.push(p);
  }
  if (c==31) {
    particlesAst.push(p);
  }
  if (c==32) {
    particlesChi.push(p);
  }
  if (c==33) {
    particlesCan.push(p);
  }
  if (c==34) {
    particlesBoh.push(p);
  }
}

function showParticles() {
  for (var i = 0; i < particlesA.length; i++) {
    particlesA[i].show();
    particlesA[i].update();

  }
  for (var i = 0; i < particlesB.length; i++) {
    particlesB[i].show();
    particlesB[i].update();
  }

  for (var i = 0; i < particlesC.length; i++) {
    particlesC[i].show();
    particlesC[i].update();
  }

  for (var i = 0; i < particlesD.length; i++) {
    particlesD[i].show();
    particlesD[i].update();
  }

  for (var i = 0; i < particlesE.length; i++) {
    particlesE[i].show();
    particlesE[i].update();
  }

  for (var i = 0; i < particlesF.length; i++) {
    particlesF[i].show();
    particlesF[i].update();
  }

    for (var i = 0; i < particlesG.length; i++) {
    particlesG[i].show();
    particlesG[i].update();

  }
  for (var i = 0; i < particlesH.length; i++) {
    particlesH[i].show();
    particlesH[i].update();
  }

  for (var i = 0; i < particlesI.length; i++) {
    particlesI[i].show();
    particlesI[i].update();
  }

  for (var i = 0; i < particlesJ.length; i++) {
    particlesJ[i].show();
    particlesJ[i].update();
  }

  for (var i = 0; i < particlesK.length; i++) {
    particlesK[i].show();
    particlesK[i].update();
  }

  for (var i = 0; i < particlesL.length; i++) {
    particlesL[i].show();
    particlesL[i].update();
  }


    for (var i = 0; i < particlesM.length; i++) {
    particlesM[i].show();
    particlesM[i].update();

  }
  for (var i = 0; i < particlesN.length; i++) {
    particlesN[i].show();
    particlesN[i].update();
  }

  for (var i = 0; i < particlesO.length; i++) {
    particlesO[i].show();
    particlesO[i].update();
  }

  for (var i = 0; i < particlesP.length; i++) {
    particlesP[i].show();
    particlesP[i].update();
  }

  for (var i = 0; i < particlesQ.length; i++) {
    particlesQ[i].show();
    particlesQ[i].update();
  }

  for (var i = 0; i < particlesR.length; i++) {
    particlesR[i].show();
    particlesR[i].update();
  }

    for (var i = 0; i < particlesS.length; i++) {
    particlesS[i].show();
    particlesS[i].update();

  }
  for (var i = 0; i < particlesT.length; i++) {
    particlesT[i].show();
    particlesT[i].update();
  }

  for (var i = 0; i < particlesU.length; i++) {
    particlesU[i].show();
    particlesU[i].update();
  }

  for (var i = 0; i < particlesV.length; i++) {
    particlesV[i].show();
    particlesV[i].update();
  }

  for (var i = 0; i < particlesW.length; i++) {
    particlesW[i].show();
    particlesW[i].update();
  }

  for (var i = 0; i < particlesX.length; i++) {
    particlesX[i].show();
    particlesX[i].update();
  }

    for (var i = 0; i < particlesY.length; i++) {
    particlesY[i].show();
    particlesY[i].update();

  }
  for (var i = 0; i < particlesZ.length; i++) {
    particlesZ[i].show();
    particlesZ[i].update();
  }

  for (var i = 0; i < particlesEscl.length; i++) {
    particlesEscl[i].show();
    particlesEscl[i].update();
  }

  for (var i = 0; i < particlesSterl.length; i++) {
    particlesSterl[i].show();
    particlesSterl[i].update();
  }

  for (var i = 0; i < particlesDoll.length; i++) {
    particlesDoll[i].show();
    particlesDoll[i].update();
  }

  for (var i = 0; i < particlesEcomm.length; i++) {
    particlesEcomm[i].show();
    particlesEcomm[i].update();
  }

    for (var i = 0; i < particlesInt.length; i++) {
    particlesInt[i].show();
    particlesInt[i].update();

  }
  for (var i = 0; i < particlesAst.length; i++) {
    particlesAst[i].show();
    particlesAst[i].update();
  }

  for (var i = 0; i < particlesChi.length; i++) {
    particlesChi[i].show();
    particlesChi[i].update();
  }

  for (var i = 0; i < particlesCan.length; i++) {
    particlesCan[i].show();
    particlesCan[i].update();
  }

  for (var i = 0; i < particlesBoh.length; i++) {
    particlesBoh[i].show();
    particlesBoh[i].update();
  }
}
