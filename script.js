const container = document.getElementById("container");
let gridNumber = 25;

container.style.width = (gridNumber * 10) + "px";

for (i = 0; i < gridNumber * gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = "height: 8px; width: 8px; border: 1px solid black;";
  pixel.setAttribute('class', 'empty');

  container.append(pixel);
//  console.log(i);
}

let thisPixel = document.getElementsByClassName("empty");
thisPixel.addEventListener("mouseover", console.log("Yes?"));