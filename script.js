let opc = 100;
let fadeout = null;
let fadein = null;

function fade(x) {
  if (fadeout) {
    clearInterval(fadeout); // prevents multiple instances of an interval
  }
  if (fadein) {
    clearInterval(fadein);
  }

  if (x) {
    //fadeout
    (fadeout = setInterval(function () {
      document.getElementById("menu").style.filter = `invert(${opc}%)`;
      opc -= 1;
      if (opc <= 30) {
        clearInterval(fadeout);
      }
    })),
      2;
  } else {
    (fadeout = setInterval(function () {
      document.getElementById("menu").style.filter = `invert(${opc}%)`;
      opc += 1;
      if (opc == 100) {
        clearInterval(fadeout);
      }
    })),
      2;
  }
}

float_text("text");

setInterval(function () {
  let media1 = document.getElementById("media1");
  if (media1.duration - media1.currentTime <= 1) {
    media1.classList.add("fade_anim");
    clearInterval();
  } else {
    media1.classList.remove("fade_anim");
  }
}),
  100;

// function background(a, b) {
//   alert("hello");
//   document.getElementById(a).style.backgroundImage =
//     "url(tengyart-k3ZLQ5YDGG0-unsplash.jpg)";
//   console.log(a);
//   console.log(b);
// }
