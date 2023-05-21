const container = document.getElementById("container");
const grid = document.getElementById("grid");
let gridNumber = 16;

let gridWidth = gridNumber + "px";
//let gridWidth = gridNumber + "px";

grid.style.width = gridWidth;
console.log(gridWidth);

container.style.width = (gridWidth * gridWidth) + "px";
console.log(container.style.width);

let pixelWidth = gridNumber;

for (i = 0; i < gridNumber; i++) {
  let pixel = document.createElement("div");
  pixel.style.cssText = `width: ${pixelWidth}px; height: ${pixelWidth}px; border: 1px solid gray;`;
  // pixel.style.cssText = "width: 8px; height: 8px; border: 1px solid gray;";
  grid.append(pixel);
  console.log(i);
}
