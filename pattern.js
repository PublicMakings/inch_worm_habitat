// import { SVG } from "@svgdotjs/svg.js";

// make a grid
// make a iso_grid

// random assign access on percentage for i/o

// draw out pattern alternating

// svg.js https://svgjs.dev/docs/3.0/installation/
const svgjs = document.createElement("script");
svgjs.setAttribute(
  "src",
  "https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.1/svg.min.js"
);
document.body.appendChild(svgjs);

console.log("toots!!");

var draw = SVG().addto("#surface").size(300, 300);
var rect = draw.rect(100, 100).attr({ fill: "hsl(80,70,80)" });
