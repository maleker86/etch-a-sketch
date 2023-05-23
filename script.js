const container = document.getElementById("container");
let gridNumber = 24;

container.style.width = (gridNumber * 10) + "px";

// draw as many pixel boxes as gridNumber
for (i = 0; i < gridNumber * gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = "height: 8px; width: 8px; border: 1px solid black;";
  pixel.setAttribute('class', 'empty');

  pixel.addEventListener("mouseover", myTest)

  container.append(pixel);
//  console.log(i);
}

//pixels.addEventListener("mouseover", myTest);

function myTest() {
//  console.log("Moused Over");
  this.removeAttribute('empty');
  this.setAttribute('class', 'activated'); 
}