import { click_sound, mobile_unmute, play, stop } from "./audio_control.js";
import { getPosition, getGesturePointFromEvent } from "./ui.js";

let bird = document.getElementById("bird_1");
bird.style.height = "0";

function displayer() {
  bird.style.height = "10%";
  console.log("hmmmmm");
  btn.style.display = "none";

  // get location of board and place bird there.
}

let btn = document.createElement("button");

btn.innerText = "click Me";

// creating movement

let container = document.querySelector("#surface");
surface.appendChild(btn);
btn.addEventListener("click", displayer);
// document.body.appendChild(btn);

container.addEventListener("click", move, false);

function move(e) {
  console.log("clicked");
  let x = e.clientX;
  let y = e.clientY;
  console.log(x, y);
  bird.style.left = x + "px";
  bird.style.top = y + "px";
  // // UNCOMMENT EVENTUALLY
  // click_sound();
}

let music_btn = document.createElement("button");

music_btn.innerText = "sound";
music_btn.classList.add("controls");
music_btn.id = "music";
surface.appendChild(music_btn);

music_btn.addEventListener("click", toggle, false);

// controls = {(control:"sound",setting:false),(control:"music",setting:false)}
let control = [false, false];

function toggle(e) {
  let control_name = e.currentTarget.id;
  // match this to the object instead of checking against value
  //   if (control_name == "music") {
  //     control[1] = true;
  //   }
  control[1] = !control[1];
  console.log(control[1]);

  if (control[1] == true) {
    play();
    let clicked = document.createElement("button");
    document.body.appendChild(clicked);
    document.body.style.backgroundColor = "magenta";
  } else {
    stop();
    document.body.style.backgroundColor = "cyan";
    // let clacked = document.createElement("button");
    // clacked.innerText = "BOO";
    // document.body.appendChild(clacked);
  }
}
// first touch allow audio on mobile... figure out how to destory this afterwards?

// /// uncomment!
document.body.addEventListener("touchstart", allow_audio, false);

function allow_audio(e) {
  mobile_unmute();
  document.body.style.backgroundColor = "cyan";
  //   let clacked = document.createElement("button");
  //   clacked.innerText = "BOO";
  //   document.body.appendChild(clacked);
  e.currentTarget.removeEventListner("touchstart", allow_audio);
}
