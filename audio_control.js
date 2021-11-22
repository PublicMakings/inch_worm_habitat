//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();
const plucky = new Tone.PluckSynth().toDestination();
const metals = new Tone.MetalSynth().toDestination();

const loopA = new Tone.Loop((time) => {
  synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);
//play another note every off quarter-note, by starting it "8n"
const loopB = new Tone.Loop((time) => {
  synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");
// the loops start when the Transport is started
const plucks = new Tone.Loop((time) => {
  plucky.triggerAttackRelease("C4", "4n", time);
}, "5n").start("12n");
const metdals = new Tone.Loop((time) => {
  plucky.triggerAttackRelease("A5", "2n", time);
}, "4n").start("10n");

function play() {
  console.log("booyah");
  //play a middle 'C' for the duration of an 8th note
  // const now = Tone.now();
  // synth.triggerAttackRelease("C4", "8n", now);
  // synth.triggerAttackRelease("E4", "8n", now + 0.5);
  // synth.triggerAttackRelease("G4", "8n", now + 1);
  // synth.triggerAttackRelease("C4", "8n");
  Tone.Transport.start();
  // ramp up to 800 bpm over 10 seconds
  Tone.Transport.bpm.rampTo(40, 10);
}

function stop() {
  console.log("pop");
  Tone.Transport.stop();
}

function mobile_unmute() {
  if (Tone.context.state !== "running") {
    Tone.context.resume();
  }
}

function click_sound() {
  let up_down = new Tone.AMOscillator(
    "Gb3",
    "sine",
    "triangle"
  ).toDestination();
  up_down.start();
}

export { play, click_sound, stop, mobile_unmute };

const song1 = ["C4", "E4", "F5"];

// D,E,G,A,C,D

// F3, [å3,D4]

// E3 [G3,c4]=>[g3,a3,g3,a3]

// D3,a3=>g3,E3,g3

// D3,A3,E3,G3
