const container = document.getElementById("container");
let gridNumber = 4;

let containerWidth = container.offsetWidth;

// draw as many pixel boxes as gridNumber
for (i = 0; i < gridNumber * gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = "border: 1px solid black;";
  pixel.style.width = ((containerWidth / gridNumber) - 2) + "px";
  pixel.style.height = ((containerWidth / gridNumber) - 2) + "px";
  pixel.setAttribute('class', 'empty');

  pixel.addEventListener("mouseover", pixelHover)

  container.append(pixel);
}

console.log(containerWidth);

function pixelHover() {
  // console.log("Moused Over");
  this.removeAttribute("empty");
  this.setAttribute("class", "activated");
}

function getNumber() {
  if (gridNumber) {
    gridNumber = prompt("Please provide a number", "16");
  } else {
    gridNumber = prompt("Please provide a number", "16");
  }
  if (isNaN(gridNumber)) {
    alert("Must input numbers");
    return false;
  }
  if (gridNumber > 100) {
    alert("Please use a number between 1 and 100");
    return false;
  }
    console.log(`New Number is ${gridNumber}`);
    container.textContent = "";

  for (i = 0; i < gridNumber * gridNumber; i++) {
    let pixel = document.createElement("div");
    pixel.style.cssText = "border: 1px solid black;";
    pixel.style.width = containerWidth / gridNumber - 2 + "px";
    pixel.style.height = containerWidth / gridNumber - 2 + "px";
    pixel.setAttribute("class", "empty");

    pixel.addEventListener("mouseover", pixelHover);

    container.append(pixel);

    // console.log(i);
  }
}