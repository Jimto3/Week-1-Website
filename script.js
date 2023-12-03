let opc = 100;
let fadeout = null;
let fadein = null;
let y = 0;
let move_menu = true;
let menu_buttons = document.getElementsByClassName("menu_button");
let background = document.getElementsByClassName("background");
let hover_effect = null;

// function fade(x) {
//   if (fadeout) {
//     clearInterval(fadeout); // prevents multiple instances of an interval
//   }
//   if (fadein) {
//     clearInterval(fadein);
//   }

//   if (x) {
//     //fadeout
//     (fadeout = setInterval(function () {
//       document.getElementById("menu").style.filter = `invert(${opc}%)`;
//       opc -= 1;
//       if (opc <= 30) {
//         clearInterval(fadeout);
//       }
//     })),
//       2;
//   } else {
//     (fadeout = setInterval(function () {
//       document.getElementById("menu").style.filter = `invert(${opc}%)`;
//       opc += 1;
//       if (opc == 100) {
//         clearInterval(fadeout);
//       }
//     })),
//       2;
//   }
// }

setInterval(function () {
  let media1 = document.getElementById("media1");
  if (media1.duration - media1.currentTime <= 1) {
    media1.classList.add("fade_anim");
  } else {
    media1.classList.remove("fade_anim");
  }
}),
  100;

function fly_up() {
  let img = document.createElement(`img`);
  img.setAttribute(
    "src",
    "https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-rocket-cartoon.png"
  );
  img.style =
    "width: 100px; height: 100px; position: absolute; top: 500px; left: 50%; z-index: 2";
  background[0].appendChild(img);
  let z = 2;
  let start = window.scrollY;
  setInterval(function () {
    if (img.style.top >= "-100px") {
      img.style.top = `${start + 500 - z}px`;
      z += 2;
    } else {
      img.remove(); //doesn't work?
      clearInterval();
    }
  }),
    3;
}

function fly_down() {
  let img = document.createElement(`img`);
  img.setAttribute(
    "src",
    "https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-rocket-cartoon.png"
  );
  img.style =
    "width: 100px; height: 100px; position: absolute; top: 500px; left: 30%; transform: rotate(180deg); z-index: 2;";
  background[0].appendChild(img);
  let z = window.scrollY;
  setInterval(function () {
    if (img.offsetTop <= document.body.offsetHeight) {
      img.style.top = `${z}px`;
      z += 2;
    } else {
      img.remove(); //doesn't work?
      clearInterval();
    }
  }),
    3;
}

function hover() {
  let img = document.createElement(`img`);
  img.setAttribute(
    "src",
    "https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-rocket-cartoon.png"
  );
  img.style =
    "width: 100px; height: 100px; position: absolute; top: 500px; left: 70%; z-index: 2";
  background[0].appendChild(img);
  let z = window.scrollY;
  if (hover_effect) {
    clearInterval(hover_effect);
    img.remove();
  }
  setInterval(function () {
    img.style.top = `${z + 500 + 5 * Math.sin(y)}px`; //hover effect
    y += 0.05;
    let hover_effect = setTimeout(function () {
      img.remove();
      clearInterval(hover_effect);
    }, 5000); //how long the hover rocket last
  }),
    3;
}

function toggle_menu() {
  if (move_menu) {
    for (let i = 0; i < menu_buttons.length; i++) {
      menu_buttons[i].style.top = "-100px";
    }
  } else {
    for (let i = 0; i < menu_buttons.length; i++) {
      menu_buttons[i].style.top = "10px";
    }
  }
  move_menu = !move_menu; //menu will toggle
}
