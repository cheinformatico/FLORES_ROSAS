const ec = document.getElementById("canvas");
const cv = ec.getContext("2d");
const contenedorF = document.querySelector(".contenedor"); 
const contenedoresFlors = document.querySelectorAll(".f"); 
const cf = document.querySelectorAll(".contenedorPetalos");
const tf = document.querySelectorAll(".tallo");
const ptg = document.querySelectorAll(".pg");
const ptn = document.querySelectorAll(".pn");
const cFG = document.querySelector(".flores");
var taf = cf.length;
var tat = tf.length;
var auxf = 0;
var auxt = 0;
var aH = 15;
var indl = 0;
var itdl;
var itml;
var itdlCY;
var itdlCX;
var auPFY = 400;
var auPFX = 650;
var auPCY = 650;
var auPCX = 650;
var topc = cFG.offsetTop;
var leftc = cFG.offsetLeft;
var auxp = true;
const li = [
  {
    pCX: 500,
    pCY: 650,

    pFX: 550,
    pFY: 850,
  },
  {
    pCX: 400,
    pCY: 750,

    pFX: 250,
    pFY: 800,
  },

  {
    pCX: 250,
    pCY: 500,

    pFX: 150,
    pFY: 750,
  },
  {
    pCX: 300,
    pCY: 550,

    pFX: 50,
    pFY: 450,
  },
  {
    pCX: 300,
    pCY: 300,

    pFX: 110,
    pFY: 350,
  },
  {
    pCX: 250,
    pCY: 250,

    pFX: 110,
    pFY: 100,
  },
  {
    pCX: 450,
    pCY: 200,

    pFX: 410,
    pFY: 90,
  },
  {
    pCX: 700,
    pCY: 125,

    pFX: 660,
    pFY: 50,
  },
  {
    pCX: 800,
    pCY: 250,

    pFX: 900,
    pFY: 250,
  },
  {
    pCX: 850,
    pCY: 300,

    pFX: 950,
    pFY: 300,
  },
  {
    pCX: 900,
    pCY: 300,

    pFX: 1100,
    pFY: 500,
  },
  {
    pCX: 900,
    pCY: 450,

    pFX: 1100,
    pFY: 750,
  },
  {
    pCX: 800,
    pCY: 700,

    pFX: 780,
    pFY: 850,
  },
  {
    pCX: 720,
    pCY: 700,

    pFX: 700,
    pFY: 850,
  },
];
var tmli = li.length;
const anip = [
  {
    scale: ".1",
    visibility: "visible",
    offset: 0,
  },
  {
    scale: ".5",

    offset: 0.5,
  },
  {
    scale: "1",
    visibility: "visible",

    offset: 1,
  },
];
const opp = {
  duration: 1000,
  iterations: 1,
  easing: "linear",
  fill: "forwards",
};
var anit = [
  { height: "0vw", offset: 0 },
  { height: "5vw", offset: 0.25 },
  { height: "10vw", offset: 0.5 },
  { height: aH + "vw", visibility: "visible", offset: 1 },
];
const opt = {
  duration: 1000,
  iterations: 1,
  easing: "linear",
  fill: "forwards",
};
const anic = [
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #FB989F , #F578B2, #FF59B6,#FB989F , #F578B2, #FF59B6)",
    offset: 0,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #FF59B6 , #F08291, #F578B2,#FF59B6 , #FB989F, #F578B2)",

    offset: 0.1,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #F578B2 , #FF59B6, #FB989F,#F578B2 , #FF59B6, #F08291)",

    offset: 0.2,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #FB989F , #F578B2, #FF59B6,#F08291 , #F578B2, #FF59B6)",
    offset: 0.3,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #FF59B6 , #F08291, #F578B2,#FF59B6 , #FB989F, #F578B2)",

    offset: 0.4,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #F578B2 , #FF59B6, #F08291,#F578B2 , #FF59B6, #FB989F)",

    offset: 0.5,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #FF59B6 , #F08291, #F578B2,#FF59B6 , #FB989F, #F578B2)",

    offset: 0.6,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #F578B2 , #FF59B6, #F08291,#F578B2 , #FF59B6, #FB989F)",

    offset: 0.7,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #F08291 , #F578B2, #FF59B6,#FB989F , #F578B2, #FF59B6)",
    offset: 0.8,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #FF59B6 , #FB989F, #F578B2, #FF59B6 , #F08291, #F578B2)",

    offset: 0.9,
  },
  {
    background:
      "-webkit-radial-gradient(bottom, ellipse, #F578B2 , #FF59B6, #F08291, #F578B2, #FF59B6,#FB989F )",

    offset: 1,
  },
];
const anicd = [
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FFC7E6 , #F578B2, #FF59B6,#FFC7E6 , #F578B2, #FF59B6)",
    offset: 0,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FF59B6 , #FFC7E6, #F578B2,#FF59B6 , #FFC7E6, #F578B2)",

    offset: 0.1,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #F578B2 , #FF59B6, #FFC7E6,#F578B2 , #FF59B6, #FFC7E6)",

    offset: 0.2,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FFC7E6 , #F578B2, #FF59B6,#FFC7E6 , #F578B2, #FF59B6)",
    offset: 0.3,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FF59B6 , #FFC7E6, #F578B2,#FF59B6 , #FFC7E6, #F578B2)",

    offset: 0.4,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #F578B2 , #FF59B6, #FFC7E6,#F578B2 , #FF59B6, #FFC7E6)",

    offset: 0.5,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FF59B6 , #FFC7E6, #F578B2,#FF59B6 , #FFC7E6, #F578B2)",

    offset: 0.6,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #F578B2 , #FF59B6, #FFC7E6,#F578B2 , #FF59B6, #FFC7E6)",

    offset: 0.7,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FFC7E6 , #F578B2, #FF59B6,#FFC7E6 , #F578B2, #FF59B6)",
    offset: 0.8,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #FF59B6 , #FFC7E6, #F578B2, #FF59B6 , #FFC7E6, #F578B2)",

    offset: 0.9,
  },
  {
    background:
      "-webkit-radial-gradient(right, ellipse, #F578B2 , #FF59B6, #FFC7E6, #F578B2, #FF59B6,#FFC7E6 )",

    offset: 1,
  },
];
const opc = {
  duration: 1500,
  iterations: 1,
  easing: "linear",
};
var anim = [
  {
    top: parseInt(topc) + "px",
    left: parseInt(leftc) + "px",
    offset: 0,
  },
  {
    top: parseInt(topc) - 5 + "px",
    left: parseInt(leftc) + 5 + "px",
    offset: 0.25,
  },
  {
    top: parseInt(topc) + 5 + "px",
    left: parseInt(leftc) + 5 + "px",
    offset: 0.5,
  },
  {
    top: parseInt(topc) + 5 + "px",
    left: parseInt(leftc) - 5 + "px",
    offset: 0.75,
  },
  {
    top: parseInt(topc) + "px",
    left: parseInt(leftc) + "px",
    offset: 1,
  },
];
var opm = {
  duration: 2000,
  iterations: 1,
  easing: "linear",
};
function iniciar() {
  for (var i = 0; i < contenedoresFlors.length; i++) {
    contenedoresFlors[i].style.visibility = "hidden";
  }
  setTimeout(comprobarLinea, 1000);
  contenedorF.addEventListener("mouseover", (ev) => {
    if (
      ev.target.classList.contains("pg") ||
      ev.target.classList.contains("pn")
    ) {
      for (var i = 0; i < ptg.length; i++) {
        ptg[i].animate(anic, opc);
        ptn[i].animate(anicd, opc);
      }
      if (auxp == true) {
        cFG.animate(anim, opm);
      }
      Promise.all(
        cFG
          .getAnimations()
          .map((anim) => anim.finished)
      ).then(() => {
        auxp = true;
      });
      auxp = false;
    }
  });
}
function animarTallos() {
  if (auxt == 2) {
    aH = "20";
    anit[3].height = aH + "vw";
    tf[auxt].animate(anit, opt);
  }
  if (auxt == 3) {
    aH = "25";
    anit[3].height = aH + "vw";
    tf[auxt].animate(anit, opt);
  }
  tf[auxt].animate(anit, opt);
  Promise.all(
    tf[auxt]
      .getAnimations()
      .map((anit) => anit.finished)
  ).then(() => {
    if (auxt < tat - 1) {
      auxt++;
      animarTallos();
    } else {
      animarFlores();
    }
  });
}
function animarFlores() {
  cf[auxf].animate(anip, opp);
  Promise.all(
    cf[auxf]
      .getAnimations()
      .map((anip) => anip.finished)
  ).then(() => {
    if (auxf < taf - 1) {
      auxf++;
      animarFlores();
    }
  });
}
function redibujar() {
  cv.clearRect(0, 0, 1150, 900);
  for (var i = 0; i <= indl - 1; i++) {
    if (i % 2 == 0) {
      cv.beginPath();
      cv.moveTo(650, 400);
      cv.quadraticCurveTo(
        li[i].pCX,
        li[i].pCY,
        li[i].pFX,
        li[i].pFY
      );
      cv.shadowColor = "#F4F4F4";
      cv.shadowOffsetX = 2;
      cv.shadowOffsetY = 2;
      cv.shadowBlur = 5;
      cv.stroke();
    } else {
      cv.beginPath();
      cv.moveTo(650, 400);
      cv.quadraticCurveTo(
        li[i].pCX,
        li[i].pCY,
        li[i].pFX,
        li[i].pFY
      );
      cv.shadowColor = "#F4F4F4";
      cv.shadowOffsetX = 2;
      cv.shadowOffsetY = 2;
      cv.shadowBlur = 5;
      cv.fillStyle = "#FFFFFF";
      cv.fill();
    }
  }
}
function comprobarLinea() {
  cv.shadowColor = "#F4F4F4";
  cv.shadowOffsetX = 2;
  cv.shadowOffsetY = 2;
  cv.shadowBlur = 10;
  cv.strokeStyle = "#FFFFFF";
  if (li[indl].pFY > 400) {
    itdl = setInterval(dibujarLineaMayor, 1);
  } else {
    itdl = setInterval(dibujarLineaMenor, 1);
  }
}
function dibujarLineaMayor() {
  auPFY++;
  if (auPFY <= li[indl].pFY) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(650, 650, 650, auPFY);
    cv.stroke();
  } else {
    clearInterval(itdl);
    if (li[indl].pFX > 650) {
      itml = setInterval(moverLineaMayor, 1);
    } else {
      itml = setInterval(moverLineaMenor, 1);
    }
  }
}
function dibujarLineaMenor() {
  auPFY--;
  if (auPFY >= li[indl].pFY) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(650, 650, 650, auPFY);
    cv.stroke();
  } else {
    clearInterval(itdl);
    if (li[indl].pFX > 650) {
      itml = setInterval(moverLineaMayor, 1);
    } else {
      itml = setInterval(moverLineaMenor, 1);
    }
  }
}
function moverLineaMayor() {
  auPFX++;
  if (auPFX <= li[indl].pFX) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(650, 650, auPFX, auPFY);
    cv.stroke();
  } else {
    clearInterval(itml);
    if (li[indl].pCY > 650) {
      itdlCY = setInterval(doblarLineaCYMayor, 1);
    } else {
      itdlCY = setInterval(doblarLineaCYMenor, 1);
    }
  }
}
function moverLineaMenor() {
  auPFX--;
  if (auPFX >= li[indl].pFX) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(650, 650, auPFX, auPFY);
    cv.stroke();
  } else {
    clearInterval(itml);
    if (li[indl].pCY > 650) {
      itdlCY = setInterval(doblarLineaCYMayor, 1);
    } else {
      itdlCY = setInterval(doblarLineaCYMenor, 1);
    }
  }
}
function doblarLineaCYMayor() {
  auPCY++;
  if (auPCY <= li[indl].pCY) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(
      650,
      auPCY,
      auPFX,
      auPFY
    );
    cv.stroke();
  } else {
    clearInterval(itdlCY);
    if (li[indl].pCX > 650) {
      itdlCX = setInterval(doblarLineaCXMayor, 1);
    } else {
      itdlCX = setInterval(doblarLineaCXMenor, 1);
    }
  }
}
function doblarLineaCYMenor() {
  auPCY--;
  if (auPCY >= li[indl].pCY) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(
      650,
      auPCY,
      auPFX,
      auPFY
    );
    cv.stroke();
  } else {
    clearInterval(itdlCY);
    if (li[indl].pCX > 650) {
      itdlCX = setInterval(doblarLineaCXMayor, 1);
    } else {
      itdlCX = setInterval(doblarLineaCXMenor, 1);
    }
  }
}
function doblarLineaCXMayor() {
  auPCX++;
  if (auPCX <= li[indl].pCX) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(
      auPCX,
      auPCY,
      auPFX,
      auPFY
    );
    cv.stroke();
  } else {
    clearInterval(itdlCX);
    auPCX = 650;
    auPCY = 650;
    auPFX = 650;
    auPFY = 400;
    indl++;
    if (indl <= tmli - 1) {
      comprobarLinea();
    } else {
      setTimeout(animarTallos, 1000);
    }
  }
}
function doblarLineaCXMenor() {
  auPCX--;
  if (auPCX >= li[indl].pCX) {
    cv.clearRect(0, 0, 1150, 900);
    redibujar();
    cv.beginPath();
    cv.moveTo(650, 400);
    cv.quadraticCurveTo(
      auPCX,
      auPCY,
      auPFX,
      auPFY
    );
    cv.stroke();
  } else {
    clearInterval(itdlCX);
    auPCX = 650;
    auPCY = 650;
    auPFX = 650;
    auPFY = 400;
    indl++;
    if (indl <= tmli - 1) {
      comprobarLinea();
    } else {
      setTimeout(animarTallos, 1000);
    }
  }
}
window.addEventListener("load", iniciar);