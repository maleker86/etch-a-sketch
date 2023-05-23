const container = document.getElementById("container");
let gridNumber = 24;

let containerWidth = container.offsetWidth;

// draw as many pixel boxes as gridNumber
for (i = 0; i < gridNumber * gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = "border: 1px solid black;";
  pixel.style.width = ((containerWidth / gridNumber) - 2) + "px";
  pixel.style.height = ((containerWidth / gridNumber) - 2) + "px";
  pixel.setAttribute('class', 'empty');

  pixel.addEventListener("mouseover", myTest)

  container.append(pixel);
//  console.log(i);
}

console.log(containerWidth);

//pixels.addEventListener("mouseover", myTest);

function myTest() {
  // console.log("Moused Over");
  this.removeAttribute('empty');
  this.setAttribute('class', 'activated');
} 