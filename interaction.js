var tot = 0,
    score = 0;

function keyTyped() {
  if(clockSwitch==1) {
    if (key == 'a' || key == 'A'){
       particlesA.splice(0,numA);
       score += numA;
    }
    if (key == 'b' || key == 'B'){
       particlesB.splice(0,numB);
       score += numB;
    }
    if (key == 'c' || key == 'C'){
       particlesC.splice(0,numC);
       score += numC;
    }
    if (key == 'd' || key == 'D'){
       particlesD.splice(0,numD);
       score += numD;
    }
    if (key == 'e' || key == 'E'){
       particlesE.splice(0,numE);
       score += numE;
    }
    if (key == 'f' || key == 'F'){
       particlesF.splice(0,numF);
       score +=  numF;
    }

  if (key == 'g' || key == 'G'){
       particlesG.splice(0,numG);
       score += numG;
    }
    if (key == 'h' || key == 'H'){
       particlesH.splice(0,numH);
       score += numH;
    }
    if (key == 'i' || key == 'I'){
       particlesI.splice(0,numI);
       score += numI;
    }
    if (key == 'j' || key == 'J'){
       particlesJ.splice(0,numJ);
       score += numJ;
    }
    if (key == 'k' || key == 'K'){
       particlesK.splice(0,numK);
       score += numE;
    }
    if (key == 'l' || key == 'L'){
       particlesL.splice(0,numL);
       score +=  numL;
    }

      if (key == 'm' || key == 'M'){
       particlesM.splice(0,numM);
       score += numM;
    }
    if (key == 'n' || key == 'N'){
       particlesN.splice(0,numN);
       score += numN;
    }
    if (key == 'o' || key == 'O'){
       particlesO.splice(0,numO);
       score += numO;
    }
    if (key == 'p' || key == 'P'){
       particlesP.splice(0,numP);
       score += numP;
    }
    if (key == 'q' || key == 'Q'){
       particlesQ.splice(0,numQ);
       score += numQ;
    }
    if (key == 'r' || key == 'R'){
       particlesR.splice(0,numR);
       score +=  numR;
    }

    if (key == 's' || key == 'S'){
       particlesS.splice(0,numS);
       score += numS;
    }
    if (key == 't' || key == 'T'){
       particlesT.splice(0,numT);
       score += numT;
    }
    if (key == 'u' || key == 'U'){
       particlesU.splice(0,numU);
       score += numU;
    }
    if (key == 'v' || key == 'V'){
       particlesV.splice(0,numV);
       score += numV;
    }
    if (key == 'w' || key == 'W'){
       particlesW.splice(0,numW);
       score += numW;
    }
    if (key == 'x' || key == 'X'){
       particlesX.splice(0,numX);
       score +=  numX;
    }

      if (key == 'y' || key == 'Y'){
       particlesY.splice(0,numY);
       score += numY;
    }
    if (key == 'z' || key == 'Z'){
       particlesZ.splice(0,numZ);
       score += numZ;
    }
    if (key == '1' || key == '!'){
       particlesEscl.splice(0,numEscl);
       score += numEscl;
    }
    if (key == '3' || key == '£'){
       particlesSterl.splice(0,numSterl);
       score += numSterl;
    }
    if (key == '4' || key == '$'){
       particlesDoll.splice(0,numDoll);
       score += numDoll;
    }
    if (key == '6' || key == '&'){
       particlesEcomm.splice(0,numEcomm);
       score +=  numEcomm;
    }

      if (key == "'" || key == "?"){
       particlesInt.splice(0,numInt);
       score += numInt;
    }
    if (key == '+' || key == '*' || key == ']'){
       particlesAst.splice(0,numAst);
       score += numAst;
    }
    if (key == 'ò' || key == 'ç' || key == '@'){
       particlesChi.splice(0,numChi);
       score += numChi;
    }
    if (key == 'à' || key == '°' || key == '#'){
       particlesCan.splice(0,numCan);
       score += numCan;
    }
    if (key == 'ù' || key == '§'){
       particlesBoh.splice(0,numBoh);
       score += numBoh;
    }
    if (key == ' '){
      clockTime=sec*30;
    }
  }
}

function scoreBar() {
  fill(255, 255, 255, 100);
  // rect(width-350, 85, 300, 25);
  rect(width/2-150, height-100, 300, 50);
  fill(255);
  // rect(width-350, 85, score*(600/1800), 25);
  rect(width/2-150, height-100, score*(600/1800), 50);
}

function showTextScore() {
  noStroke();
  fill('red');
  textSize(30);
  text('tot: ' + tot, 100,100);
  fill('green');
  text('score: ' + score, width-200,100);
  fill('yellow');
  text('perc: ' + round((score/tot)*100) + '%', width/2,height-100);
}
